package tests

import (
	"context"
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"

	"github.com/bytebase/bytebase/api"
	"github.com/bytebase/bytebase/plugin/vcs"
	"github.com/bytebase/bytebase/tests/fake"
)

func TestSheetVCS(t *testing.T) {
	tests := []struct {
		name               string
		vcsProviderCreator fake.VCSProviderCreator
		vcsType            vcs.Type
		externalID         string
		repositoryFullPath string
	}{
		{
			name:               "GitLab",
			vcsProviderCreator: fake.NewGitLab,
			vcsType:            vcs.GitLabSelfHost,
			externalID:         "121",
			repositoryFullPath: "test/schemaUpdate",
		},
		{
			name:               "GitHub",
			vcsProviderCreator: fake.NewGitHub,
			vcsType:            vcs.GitHubCom,
			externalID:         "octocat/Hello-World",
			repositoryFullPath: "octocat/Hello-World",
		},
	}
	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			t.Parallel()

			a := require.New(t)
			ctx := context.Background()
			ctl := &controller{}
			err := ctl.StartServer(ctx, t.TempDir(), test.vcsProviderCreator, getTestPort(t.Name()))
			a.NoError(err)
			defer func() {
				_ = ctl.Close(ctx)
			}()

			err = ctl.Login()
			a.NoError(err)
			err = ctl.setLicense()
			a.NoError(err)

			// Create a VCS.
			vcs, err := ctl.createVCS(
				api.VCSCreate{
					Name:          t.Name(),
					Type:          test.vcsType,
					InstanceURL:   ctl.vcsURL,
					APIURL:        ctl.vcsProvider.APIURL(ctl.vcsURL),
					ApplicationID: "testApplicationID",
					Secret:        "testApplicationSecret",
				},
			)
			a.NoError(err)

			// Create a project.
			project, err := ctl.createProject(
				api.ProjectCreate{
					Name: "Test VCS Project",
					Key:  "TestVCSSchemaUpdate",
				},
			)
			a.NoError(err)

			// Create a repository.
			ctl.vcsProvider.CreateRepository(test.externalID)
			_, err = ctl.createRepository(
				api.RepositoryCreate{
					VCSID:              vcs.ID,
					ProjectID:          project.ID,
					Name:               "Test Repository",
					FullPath:           test.repositoryFullPath,
					WebURL:             fmt.Sprintf("%s/%s", ctl.vcsURL, test.repositoryFullPath),
					BranchFilter:       "feature/foo",
					BaseDirectory:      baseDirectory,
					FilePathTemplate:   "{{ENV_NAME}}/{{DB_NAME}}##{{VERSION}}##{{TYPE}}##{{DESCRIPTION}}.sql",
					SchemaPathTemplate: "{{ENV_NAME}}/.{{DB_NAME}}##LATEST.sql",
					SheetPathTemplate:  "sheet/{{NAME}}.sql",
					ExternalID:         test.externalID,
					AccessToken:        "accessToken1",
					RefreshToken:       "refreshToken1",
				},
			)
			a.NoError(err)

			// Initial git files.
			gitFile := "sheet/all_employee.sql"
			fileContent := "SELECT * FROM employee"
			files := map[string]string{
				gitFile: fileContent,
			}
			files[gitFile] = fileContent
			err = ctl.vcsProvider.AddFiles(test.externalID, files)
			a.NoError(err)

			err = ctl.syncSheet(project.ID)
			a.NoError(err)

			sheets, err := ctl.listSheets(api.SheetFind{ProjectID: &project.ID})
			a.NoError(err)
			a.Len(sheets, 1)

			sheetFromVCS := sheets[0]
			a.Equal("all_employee", sheetFromVCS.Name)
			a.Equal(fileContent, sheetFromVCS.Statement)
		})
	}
}
