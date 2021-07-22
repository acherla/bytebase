import { Activity } from "./activity";
import { ServerInfo } from "./actuator";
import { Bookmark } from "./bookmark";
import { Command } from "./common";
import { Database } from "./database";
import { DataSource } from "./dataSource";
import { Environment } from "./environment";
import {
  CommandId,
  DatabaseId,
  DataSourceId,
  InstanceId,
  IssueId,
  PrincipalId,
  ProjectId,
  VCSId,
} from "./id";
import { Instance, MigrationHistory } from "./instance";
import { Issue } from "./issue";
import { IssueSubscriber } from "./issueSubscriber";
import { Member } from "./member";
import { Message } from "./message";
import { Notification } from "./notification";
import { PlanType } from "./plan";
import { Principal } from "./principal";
import { Project } from "./project";
import { Repository } from "./repository";
import { Setting, SettingName } from "./setting";
import { Table } from "./table";
import { VCS } from "./vcs";

export interface ActuatorState {
  serverInfo?: ServerInfo;
}

export interface AuthState {
  currentUser: Principal;
}

export interface SettingState {
  settingByName: Map<SettingName, Setting>;
}

export interface PlanState {
  plan: PlanType;
}

export interface MemberState {
  memberList: Member[];
}

export interface PrincipalState {
  principalList: Principal[];
}

export interface BookmarkState {
  bookmarkListByUser: Map<PrincipalId, Bookmark[]>;
}

export interface ActivityState {
  activityListByUser: Map<PrincipalId, Activity[]>;
  activityListByIssue: Map<IssueId, Activity[]>;
}

export interface MessageState {
  messageListByUser: Map<PrincipalId, Message[]>;
}

export interface IssueState {
  // [NOTE] This is only used by the issue list view. We don't
  // update the entry here if any issue is changed (the updated issue only gets updated in issueById).
  // Instead, we always fetch the list every time we display the issue list view.
  issueListByUser: Map<PrincipalId, Issue[]>;
  issueById: Map<IssueId, Issue>;
}

export interface IssueSubscriberState {
  subscriberListByIssue: Map<IssueId, IssueSubscriber[]>;
}

export interface PipelineState {}

export interface StageState {}

export interface TaskState {}

export interface ProjectState {
  projectById: Map<ProjectId, Project>;
}

export interface EnvironmentState {
  environmentList: Environment[];
}

export interface InstanceState {
  instanceById: Map<InstanceId, Instance>;
  // The key is a concatenation of instance id and database name
  migrationHistoryListByIdAndDatabaseName: Map<string, MigrationHistory[]>;
}

export interface DataSourceState {
  dataSourceById: Map<DataSourceId, DataSource>;
}

export interface DatabaseState {
  // UI may fetch the database list from different dimension (by user, by environment).
  // In those cases, we will iterate through this map and compute the list on the fly.
  // By keeping a single map, we avoid caching inconsistency issue.
  // We save it by instance because database belongs to instance and saving this way
  // follows that hierarchy.
  // If this causes performance issue, we will add caching later (and deal with the consistency)
  databaseListByInstanceId: Map<InstanceId, Database[]>;
}

export interface TableState {
  tableListByDatabaseId: Map<DatabaseId, Table[]>;
}

export interface VCSState {
  vcsById: Map<VCSId, VCS>;
}

export interface RepositoryState {
  // repositoryListByVCSId are used in workspace version control panel, while repositoryByProjectId are used in project version control panel.
  // Because they are used separately, so we don't need to worry about repository inconsistency issue betweem them.
  repositoryListByVCSId: Map<VCSId, Repository[]>;
  repositoryByProjectId: Map<ProjectId, Repository>;
}

export interface NotificationState {
  notificationByModule: Map<string, Notification[]>;
}

export interface CommandState {
  commandListById: Map<CommandId, Command[]>;
}
