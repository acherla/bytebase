/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Empty } from "../google/protobuf/empty";
import { FieldMask } from "../google/protobuf/field_mask";
import { Expr } from "../google/type/expr";
import {
  Engine,
  engineFromJSON,
  engineToJSON,
  engineToNumber,
  MaskingLevel,
  maskingLevelFromJSON,
  maskingLevelToJSON,
  maskingLevelToNumber,
} from "./common";

export const protobufPackage = "bytebase.v1";

export enum PolicyType {
  POLICY_TYPE_UNSPECIFIED = "POLICY_TYPE_UNSPECIFIED",
  ROLLOUT_POLICY = "ROLLOUT_POLICY",
  MASKING = "MASKING",
  SLOW_QUERY = "SLOW_QUERY",
  DISABLE_COPY_DATA = "DISABLE_COPY_DATA",
  MASKING_RULE = "MASKING_RULE",
  MASKING_EXCEPTION = "MASKING_EXCEPTION",
  RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW = "RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW",
  TAG = "TAG",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function policyTypeFromJSON(object: any): PolicyType {
  switch (object) {
    case 0:
    case "POLICY_TYPE_UNSPECIFIED":
      return PolicyType.POLICY_TYPE_UNSPECIFIED;
    case 11:
    case "ROLLOUT_POLICY":
      return PolicyType.ROLLOUT_POLICY;
    case 5:
    case "MASKING":
      return PolicyType.MASKING;
    case 7:
    case "SLOW_QUERY":
      return PolicyType.SLOW_QUERY;
    case 8:
    case "DISABLE_COPY_DATA":
      return PolicyType.DISABLE_COPY_DATA;
    case 9:
    case "MASKING_RULE":
      return PolicyType.MASKING_RULE;
    case 10:
    case "MASKING_EXCEPTION":
      return PolicyType.MASKING_EXCEPTION;
    case 12:
    case "RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW":
      return PolicyType.RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW;
    case 13:
    case "TAG":
      return PolicyType.TAG;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyType.UNRECOGNIZED;
  }
}

export function policyTypeToJSON(object: PolicyType): string {
  switch (object) {
    case PolicyType.POLICY_TYPE_UNSPECIFIED:
      return "POLICY_TYPE_UNSPECIFIED";
    case PolicyType.ROLLOUT_POLICY:
      return "ROLLOUT_POLICY";
    case PolicyType.MASKING:
      return "MASKING";
    case PolicyType.SLOW_QUERY:
      return "SLOW_QUERY";
    case PolicyType.DISABLE_COPY_DATA:
      return "DISABLE_COPY_DATA";
    case PolicyType.MASKING_RULE:
      return "MASKING_RULE";
    case PolicyType.MASKING_EXCEPTION:
      return "MASKING_EXCEPTION";
    case PolicyType.RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW:
      return "RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW";
    case PolicyType.TAG:
      return "TAG";
    case PolicyType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function policyTypeToNumber(object: PolicyType): number {
  switch (object) {
    case PolicyType.POLICY_TYPE_UNSPECIFIED:
      return 0;
    case PolicyType.ROLLOUT_POLICY:
      return 11;
    case PolicyType.MASKING:
      return 5;
    case PolicyType.SLOW_QUERY:
      return 7;
    case PolicyType.DISABLE_COPY_DATA:
      return 8;
    case PolicyType.MASKING_RULE:
      return 9;
    case PolicyType.MASKING_EXCEPTION:
      return 10;
    case PolicyType.RESTRICT_ISSUE_CREATION_FOR_SQL_REVIEW:
      return 12;
    case PolicyType.TAG:
      return 13;
    case PolicyType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum PolicyResourceType {
  RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED",
  WORKSPACE = "WORKSPACE",
  ENVIRONMENT = "ENVIRONMENT",
  PROJECT = "PROJECT",
  INSTANCE = "INSTANCE",
  DATABASE = "DATABASE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function policyResourceTypeFromJSON(object: any): PolicyResourceType {
  switch (object) {
    case 0:
    case "RESOURCE_TYPE_UNSPECIFIED":
      return PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED;
    case 1:
    case "WORKSPACE":
      return PolicyResourceType.WORKSPACE;
    case 2:
    case "ENVIRONMENT":
      return PolicyResourceType.ENVIRONMENT;
    case 3:
    case "PROJECT":
      return PolicyResourceType.PROJECT;
    case 4:
    case "INSTANCE":
      return PolicyResourceType.INSTANCE;
    case 5:
    case "DATABASE":
      return PolicyResourceType.DATABASE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PolicyResourceType.UNRECOGNIZED;
  }
}

export function policyResourceTypeToJSON(object: PolicyResourceType): string {
  switch (object) {
    case PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED:
      return "RESOURCE_TYPE_UNSPECIFIED";
    case PolicyResourceType.WORKSPACE:
      return "WORKSPACE";
    case PolicyResourceType.ENVIRONMENT:
      return "ENVIRONMENT";
    case PolicyResourceType.PROJECT:
      return "PROJECT";
    case PolicyResourceType.INSTANCE:
      return "INSTANCE";
    case PolicyResourceType.DATABASE:
      return "DATABASE";
    case PolicyResourceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function policyResourceTypeToNumber(object: PolicyResourceType): number {
  switch (object) {
    case PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED:
      return 0;
    case PolicyResourceType.WORKSPACE:
      return 1;
    case PolicyResourceType.ENVIRONMENT:
      return 2;
    case PolicyResourceType.PROJECT:
      return 3;
    case PolicyResourceType.INSTANCE:
      return 4;
    case PolicyResourceType.DATABASE:
      return 5;
    case PolicyResourceType.UNRECOGNIZED:
    default:
      return -1;
  }
}

export enum SQLReviewRuleLevel {
  LEVEL_UNSPECIFIED = "LEVEL_UNSPECIFIED",
  ERROR = "ERROR",
  WARNING = "WARNING",
  DISABLED = "DISABLED",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function sQLReviewRuleLevelFromJSON(object: any): SQLReviewRuleLevel {
  switch (object) {
    case 0:
    case "LEVEL_UNSPECIFIED":
      return SQLReviewRuleLevel.LEVEL_UNSPECIFIED;
    case 1:
    case "ERROR":
      return SQLReviewRuleLevel.ERROR;
    case 2:
    case "WARNING":
      return SQLReviewRuleLevel.WARNING;
    case 3:
    case "DISABLED":
      return SQLReviewRuleLevel.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SQLReviewRuleLevel.UNRECOGNIZED;
  }
}

export function sQLReviewRuleLevelToJSON(object: SQLReviewRuleLevel): string {
  switch (object) {
    case SQLReviewRuleLevel.LEVEL_UNSPECIFIED:
      return "LEVEL_UNSPECIFIED";
    case SQLReviewRuleLevel.ERROR:
      return "ERROR";
    case SQLReviewRuleLevel.WARNING:
      return "WARNING";
    case SQLReviewRuleLevel.DISABLED:
      return "DISABLED";
    case SQLReviewRuleLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function sQLReviewRuleLevelToNumber(object: SQLReviewRuleLevel): number {
  switch (object) {
    case SQLReviewRuleLevel.LEVEL_UNSPECIFIED:
      return 0;
    case SQLReviewRuleLevel.ERROR:
      return 1;
    case SQLReviewRuleLevel.WARNING:
      return 2;
    case SQLReviewRuleLevel.DISABLED:
      return 3;
    case SQLReviewRuleLevel.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface CreatePolicyRequest {
  /**
   * The parent resource where this instance will be created.
   * Workspace resource name: "".
   * Environment resource name: environments/environment-id.
   * Instance resource name: instances/instance-id.
   * Database resource name: instances/instance-id/databases/database-name.
   */
  parent: string;
  /** The policy to create. */
  policy: Policy | undefined;
  type: PolicyType;
}

export interface UpdatePolicyRequest {
  /**
   * The policy to update.
   *
   * The policy's `name` field is used to identify the instance to update.
   * Format: {resource name}/policies/{policy type}
   * Workspace resource name: "".
   * Environment resource name: environments/environment-id.
   * Instance resource name: instances/instance-id.
   * Database resource name: instances/instance-id/databases/database-name.
   */
  policy:
    | Policy
    | undefined;
  /** The list of fields to update. */
  updateMask:
    | string[]
    | undefined;
  /**
   * If set to true, and the policy is not found, a new policy will be created.
   * In this situation, `update_mask` is ignored.
   */
  allowMissing: boolean;
}

export interface DeletePolicyRequest {
  /**
   * The policy's `name` field is used to identify the instance to update.
   * Format: {resource name}/policies/{policy type}
   * Workspace resource name: "".
   * Environment resource name: environments/environment-id.
   * Instance resource name: instances/instance-id.
   * Database resource name: instances/instance-id/databases/database-name.
   */
  name: string;
}

export interface GetPolicyRequest {
  /**
   * The name of the policy to retrieve.
   * Format: {resource type}/{resource id}/policies/{policy type}
   */
  name: string;
}

export interface ListPoliciesRequest {
  /**
   * The parent, which owns this collection of policies.
   * Format: {resource type}/{resource id}
   */
  parent: string;
  policyType?:
    | PolicyType
    | undefined;
  /**
   * The maximum number of policies to return. The service may return fewer than
   * this value.
   * If unspecified, at most 50 policies will be returned.
   * The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  pageSize: number;
  /**
   * A page token, received from a previous `GetPolicies` call.
   * Provide this to retrieve the subsequent page.
   *
   * When paginating, all other parameters provided to `GetPolicies` must match
   * the call that provided the page token.
   */
  pageToken: string;
  /** Show deleted policies if specified. */
  showDeleted: boolean;
}

export interface ListPoliciesResponse {
  /** The policies from the specified request. */
  policies: Policy[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page.
   * If this field is omitted, there are no subsequent pages.
   */
  nextPageToken: string;
}

export interface Policy {
  /**
   * The name of the policy.
   * Format: {resource name}/policies/{policy type}
   * Workspace resource name: "".
   * Environment resource name: environments/environment-id.
   * Instance resource name: instances/instance-id.
   * Database resource name: instances/instance-id/databases/database-name.
   */
  name: string;
  /** The system-assigned, unique identifier for a resource. */
  uid: string;
  inheritFromParent: boolean;
  type: PolicyType;
  rolloutPolicy?: RolloutPolicy | undefined;
  maskingPolicy?: MaskingPolicy | undefined;
  slowQueryPolicy?: SlowQueryPolicy | undefined;
  disableCopyDataPolicy?: DisableCopyDataPolicy | undefined;
  maskingRulePolicy?: MaskingRulePolicy | undefined;
  maskingExceptionPolicy?: MaskingExceptionPolicy | undefined;
  restrictIssueCreationForSqlReviewPolicy?: RestrictIssueCreationForSQLReviewPolicy | undefined;
  tagPolicy?: TagPolicy | undefined;
  dataSourceQueryPolicy?: DataSourceQueryPolicy | undefined;
  enforce: boolean;
  /** The resource type for the policy. */
  resourceType: PolicyResourceType;
  /** The system-assigned, unique identifier for the resource. */
  resourceUid: string;
}

export interface RolloutPolicy {
  automatic: boolean;
  workspaceRoles: string[];
  projectRoles: string[];
  /**
   * roles/LAST_APPROVER
   * roles/CREATOR
   */
  issueRoles: string[];
}

export interface SlowQueryPolicy {
  active: boolean;
}

export interface DisableCopyDataPolicy {
  active: boolean;
}

export interface MaskingPolicy {
  maskData: MaskData[];
}

export interface MaskData {
  schema: string;
  table: string;
  column: string;
  maskingLevel: MaskingLevel;
  fullMaskingAlgorithmId: string;
  partialMaskingAlgorithmId: string;
}

export interface SQLReviewRule {
  type: string;
  level: SQLReviewRuleLevel;
  payload: string;
  engine: Engine;
  comment: string;
}

/** MaskingExceptionPolicy is the allowlist of users who can access sensitive data. */
export interface MaskingExceptionPolicy {
  maskingExceptions: MaskingExceptionPolicy_MaskingException[];
}

export interface MaskingExceptionPolicy_MaskingException {
  /** action is the action that the user can access sensitive data. */
  action: MaskingExceptionPolicy_MaskingException_Action;
  /** Level is the masking level that the user can access sensitive data. */
  maskingLevel: MaskingLevel;
  /**
   * Member is the principal who bind to this exception policy instance.
   *
   * - `user:{email}`: An email address that represents a specific Bytebase account. For example, `alice@example.com`.
   * - `group:{email}`: An email address for group.
   */
  member: string;
  /** The condition that is associated with this exception policy instance. */
  condition: Expr | undefined;
}

export enum MaskingExceptionPolicy_MaskingException_Action {
  ACTION_UNSPECIFIED = "ACTION_UNSPECIFIED",
  QUERY = "QUERY",
  EXPORT = "EXPORT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function maskingExceptionPolicy_MaskingException_ActionFromJSON(
  object: any,
): MaskingExceptionPolicy_MaskingException_Action {
  switch (object) {
    case 0:
    case "ACTION_UNSPECIFIED":
      return MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED;
    case 1:
    case "QUERY":
      return MaskingExceptionPolicy_MaskingException_Action.QUERY;
    case 2:
    case "EXPORT":
      return MaskingExceptionPolicy_MaskingException_Action.EXPORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MaskingExceptionPolicy_MaskingException_Action.UNRECOGNIZED;
  }
}

export function maskingExceptionPolicy_MaskingException_ActionToJSON(
  object: MaskingExceptionPolicy_MaskingException_Action,
): string {
  switch (object) {
    case MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED:
      return "ACTION_UNSPECIFIED";
    case MaskingExceptionPolicy_MaskingException_Action.QUERY:
      return "QUERY";
    case MaskingExceptionPolicy_MaskingException_Action.EXPORT:
      return "EXPORT";
    case MaskingExceptionPolicy_MaskingException_Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function maskingExceptionPolicy_MaskingException_ActionToNumber(
  object: MaskingExceptionPolicy_MaskingException_Action,
): number {
  switch (object) {
    case MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED:
      return 0;
    case MaskingExceptionPolicy_MaskingException_Action.QUERY:
      return 1;
    case MaskingExceptionPolicy_MaskingException_Action.EXPORT:
      return 2;
    case MaskingExceptionPolicy_MaskingException_Action.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface MaskingRulePolicy {
  rules: MaskingRulePolicy_MaskingRule[];
}

export interface MaskingRulePolicy_MaskingRule {
  /** A unique identifier for a node in UUID format. */
  id: string;
  condition: Expr | undefined;
  maskingLevel: MaskingLevel;
}

export interface RestrictIssueCreationForSQLReviewPolicy {
  disallow: boolean;
}

export interface TagPolicy {
  /**
   * tags is the key - value map for resources.
   * for example, the environment resource can have the sql review config tag, like "bb.tag.review_config": "reviewConfigs/{review config resource id}"
   */
  tags: { [key: string]: string };
}

export interface TagPolicy_TagsEntry {
  key: string;
  value: string;
}

export interface DataSourceQueryPolicy {
  adminDataSourceRestriction: DataSourceQueryPolicy_Restricton;
}

export enum DataSourceQueryPolicy_Restricton {
  RESTRICTION_UNSPECIFIED = "RESTRICTION_UNSPECIFIED",
  /** FALLBACK - Allow to query admin data sources when there is no read-only data source. */
  FALLBACK = "FALLBACK",
  /** DISALLOW - Disallow to query admin data sources. */
  DISALLOW = "DISALLOW",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataSourceQueryPolicy_RestrictonFromJSON(object: any): DataSourceQueryPolicy_Restricton {
  switch (object) {
    case 0:
    case "RESTRICTION_UNSPECIFIED":
      return DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED;
    case 1:
    case "FALLBACK":
      return DataSourceQueryPolicy_Restricton.FALLBACK;
    case 2:
    case "DISALLOW":
      return DataSourceQueryPolicy_Restricton.DISALLOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataSourceQueryPolicy_Restricton.UNRECOGNIZED;
  }
}

export function dataSourceQueryPolicy_RestrictonToJSON(object: DataSourceQueryPolicy_Restricton): string {
  switch (object) {
    case DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED:
      return "RESTRICTION_UNSPECIFIED";
    case DataSourceQueryPolicy_Restricton.FALLBACK:
      return "FALLBACK";
    case DataSourceQueryPolicy_Restricton.DISALLOW:
      return "DISALLOW";
    case DataSourceQueryPolicy_Restricton.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function dataSourceQueryPolicy_RestrictonToNumber(object: DataSourceQueryPolicy_Restricton): number {
  switch (object) {
    case DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED:
      return 0;
    case DataSourceQueryPolicy_Restricton.FALLBACK:
      return 1;
    case DataSourceQueryPolicy_Restricton.DISALLOW:
      return 2;
    case DataSourceQueryPolicy_Restricton.UNRECOGNIZED:
    default:
      return -1;
  }
}

function createBaseCreatePolicyRequest(): CreatePolicyRequest {
  return { parent: "", policy: undefined, type: PolicyType.POLICY_TYPE_UNSPECIFIED };
}

export const CreatePolicyRequest = {
  encode(message: CreatePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(18).fork()).ldelim();
    }
    if (message.type !== PolicyType.POLICY_TYPE_UNSPECIFIED) {
      writer.uint32(24).int32(policyTypeToNumber(message.type));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.policy = Policy.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = policyTypeFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePolicyRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
      type: isSet(object.type) ? policyTypeFromJSON(object.type) : PolicyType.POLICY_TYPE_UNSPECIFIED,
    };
  },

  toJSON(message: CreatePolicyRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.policy !== undefined) {
      obj.policy = Policy.toJSON(message.policy);
    }
    if (message.type !== PolicyType.POLICY_TYPE_UNSPECIFIED) {
      obj.type = policyTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<CreatePolicyRequest>): CreatePolicyRequest {
    return CreatePolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreatePolicyRequest>): CreatePolicyRequest {
    const message = createBaseCreatePolicyRequest();
    message.parent = object.parent ?? "";
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    message.type = object.type ?? PolicyType.POLICY_TYPE_UNSPECIFIED;
    return message;
  },
};

function createBaseUpdatePolicyRequest(): UpdatePolicyRequest {
  return { policy: undefined, updateMask: undefined, allowMissing: false };
}

export const UpdatePolicyRequest = {
  encode(message: UpdatePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.policy !== undefined) {
      Policy.encode(message.policy, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
    }
    if (message.allowMissing === true) {
      writer.uint32(24).bool(message.allowMissing);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policy = Policy.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.allowMissing = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePolicyRequest {
    return {
      policy: isSet(object.policy) ? Policy.fromJSON(object.policy) : undefined,
      updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
      allowMissing: isSet(object.allowMissing) ? globalThis.Boolean(object.allowMissing) : false,
    };
  },

  toJSON(message: UpdatePolicyRequest): unknown {
    const obj: any = {};
    if (message.policy !== undefined) {
      obj.policy = Policy.toJSON(message.policy);
    }
    if (message.updateMask !== undefined) {
      obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask));
    }
    if (message.allowMissing === true) {
      obj.allowMissing = message.allowMissing;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdatePolicyRequest>): UpdatePolicyRequest {
    return UpdatePolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatePolicyRequest>): UpdatePolicyRequest {
    const message = createBaseUpdatePolicyRequest();
    message.policy = (object.policy !== undefined && object.policy !== null)
      ? Policy.fromPartial(object.policy)
      : undefined;
    message.updateMask = object.updateMask ?? undefined;
    message.allowMissing = object.allowMissing ?? false;
    return message;
  },
};

function createBaseDeletePolicyRequest(): DeletePolicyRequest {
  return { name: "" };
}

export const DeletePolicyRequest = {
  encode(message: DeletePolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeletePolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeletePolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeletePolicyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: DeletePolicyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<DeletePolicyRequest>): DeletePolicyRequest {
    return DeletePolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeletePolicyRequest>): DeletePolicyRequest {
    const message = createBaseDeletePolicyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetPolicyRequest(): GetPolicyRequest {
  return { name: "" };
}

export const GetPolicyRequest = {
  encode(message: GetPolicyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPolicyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPolicyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPolicyRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
  },

  toJSON(message: GetPolicyRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetPolicyRequest>): GetPolicyRequest {
    return GetPolicyRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetPolicyRequest>): GetPolicyRequest {
    const message = createBaseGetPolicyRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListPoliciesRequest(): ListPoliciesRequest {
  return { parent: "", policyType: undefined, pageSize: 0, pageToken: "", showDeleted: false };
}

export const ListPoliciesRequest = {
  encode(message: ListPoliciesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.policyType !== undefined) {
      writer.uint32(16).int32(policyTypeToNumber(message.policyType));
    }
    if (message.pageSize !== 0) {
      writer.uint32(24).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(34).string(message.pageToken);
    }
    if (message.showDeleted === true) {
      writer.uint32(40).bool(message.showDeleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPoliciesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoliciesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.policyType = policyTypeFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pageSize = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pageToken = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.showDeleted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPoliciesRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      policyType: isSet(object.policyType) ? policyTypeFromJSON(object.policyType) : undefined,
      pageSize: isSet(object.pageSize) ? globalThis.Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? globalThis.String(object.pageToken) : "",
      showDeleted: isSet(object.showDeleted) ? globalThis.Boolean(object.showDeleted) : false,
    };
  },

  toJSON(message: ListPoliciesRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.policyType !== undefined) {
      obj.policyType = policyTypeToJSON(message.policyType);
    }
    if (message.pageSize !== 0) {
      obj.pageSize = Math.round(message.pageSize);
    }
    if (message.pageToken !== "") {
      obj.pageToken = message.pageToken;
    }
    if (message.showDeleted === true) {
      obj.showDeleted = message.showDeleted;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPoliciesRequest>): ListPoliciesRequest {
    return ListPoliciesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPoliciesRequest>): ListPoliciesRequest {
    const message = createBaseListPoliciesRequest();
    message.parent = object.parent ?? "";
    message.policyType = object.policyType ?? undefined;
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.showDeleted = object.showDeleted ?? false;
    return message;
  },
};

function createBaseListPoliciesResponse(): ListPoliciesResponse {
  return { policies: [], nextPageToken: "" };
}

export const ListPoliciesResponse = {
  encode(message: ListPoliciesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.policies) {
      Policy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.policies.push(Policy.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextPageToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListPoliciesResponse {
    return {
      policies: globalThis.Array.isArray(object?.policies) ? object.policies.map((e: any) => Policy.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? globalThis.String(object.nextPageToken) : "",
    };
  },

  toJSON(message: ListPoliciesResponse): unknown {
    const obj: any = {};
    if (message.policies?.length) {
      obj.policies = message.policies.map((e) => Policy.toJSON(e));
    }
    if (message.nextPageToken !== "") {
      obj.nextPageToken = message.nextPageToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ListPoliciesResponse>): ListPoliciesResponse {
    return ListPoliciesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListPoliciesResponse>): ListPoliciesResponse {
    const message = createBaseListPoliciesResponse();
    message.policies = object.policies?.map((e) => Policy.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBasePolicy(): Policy {
  return {
    name: "",
    uid: "",
    inheritFromParent: false,
    type: PolicyType.POLICY_TYPE_UNSPECIFIED,
    rolloutPolicy: undefined,
    maskingPolicy: undefined,
    slowQueryPolicy: undefined,
    disableCopyDataPolicy: undefined,
    maskingRulePolicy: undefined,
    maskingExceptionPolicy: undefined,
    restrictIssueCreationForSqlReviewPolicy: undefined,
    tagPolicy: undefined,
    dataSourceQueryPolicy: undefined,
    enforce: false,
    resourceType: PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED,
    resourceUid: "",
  };
}

export const Policy = {
  encode(message: Policy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.uid !== "") {
      writer.uint32(18).string(message.uid);
    }
    if (message.inheritFromParent === true) {
      writer.uint32(32).bool(message.inheritFromParent);
    }
    if (message.type !== PolicyType.POLICY_TYPE_UNSPECIFIED) {
      writer.uint32(40).int32(policyTypeToNumber(message.type));
    }
    if (message.rolloutPolicy !== undefined) {
      RolloutPolicy.encode(message.rolloutPolicy, writer.uint32(154).fork()).ldelim();
    }
    if (message.maskingPolicy !== undefined) {
      MaskingPolicy.encode(message.maskingPolicy, writer.uint32(74).fork()).ldelim();
    }
    if (message.slowQueryPolicy !== undefined) {
      SlowQueryPolicy.encode(message.slowQueryPolicy, writer.uint32(98).fork()).ldelim();
    }
    if (message.disableCopyDataPolicy !== undefined) {
      DisableCopyDataPolicy.encode(message.disableCopyDataPolicy, writer.uint32(130).fork()).ldelim();
    }
    if (message.maskingRulePolicy !== undefined) {
      MaskingRulePolicy.encode(message.maskingRulePolicy, writer.uint32(138).fork()).ldelim();
    }
    if (message.maskingExceptionPolicy !== undefined) {
      MaskingExceptionPolicy.encode(message.maskingExceptionPolicy, writer.uint32(146).fork()).ldelim();
    }
    if (message.restrictIssueCreationForSqlReviewPolicy !== undefined) {
      RestrictIssueCreationForSQLReviewPolicy.encode(
        message.restrictIssueCreationForSqlReviewPolicy,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.tagPolicy !== undefined) {
      TagPolicy.encode(message.tagPolicy, writer.uint32(170).fork()).ldelim();
    }
    if (message.dataSourceQueryPolicy !== undefined) {
      DataSourceQueryPolicy.encode(message.dataSourceQueryPolicy, writer.uint32(178).fork()).ldelim();
    }
    if (message.enforce === true) {
      writer.uint32(104).bool(message.enforce);
    }
    if (message.resourceType !== PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED) {
      writer.uint32(112).int32(policyResourceTypeToNumber(message.resourceType));
    }
    if (message.resourceUid !== "") {
      writer.uint32(122).string(message.resourceUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Policy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.inheritFromParent = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = policyTypeFromJSON(reader.int32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.rolloutPolicy = RolloutPolicy.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.maskingPolicy = MaskingPolicy.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.slowQueryPolicy = SlowQueryPolicy.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.disableCopyDataPolicy = DisableCopyDataPolicy.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.maskingRulePolicy = MaskingRulePolicy.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.maskingExceptionPolicy = MaskingExceptionPolicy.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.restrictIssueCreationForSqlReviewPolicy = RestrictIssueCreationForSQLReviewPolicy.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.tagPolicy = TagPolicy.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.dataSourceQueryPolicy = DataSourceQueryPolicy.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.enforce = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.resourceType = policyResourceTypeFromJSON(reader.int32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.resourceUid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Policy {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      inheritFromParent: isSet(object.inheritFromParent) ? globalThis.Boolean(object.inheritFromParent) : false,
      type: isSet(object.type) ? policyTypeFromJSON(object.type) : PolicyType.POLICY_TYPE_UNSPECIFIED,
      rolloutPolicy: isSet(object.rolloutPolicy) ? RolloutPolicy.fromJSON(object.rolloutPolicy) : undefined,
      maskingPolicy: isSet(object.maskingPolicy) ? MaskingPolicy.fromJSON(object.maskingPolicy) : undefined,
      slowQueryPolicy: isSet(object.slowQueryPolicy) ? SlowQueryPolicy.fromJSON(object.slowQueryPolicy) : undefined,
      disableCopyDataPolicy: isSet(object.disableCopyDataPolicy)
        ? DisableCopyDataPolicy.fromJSON(object.disableCopyDataPolicy)
        : undefined,
      maskingRulePolicy: isSet(object.maskingRulePolicy)
        ? MaskingRulePolicy.fromJSON(object.maskingRulePolicy)
        : undefined,
      maskingExceptionPolicy: isSet(object.maskingExceptionPolicy)
        ? MaskingExceptionPolicy.fromJSON(object.maskingExceptionPolicy)
        : undefined,
      restrictIssueCreationForSqlReviewPolicy: isSet(object.restrictIssueCreationForSqlReviewPolicy)
        ? RestrictIssueCreationForSQLReviewPolicy.fromJSON(object.restrictIssueCreationForSqlReviewPolicy)
        : undefined,
      tagPolicy: isSet(object.tagPolicy) ? TagPolicy.fromJSON(object.tagPolicy) : undefined,
      dataSourceQueryPolicy: isSet(object.dataSourceQueryPolicy)
        ? DataSourceQueryPolicy.fromJSON(object.dataSourceQueryPolicy)
        : undefined,
      enforce: isSet(object.enforce) ? globalThis.Boolean(object.enforce) : false,
      resourceType: isSet(object.resourceType)
        ? policyResourceTypeFromJSON(object.resourceType)
        : PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED,
      resourceUid: isSet(object.resourceUid) ? globalThis.String(object.resourceUid) : "",
    };
  },

  toJSON(message: Policy): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.inheritFromParent === true) {
      obj.inheritFromParent = message.inheritFromParent;
    }
    if (message.type !== PolicyType.POLICY_TYPE_UNSPECIFIED) {
      obj.type = policyTypeToJSON(message.type);
    }
    if (message.rolloutPolicy !== undefined) {
      obj.rolloutPolicy = RolloutPolicy.toJSON(message.rolloutPolicy);
    }
    if (message.maskingPolicy !== undefined) {
      obj.maskingPolicy = MaskingPolicy.toJSON(message.maskingPolicy);
    }
    if (message.slowQueryPolicy !== undefined) {
      obj.slowQueryPolicy = SlowQueryPolicy.toJSON(message.slowQueryPolicy);
    }
    if (message.disableCopyDataPolicy !== undefined) {
      obj.disableCopyDataPolicy = DisableCopyDataPolicy.toJSON(message.disableCopyDataPolicy);
    }
    if (message.maskingRulePolicy !== undefined) {
      obj.maskingRulePolicy = MaskingRulePolicy.toJSON(message.maskingRulePolicy);
    }
    if (message.maskingExceptionPolicy !== undefined) {
      obj.maskingExceptionPolicy = MaskingExceptionPolicy.toJSON(message.maskingExceptionPolicy);
    }
    if (message.restrictIssueCreationForSqlReviewPolicy !== undefined) {
      obj.restrictIssueCreationForSqlReviewPolicy = RestrictIssueCreationForSQLReviewPolicy.toJSON(
        message.restrictIssueCreationForSqlReviewPolicy,
      );
    }
    if (message.tagPolicy !== undefined) {
      obj.tagPolicy = TagPolicy.toJSON(message.tagPolicy);
    }
    if (message.dataSourceQueryPolicy !== undefined) {
      obj.dataSourceQueryPolicy = DataSourceQueryPolicy.toJSON(message.dataSourceQueryPolicy);
    }
    if (message.enforce === true) {
      obj.enforce = message.enforce;
    }
    if (message.resourceType !== PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED) {
      obj.resourceType = policyResourceTypeToJSON(message.resourceType);
    }
    if (message.resourceUid !== "") {
      obj.resourceUid = message.resourceUid;
    }
    return obj;
  },

  create(base?: DeepPartial<Policy>): Policy {
    return Policy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Policy>): Policy {
    const message = createBasePolicy();
    message.name = object.name ?? "";
    message.uid = object.uid ?? "";
    message.inheritFromParent = object.inheritFromParent ?? false;
    message.type = object.type ?? PolicyType.POLICY_TYPE_UNSPECIFIED;
    message.rolloutPolicy = (object.rolloutPolicy !== undefined && object.rolloutPolicy !== null)
      ? RolloutPolicy.fromPartial(object.rolloutPolicy)
      : undefined;
    message.maskingPolicy = (object.maskingPolicy !== undefined && object.maskingPolicy !== null)
      ? MaskingPolicy.fromPartial(object.maskingPolicy)
      : undefined;
    message.slowQueryPolicy = (object.slowQueryPolicy !== undefined && object.slowQueryPolicy !== null)
      ? SlowQueryPolicy.fromPartial(object.slowQueryPolicy)
      : undefined;
    message.disableCopyDataPolicy =
      (object.disableCopyDataPolicy !== undefined && object.disableCopyDataPolicy !== null)
        ? DisableCopyDataPolicy.fromPartial(object.disableCopyDataPolicy)
        : undefined;
    message.maskingRulePolicy = (object.maskingRulePolicy !== undefined && object.maskingRulePolicy !== null)
      ? MaskingRulePolicy.fromPartial(object.maskingRulePolicy)
      : undefined;
    message.maskingExceptionPolicy =
      (object.maskingExceptionPolicy !== undefined && object.maskingExceptionPolicy !== null)
        ? MaskingExceptionPolicy.fromPartial(object.maskingExceptionPolicy)
        : undefined;
    message.restrictIssueCreationForSqlReviewPolicy =
      (object.restrictIssueCreationForSqlReviewPolicy !== undefined &&
          object.restrictIssueCreationForSqlReviewPolicy !== null)
        ? RestrictIssueCreationForSQLReviewPolicy.fromPartial(object.restrictIssueCreationForSqlReviewPolicy)
        : undefined;
    message.tagPolicy = (object.tagPolicy !== undefined && object.tagPolicy !== null)
      ? TagPolicy.fromPartial(object.tagPolicy)
      : undefined;
    message.dataSourceQueryPolicy =
      (object.dataSourceQueryPolicy !== undefined && object.dataSourceQueryPolicy !== null)
        ? DataSourceQueryPolicy.fromPartial(object.dataSourceQueryPolicy)
        : undefined;
    message.enforce = object.enforce ?? false;
    message.resourceType = object.resourceType ?? PolicyResourceType.RESOURCE_TYPE_UNSPECIFIED;
    message.resourceUid = object.resourceUid ?? "";
    return message;
  },
};

function createBaseRolloutPolicy(): RolloutPolicy {
  return { automatic: false, workspaceRoles: [], projectRoles: [], issueRoles: [] };
}

export const RolloutPolicy = {
  encode(message: RolloutPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.automatic === true) {
      writer.uint32(8).bool(message.automatic);
    }
    for (const v of message.workspaceRoles) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.projectRoles) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.issueRoles) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RolloutPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRolloutPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.automatic = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.workspaceRoles.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectRoles.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.issueRoles.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RolloutPolicy {
    return {
      automatic: isSet(object.automatic) ? globalThis.Boolean(object.automatic) : false,
      workspaceRoles: globalThis.Array.isArray(object?.workspaceRoles)
        ? object.workspaceRoles.map((e: any) => globalThis.String(e))
        : [],
      projectRoles: globalThis.Array.isArray(object?.projectRoles)
        ? object.projectRoles.map((e: any) => globalThis.String(e))
        : [],
      issueRoles: globalThis.Array.isArray(object?.issueRoles)
        ? object.issueRoles.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RolloutPolicy): unknown {
    const obj: any = {};
    if (message.automatic === true) {
      obj.automatic = message.automatic;
    }
    if (message.workspaceRoles?.length) {
      obj.workspaceRoles = message.workspaceRoles;
    }
    if (message.projectRoles?.length) {
      obj.projectRoles = message.projectRoles;
    }
    if (message.issueRoles?.length) {
      obj.issueRoles = message.issueRoles;
    }
    return obj;
  },

  create(base?: DeepPartial<RolloutPolicy>): RolloutPolicy {
    return RolloutPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RolloutPolicy>): RolloutPolicy {
    const message = createBaseRolloutPolicy();
    message.automatic = object.automatic ?? false;
    message.workspaceRoles = object.workspaceRoles?.map((e) => e) || [];
    message.projectRoles = object.projectRoles?.map((e) => e) || [];
    message.issueRoles = object.issueRoles?.map((e) => e) || [];
    return message;
  },
};

function createBaseSlowQueryPolicy(): SlowQueryPolicy {
  return { active: false };
}

export const SlowQueryPolicy = {
  encode(message: SlowQueryPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlowQueryPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlowQueryPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlowQueryPolicy {
    return { active: isSet(object.active) ? globalThis.Boolean(object.active) : false };
  },

  toJSON(message: SlowQueryPolicy): unknown {
    const obj: any = {};
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create(base?: DeepPartial<SlowQueryPolicy>): SlowQueryPolicy {
    return SlowQueryPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SlowQueryPolicy>): SlowQueryPolicy {
    const message = createBaseSlowQueryPolicy();
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseDisableCopyDataPolicy(): DisableCopyDataPolicy {
  return { active: false };
}

export const DisableCopyDataPolicy = {
  encode(message: DisableCopyDataPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DisableCopyDataPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableCopyDataPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DisableCopyDataPolicy {
    return { active: isSet(object.active) ? globalThis.Boolean(object.active) : false };
  },

  toJSON(message: DisableCopyDataPolicy): unknown {
    const obj: any = {};
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create(base?: DeepPartial<DisableCopyDataPolicy>): DisableCopyDataPolicy {
    return DisableCopyDataPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DisableCopyDataPolicy>): DisableCopyDataPolicy {
    const message = createBaseDisableCopyDataPolicy();
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseMaskingPolicy(): MaskingPolicy {
  return { maskData: [] };
}

export const MaskingPolicy = {
  encode(message: MaskingPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maskData) {
      MaskData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskingPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskingPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maskData.push(MaskData.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskingPolicy {
    return {
      maskData: globalThis.Array.isArray(object?.maskData) ? object.maskData.map((e: any) => MaskData.fromJSON(e)) : [],
    };
  },

  toJSON(message: MaskingPolicy): unknown {
    const obj: any = {};
    if (message.maskData?.length) {
      obj.maskData = message.maskData.map((e) => MaskData.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MaskingPolicy>): MaskingPolicy {
    return MaskingPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskingPolicy>): MaskingPolicy {
    const message = createBaseMaskingPolicy();
    message.maskData = object.maskData?.map((e) => MaskData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMaskData(): MaskData {
  return {
    schema: "",
    table: "",
    column: "",
    maskingLevel: MaskingLevel.MASKING_LEVEL_UNSPECIFIED,
    fullMaskingAlgorithmId: "",
    partialMaskingAlgorithmId: "",
  };
}

export const MaskData = {
  encode(message: MaskData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== "") {
      writer.uint32(10).string(message.schema);
    }
    if (message.table !== "") {
      writer.uint32(18).string(message.table);
    }
    if (message.column !== "") {
      writer.uint32(26).string(message.column);
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      writer.uint32(32).int32(maskingLevelToNumber(message.maskingLevel));
    }
    if (message.fullMaskingAlgorithmId !== "") {
      writer.uint32(42).string(message.fullMaskingAlgorithmId);
    }
    if (message.partialMaskingAlgorithmId !== "") {
      writer.uint32(50).string(message.partialMaskingAlgorithmId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schema = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.table = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.column = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maskingLevel = maskingLevelFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.fullMaskingAlgorithmId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.partialMaskingAlgorithmId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskData {
    return {
      schema: isSet(object.schema) ? globalThis.String(object.schema) : "",
      table: isSet(object.table) ? globalThis.String(object.table) : "",
      column: isSet(object.column) ? globalThis.String(object.column) : "",
      maskingLevel: isSet(object.maskingLevel)
        ? maskingLevelFromJSON(object.maskingLevel)
        : MaskingLevel.MASKING_LEVEL_UNSPECIFIED,
      fullMaskingAlgorithmId: isSet(object.fullMaskingAlgorithmId)
        ? globalThis.String(object.fullMaskingAlgorithmId)
        : "",
      partialMaskingAlgorithmId: isSet(object.partialMaskingAlgorithmId)
        ? globalThis.String(object.partialMaskingAlgorithmId)
        : "",
    };
  },

  toJSON(message: MaskData): unknown {
    const obj: any = {};
    if (message.schema !== "") {
      obj.schema = message.schema;
    }
    if (message.table !== "") {
      obj.table = message.table;
    }
    if (message.column !== "") {
      obj.column = message.column;
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      obj.maskingLevel = maskingLevelToJSON(message.maskingLevel);
    }
    if (message.fullMaskingAlgorithmId !== "") {
      obj.fullMaskingAlgorithmId = message.fullMaskingAlgorithmId;
    }
    if (message.partialMaskingAlgorithmId !== "") {
      obj.partialMaskingAlgorithmId = message.partialMaskingAlgorithmId;
    }
    return obj;
  },

  create(base?: DeepPartial<MaskData>): MaskData {
    return MaskData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskData>): MaskData {
    const message = createBaseMaskData();
    message.schema = object.schema ?? "";
    message.table = object.table ?? "";
    message.column = object.column ?? "";
    message.maskingLevel = object.maskingLevel ?? MaskingLevel.MASKING_LEVEL_UNSPECIFIED;
    message.fullMaskingAlgorithmId = object.fullMaskingAlgorithmId ?? "";
    message.partialMaskingAlgorithmId = object.partialMaskingAlgorithmId ?? "";
    return message;
  },
};

function createBaseSQLReviewRule(): SQLReviewRule {
  return {
    type: "",
    level: SQLReviewRuleLevel.LEVEL_UNSPECIFIED,
    payload: "",
    engine: Engine.ENGINE_UNSPECIFIED,
    comment: "",
  };
}

export const SQLReviewRule = {
  encode(message: SQLReviewRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.level !== SQLReviewRuleLevel.LEVEL_UNSPECIFIED) {
      writer.uint32(16).int32(sQLReviewRuleLevelToNumber(message.level));
    }
    if (message.payload !== "") {
      writer.uint32(26).string(message.payload);
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      writer.uint32(32).int32(engineToNumber(message.engine));
    }
    if (message.comment !== "") {
      writer.uint32(42).string(message.comment);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SQLReviewRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSQLReviewRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.level = sQLReviewRuleLevelFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.payload = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.engine = engineFromJSON(reader.int32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.comment = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SQLReviewRule {
    return {
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      level: isSet(object.level) ? sQLReviewRuleLevelFromJSON(object.level) : SQLReviewRuleLevel.LEVEL_UNSPECIFIED,
      payload: isSet(object.payload) ? globalThis.String(object.payload) : "",
      engine: isSet(object.engine) ? engineFromJSON(object.engine) : Engine.ENGINE_UNSPECIFIED,
      comment: isSet(object.comment) ? globalThis.String(object.comment) : "",
    };
  },

  toJSON(message: SQLReviewRule): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.level !== SQLReviewRuleLevel.LEVEL_UNSPECIFIED) {
      obj.level = sQLReviewRuleLevelToJSON(message.level);
    }
    if (message.payload !== "") {
      obj.payload = message.payload;
    }
    if (message.engine !== Engine.ENGINE_UNSPECIFIED) {
      obj.engine = engineToJSON(message.engine);
    }
    if (message.comment !== "") {
      obj.comment = message.comment;
    }
    return obj;
  },

  create(base?: DeepPartial<SQLReviewRule>): SQLReviewRule {
    return SQLReviewRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SQLReviewRule>): SQLReviewRule {
    const message = createBaseSQLReviewRule();
    message.type = object.type ?? "";
    message.level = object.level ?? SQLReviewRuleLevel.LEVEL_UNSPECIFIED;
    message.payload = object.payload ?? "";
    message.engine = object.engine ?? Engine.ENGINE_UNSPECIFIED;
    message.comment = object.comment ?? "";
    return message;
  },
};

function createBaseMaskingExceptionPolicy(): MaskingExceptionPolicy {
  return { maskingExceptions: [] };
}

export const MaskingExceptionPolicy = {
  encode(message: MaskingExceptionPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.maskingExceptions) {
      MaskingExceptionPolicy_MaskingException.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskingExceptionPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskingExceptionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.maskingExceptions.push(MaskingExceptionPolicy_MaskingException.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskingExceptionPolicy {
    return {
      maskingExceptions: globalThis.Array.isArray(object?.maskingExceptions)
        ? object.maskingExceptions.map((e: any) => MaskingExceptionPolicy_MaskingException.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MaskingExceptionPolicy): unknown {
    const obj: any = {};
    if (message.maskingExceptions?.length) {
      obj.maskingExceptions = message.maskingExceptions.map((e) => MaskingExceptionPolicy_MaskingException.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MaskingExceptionPolicy>): MaskingExceptionPolicy {
    return MaskingExceptionPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskingExceptionPolicy>): MaskingExceptionPolicy {
    const message = createBaseMaskingExceptionPolicy();
    message.maskingExceptions =
      object.maskingExceptions?.map((e) => MaskingExceptionPolicy_MaskingException.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMaskingExceptionPolicy_MaskingException(): MaskingExceptionPolicy_MaskingException {
  return {
    action: MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED,
    maskingLevel: MaskingLevel.MASKING_LEVEL_UNSPECIFIED,
    member: "",
    condition: undefined,
  };
}

export const MaskingExceptionPolicy_MaskingException = {
  encode(message: MaskingExceptionPolicy_MaskingException, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED) {
      writer.uint32(8).int32(maskingExceptionPolicy_MaskingException_ActionToNumber(message.action));
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      writer.uint32(16).int32(maskingLevelToNumber(message.maskingLevel));
    }
    if (message.member !== "") {
      writer.uint32(26).string(message.member);
    }
    if (message.condition !== undefined) {
      Expr.encode(message.condition, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskingExceptionPolicy_MaskingException {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskingExceptionPolicy_MaskingException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.action = maskingExceptionPolicy_MaskingException_ActionFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maskingLevel = maskingLevelFromJSON(reader.int32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.member = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.condition = Expr.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskingExceptionPolicy_MaskingException {
    return {
      action: isSet(object.action)
        ? maskingExceptionPolicy_MaskingException_ActionFromJSON(object.action)
        : MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED,
      maskingLevel: isSet(object.maskingLevel)
        ? maskingLevelFromJSON(object.maskingLevel)
        : MaskingLevel.MASKING_LEVEL_UNSPECIFIED,
      member: isSet(object.member) ? globalThis.String(object.member) : "",
      condition: isSet(object.condition) ? Expr.fromJSON(object.condition) : undefined,
    };
  },

  toJSON(message: MaskingExceptionPolicy_MaskingException): unknown {
    const obj: any = {};
    if (message.action !== MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED) {
      obj.action = maskingExceptionPolicy_MaskingException_ActionToJSON(message.action);
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      obj.maskingLevel = maskingLevelToJSON(message.maskingLevel);
    }
    if (message.member !== "") {
      obj.member = message.member;
    }
    if (message.condition !== undefined) {
      obj.condition = Expr.toJSON(message.condition);
    }
    return obj;
  },

  create(base?: DeepPartial<MaskingExceptionPolicy_MaskingException>): MaskingExceptionPolicy_MaskingException {
    return MaskingExceptionPolicy_MaskingException.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskingExceptionPolicy_MaskingException>): MaskingExceptionPolicy_MaskingException {
    const message = createBaseMaskingExceptionPolicy_MaskingException();
    message.action = object.action ?? MaskingExceptionPolicy_MaskingException_Action.ACTION_UNSPECIFIED;
    message.maskingLevel = object.maskingLevel ?? MaskingLevel.MASKING_LEVEL_UNSPECIFIED;
    message.member = object.member ?? "";
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expr.fromPartial(object.condition)
      : undefined;
    return message;
  },
};

function createBaseMaskingRulePolicy(): MaskingRulePolicy {
  return { rules: [] };
}

export const MaskingRulePolicy = {
  encode(message: MaskingRulePolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      MaskingRulePolicy_MaskingRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskingRulePolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskingRulePolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rules.push(MaskingRulePolicy_MaskingRule.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskingRulePolicy {
    return {
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => MaskingRulePolicy_MaskingRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MaskingRulePolicy): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => MaskingRulePolicy_MaskingRule.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<MaskingRulePolicy>): MaskingRulePolicy {
    return MaskingRulePolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskingRulePolicy>): MaskingRulePolicy {
    const message = createBaseMaskingRulePolicy();
    message.rules = object.rules?.map((e) => MaskingRulePolicy_MaskingRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMaskingRulePolicy_MaskingRule(): MaskingRulePolicy_MaskingRule {
  return { id: "", condition: undefined, maskingLevel: MaskingLevel.MASKING_LEVEL_UNSPECIFIED };
}

export const MaskingRulePolicy_MaskingRule = {
  encode(message: MaskingRulePolicy_MaskingRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.condition !== undefined) {
      Expr.encode(message.condition, writer.uint32(18).fork()).ldelim();
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      writer.uint32(24).int32(maskingLevelToNumber(message.maskingLevel));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MaskingRulePolicy_MaskingRule {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaskingRulePolicy_MaskingRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.condition = Expr.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maskingLevel = maskingLevelFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MaskingRulePolicy_MaskingRule {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      condition: isSet(object.condition) ? Expr.fromJSON(object.condition) : undefined,
      maskingLevel: isSet(object.maskingLevel)
        ? maskingLevelFromJSON(object.maskingLevel)
        : MaskingLevel.MASKING_LEVEL_UNSPECIFIED,
    };
  },

  toJSON(message: MaskingRulePolicy_MaskingRule): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.condition !== undefined) {
      obj.condition = Expr.toJSON(message.condition);
    }
    if (message.maskingLevel !== MaskingLevel.MASKING_LEVEL_UNSPECIFIED) {
      obj.maskingLevel = maskingLevelToJSON(message.maskingLevel);
    }
    return obj;
  },

  create(base?: DeepPartial<MaskingRulePolicy_MaskingRule>): MaskingRulePolicy_MaskingRule {
    return MaskingRulePolicy_MaskingRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MaskingRulePolicy_MaskingRule>): MaskingRulePolicy_MaskingRule {
    const message = createBaseMaskingRulePolicy_MaskingRule();
    message.id = object.id ?? "";
    message.condition = (object.condition !== undefined && object.condition !== null)
      ? Expr.fromPartial(object.condition)
      : undefined;
    message.maskingLevel = object.maskingLevel ?? MaskingLevel.MASKING_LEVEL_UNSPECIFIED;
    return message;
  },
};

function createBaseRestrictIssueCreationForSQLReviewPolicy(): RestrictIssueCreationForSQLReviewPolicy {
  return { disallow: false };
}

export const RestrictIssueCreationForSQLReviewPolicy = {
  encode(message: RestrictIssueCreationForSQLReviewPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.disallow === true) {
      writer.uint32(8).bool(message.disallow);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestrictIssueCreationForSQLReviewPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestrictIssueCreationForSQLReviewPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.disallow = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestrictIssueCreationForSQLReviewPolicy {
    return { disallow: isSet(object.disallow) ? globalThis.Boolean(object.disallow) : false };
  },

  toJSON(message: RestrictIssueCreationForSQLReviewPolicy): unknown {
    const obj: any = {};
    if (message.disallow === true) {
      obj.disallow = message.disallow;
    }
    return obj;
  },

  create(base?: DeepPartial<RestrictIssueCreationForSQLReviewPolicy>): RestrictIssueCreationForSQLReviewPolicy {
    return RestrictIssueCreationForSQLReviewPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RestrictIssueCreationForSQLReviewPolicy>): RestrictIssueCreationForSQLReviewPolicy {
    const message = createBaseRestrictIssueCreationForSQLReviewPolicy();
    message.disallow = object.disallow ?? false;
    return message;
  },
};

function createBaseTagPolicy(): TagPolicy {
  return { tags: {} };
}

export const TagPolicy = {
  encode(message: TagPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.tags).forEach(([key, value]) => {
      TagPolicy_TagsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = TagPolicy_TagsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.tags[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TagPolicy {
    return {
      tags: isObject(object.tags)
        ? Object.entries(object.tags).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: TagPolicy): unknown {
    const obj: any = {};
    if (message.tags) {
      const entries = Object.entries(message.tags);
      if (entries.length > 0) {
        obj.tags = {};
        entries.forEach(([k, v]) => {
          obj.tags[k] = v;
        });
      }
    }
    return obj;
  },

  create(base?: DeepPartial<TagPolicy>): TagPolicy {
    return TagPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TagPolicy>): TagPolicy {
    const message = createBaseTagPolicy();
    message.tags = Object.entries(object.tags ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = globalThis.String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseTagPolicy_TagsEntry(): TagPolicy_TagsEntry {
  return { key: "", value: "" };
}

export const TagPolicy_TagsEntry = {
  encode(message: TagPolicy_TagsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TagPolicy_TagsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTagPolicy_TagsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TagPolicy_TagsEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: TagPolicy_TagsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<TagPolicy_TagsEntry>): TagPolicy_TagsEntry {
    return TagPolicy_TagsEntry.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TagPolicy_TagsEntry>): TagPolicy_TagsEntry {
    const message = createBaseTagPolicy_TagsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseDataSourceQueryPolicy(): DataSourceQueryPolicy {
  return { adminDataSourceRestriction: DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED };
}

export const DataSourceQueryPolicy = {
  encode(message: DataSourceQueryPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.adminDataSourceRestriction !== DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED) {
      writer.uint32(8).int32(dataSourceQueryPolicy_RestrictonToNumber(message.adminDataSourceRestriction));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceQueryPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceQueryPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.adminDataSourceRestriction = dataSourceQueryPolicy_RestrictonFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceQueryPolicy {
    return {
      adminDataSourceRestriction: isSet(object.adminDataSourceRestriction)
        ? dataSourceQueryPolicy_RestrictonFromJSON(object.adminDataSourceRestriction)
        : DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED,
    };
  },

  toJSON(message: DataSourceQueryPolicy): unknown {
    const obj: any = {};
    if (message.adminDataSourceRestriction !== DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED) {
      obj.adminDataSourceRestriction = dataSourceQueryPolicy_RestrictonToJSON(message.adminDataSourceRestriction);
    }
    return obj;
  },

  create(base?: DeepPartial<DataSourceQueryPolicy>): DataSourceQueryPolicy {
    return DataSourceQueryPolicy.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DataSourceQueryPolicy>): DataSourceQueryPolicy {
    const message = createBaseDataSourceQueryPolicy();
    message.adminDataSourceRestriction = object.adminDataSourceRestriction ??
      DataSourceQueryPolicy_Restricton.RESTRICTION_UNSPECIFIED;
    return message;
  },
};

export type OrgPolicyServiceDefinition = typeof OrgPolicyServiceDefinition;
export const OrgPolicyServiceDefinition = {
  name: "OrgPolicyService",
  fullName: "bytebase.v1.OrgPolicyService",
  methods: {
    getPolicy: {
      name: "GetPolicy",
      requestType: GetPolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          800010: [new Uint8Array([15, 98, 98, 46, 112, 111, 108, 105, 99, 105, 101, 115, 46, 103, 101, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              185,
              1,
              90,
              34,
              18,
              32,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              38,
              18,
              36,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              35,
              18,
              33,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              47,
              18,
              45,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              18,
              21,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    listPolicies: {
      name: "ListPolicies",
      requestType: ListPoliciesRequest,
      requestStream: false,
      responseType: ListPoliciesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([0])],
          800010: [new Uint8Array([16, 98, 98, 46, 112, 111, 108, 105, 99, 105, 101, 115, 46, 108, 105, 115, 116])],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              176,
              1,
              90,
              34,
              18,
              32,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              38,
              18,
              36,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              35,
              18,
              33,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              47,
              18,
              45,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              18,
              12,
              47,
              118,
              49,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
    createPolicy: {
      name: "CreatePolicy",
      requestType: CreatePolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([13, 112, 97, 114, 101, 110, 116, 44, 112, 111, 108, 105, 99, 121])],
          800010: [
            new Uint8Array([18, 98, 98, 46, 112, 111, 108, 105, 99, 105, 101, 115, 46, 99, 114, 101, 97, 116, 101]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              216,
              1,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              90,
              42,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              34,
              32,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              46,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              34,
              36,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              43,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              34,
              33,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              90,
              55,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              34,
              45,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              42,
              125,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              34,
              12,
              47,
              118,
              49,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
    updatePolicy: {
      name: "UpdatePolicy",
      requestType: UpdatePolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            new Uint8Array([18, 112, 111, 108, 105, 99, 121, 44, 117, 112, 100, 97, 116, 101, 95, 109, 97, 115, 107]),
          ],
          800010: [
            new Uint8Array([18, 98, 98, 46, 112, 111, 108, 105, 99, 105, 101, 115, 46, 117, 112, 100, 97, 116, 101]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              132,
              2,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              90,
              49,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              50,
              39,
              47,
              118,
              49,
              47,
              123,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              53,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              50,
              43,
              47,
              118,
              49,
              47,
              123,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
              110,
              97,
              109,
              101,
              61,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              50,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              50,
              40,
              47,
              118,
              49,
              47,
              123,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              62,
              58,
              6,
              112,
              111,
              108,
              105,
              99,
              121,
              50,
              52,
              47,
              118,
              49,
              47,
              123,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              50,
              28,
              47,
              118,
              49,
              47,
              123,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
              110,
              97,
              109,
              101,
              61,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    deletePolicy: {
      name: "DeletePolicy",
      requestType: DeletePolicyRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [new Uint8Array([4, 110, 97, 109, 101])],
          800010: [
            new Uint8Array([18, 98, 98, 46, 112, 111, 108, 105, 99, 105, 101, 115, 46, 100, 101, 108, 101, 116, 101]),
          ],
          800016: [new Uint8Array([1])],
          578365826: [
            new Uint8Array([
              185,
              1,
              90,
              34,
              42,
              32,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              38,
              42,
              36,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              35,
              42,
              33,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              90,
              47,
              42,
              45,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              115,
              47,
              42,
              47,
              100,
              97,
              116,
              97,
              98,
              97,
              115,
              101,
              115,
              47,
              42,
              47,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
              42,
              21,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
