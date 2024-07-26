/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PriorBackupDetail } from "./task_run";

export const protobufPackage = "bytebase.store";

export interface TaskRunLog {
  type: TaskRunLog_Type;
  deployId: string;
  schemaDumpStart: TaskRunLog_SchemaDumpStart | undefined;
  schemaDumpEnd: TaskRunLog_SchemaDumpEnd | undefined;
  commandExecute: TaskRunLog_CommandExecute | undefined;
  commandResponse: TaskRunLog_CommandResponse | undefined;
  databaseSyncStart: TaskRunLog_DatabaseSyncStart | undefined;
  databaseSyncEnd: TaskRunLog_DatabaseSyncEnd | undefined;
  taskRunStatusUpdate: TaskRunLog_TaskRunStatusUpdate | undefined;
  transactionControl: TaskRunLog_TransactionControl | undefined;
  priorBackupStart: TaskRunLog_PriorBackupStart | undefined;
  priorBackupEnd: TaskRunLog_PriorBackupEnd | undefined;
}

export enum TaskRunLog_Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  SCHEMA_DUMP_START = "SCHEMA_DUMP_START",
  SCHEMA_DUMP_END = "SCHEMA_DUMP_END",
  COMMAND_EXECUTE = "COMMAND_EXECUTE",
  COMMAND_RESPONSE = "COMMAND_RESPONSE",
  DATABASE_SYNC_START = "DATABASE_SYNC_START",
  DATABASE_SYNC_END = "DATABASE_SYNC_END",
  TASK_RUN_STATUS_UPDATE = "TASK_RUN_STATUS_UPDATE",
  TRANSACTION_CONTROL = "TRANSACTION_CONTROL",
  PRIOR_BACKUP_START = "PRIOR_BACKUP_START",
  PRIOR_BACKUP_END = "PRIOR_BACKUP_END",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function taskRunLog_TypeFromJSON(object: any): TaskRunLog_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return TaskRunLog_Type.TYPE_UNSPECIFIED;
    case 1:
    case "SCHEMA_DUMP_START":
      return TaskRunLog_Type.SCHEMA_DUMP_START;
    case 2:
    case "SCHEMA_DUMP_END":
      return TaskRunLog_Type.SCHEMA_DUMP_END;
    case 3:
    case "COMMAND_EXECUTE":
      return TaskRunLog_Type.COMMAND_EXECUTE;
    case 4:
    case "COMMAND_RESPONSE":
      return TaskRunLog_Type.COMMAND_RESPONSE;
    case 5:
    case "DATABASE_SYNC_START":
      return TaskRunLog_Type.DATABASE_SYNC_START;
    case 6:
    case "DATABASE_SYNC_END":
      return TaskRunLog_Type.DATABASE_SYNC_END;
    case 7:
    case "TASK_RUN_STATUS_UPDATE":
      return TaskRunLog_Type.TASK_RUN_STATUS_UPDATE;
    case 8:
    case "TRANSACTION_CONTROL":
      return TaskRunLog_Type.TRANSACTION_CONTROL;
    case 9:
    case "PRIOR_BACKUP_START":
      return TaskRunLog_Type.PRIOR_BACKUP_START;
    case 10:
    case "PRIOR_BACKUP_END":
      return TaskRunLog_Type.PRIOR_BACKUP_END;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskRunLog_Type.UNRECOGNIZED;
  }
}

export function taskRunLog_TypeToJSON(object: TaskRunLog_Type): string {
  switch (object) {
    case TaskRunLog_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case TaskRunLog_Type.SCHEMA_DUMP_START:
      return "SCHEMA_DUMP_START";
    case TaskRunLog_Type.SCHEMA_DUMP_END:
      return "SCHEMA_DUMP_END";
    case TaskRunLog_Type.COMMAND_EXECUTE:
      return "COMMAND_EXECUTE";
    case TaskRunLog_Type.COMMAND_RESPONSE:
      return "COMMAND_RESPONSE";
    case TaskRunLog_Type.DATABASE_SYNC_START:
      return "DATABASE_SYNC_START";
    case TaskRunLog_Type.DATABASE_SYNC_END:
      return "DATABASE_SYNC_END";
    case TaskRunLog_Type.TASK_RUN_STATUS_UPDATE:
      return "TASK_RUN_STATUS_UPDATE";
    case TaskRunLog_Type.TRANSACTION_CONTROL:
      return "TRANSACTION_CONTROL";
    case TaskRunLog_Type.PRIOR_BACKUP_START:
      return "PRIOR_BACKUP_START";
    case TaskRunLog_Type.PRIOR_BACKUP_END:
      return "PRIOR_BACKUP_END";
    case TaskRunLog_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function taskRunLog_TypeToNumber(object: TaskRunLog_Type): number {
  switch (object) {
    case TaskRunLog_Type.TYPE_UNSPECIFIED:
      return 0;
    case TaskRunLog_Type.SCHEMA_DUMP_START:
      return 1;
    case TaskRunLog_Type.SCHEMA_DUMP_END:
      return 2;
    case TaskRunLog_Type.COMMAND_EXECUTE:
      return 3;
    case TaskRunLog_Type.COMMAND_RESPONSE:
      return 4;
    case TaskRunLog_Type.DATABASE_SYNC_START:
      return 5;
    case TaskRunLog_Type.DATABASE_SYNC_END:
      return 6;
    case TaskRunLog_Type.TASK_RUN_STATUS_UPDATE:
      return 7;
    case TaskRunLog_Type.TRANSACTION_CONTROL:
      return 8;
    case TaskRunLog_Type.PRIOR_BACKUP_START:
      return 9;
    case TaskRunLog_Type.PRIOR_BACKUP_END:
      return 10;
    case TaskRunLog_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface TaskRunLog_SchemaDumpStart {
}

export interface TaskRunLog_SchemaDumpEnd {
  error: string;
}

export interface TaskRunLog_CommandExecute {
  /** The indexes of the executed commands. */
  commandIndexes: number[];
}

export interface TaskRunLog_CommandResponse {
  /** The indexes of the executed commands. */
  commandIndexes: number[];
  error: string;
  affectedRows: number;
  /**
   * `all_affected_rows` is the affected rows of each command.
   * `all_affected_rows` may be unavailable if the database driver doesn't support it. Caller should fallback to `affected_rows` in that case.
   */
  allAffectedRows: number[];
}

export interface TaskRunLog_DatabaseSyncStart {
}

export interface TaskRunLog_DatabaseSyncEnd {
  error: string;
}

export interface TaskRunLog_TaskRunStatusUpdate {
  status: TaskRunLog_TaskRunStatusUpdate_Status;
}

export enum TaskRunLog_TaskRunStatusUpdate_Status {
  STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED",
  /** RUNNING_WAITING - the task run is ready to be executed by the scheduler */
  RUNNING_WAITING = "RUNNING_WAITING",
  /** RUNNING_RUNNING - the task run is being executed by the scheduler */
  RUNNING_RUNNING = "RUNNING_RUNNING",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function taskRunLog_TaskRunStatusUpdate_StatusFromJSON(object: any): TaskRunLog_TaskRunStatusUpdate_Status {
  switch (object) {
    case 0:
    case "STATUS_UNSPECIFIED":
      return TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED;
    case 1:
    case "RUNNING_WAITING":
      return TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_WAITING;
    case 2:
    case "RUNNING_RUNNING":
      return TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_RUNNING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskRunLog_TaskRunStatusUpdate_Status.UNRECOGNIZED;
  }
}

export function taskRunLog_TaskRunStatusUpdate_StatusToJSON(object: TaskRunLog_TaskRunStatusUpdate_Status): string {
  switch (object) {
    case TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED:
      return "STATUS_UNSPECIFIED";
    case TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_WAITING:
      return "RUNNING_WAITING";
    case TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_RUNNING:
      return "RUNNING_RUNNING";
    case TaskRunLog_TaskRunStatusUpdate_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function taskRunLog_TaskRunStatusUpdate_StatusToNumber(object: TaskRunLog_TaskRunStatusUpdate_Status): number {
  switch (object) {
    case TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED:
      return 0;
    case TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_WAITING:
      return 1;
    case TaskRunLog_TaskRunStatusUpdate_Status.RUNNING_RUNNING:
      return 2;
    case TaskRunLog_TaskRunStatusUpdate_Status.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface TaskRunLog_TransactionControl {
  type: TaskRunLog_TransactionControl_Type;
  error: string;
}

export enum TaskRunLog_TransactionControl_Type {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  BEGIN = "BEGIN",
  COMMIT = "COMMIT",
  ROLLBACK = "ROLLBACK",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function taskRunLog_TransactionControl_TypeFromJSON(object: any): TaskRunLog_TransactionControl_Type {
  switch (object) {
    case 0:
    case "TYPE_UNSPECIFIED":
      return TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED;
    case 1:
    case "BEGIN":
      return TaskRunLog_TransactionControl_Type.BEGIN;
    case 2:
    case "COMMIT":
      return TaskRunLog_TransactionControl_Type.COMMIT;
    case 3:
    case "ROLLBACK":
      return TaskRunLog_TransactionControl_Type.ROLLBACK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskRunLog_TransactionControl_Type.UNRECOGNIZED;
  }
}

export function taskRunLog_TransactionControl_TypeToJSON(object: TaskRunLog_TransactionControl_Type): string {
  switch (object) {
    case TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED:
      return "TYPE_UNSPECIFIED";
    case TaskRunLog_TransactionControl_Type.BEGIN:
      return "BEGIN";
    case TaskRunLog_TransactionControl_Type.COMMIT:
      return "COMMIT";
    case TaskRunLog_TransactionControl_Type.ROLLBACK:
      return "ROLLBACK";
    case TaskRunLog_TransactionControl_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export function taskRunLog_TransactionControl_TypeToNumber(object: TaskRunLog_TransactionControl_Type): number {
  switch (object) {
    case TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED:
      return 0;
    case TaskRunLog_TransactionControl_Type.BEGIN:
      return 1;
    case TaskRunLog_TransactionControl_Type.COMMIT:
      return 2;
    case TaskRunLog_TransactionControl_Type.ROLLBACK:
      return 3;
    case TaskRunLog_TransactionControl_Type.UNRECOGNIZED:
    default:
      return -1;
  }
}

export interface TaskRunLog_PriorBackupStart {
}

export interface TaskRunLog_PriorBackupEnd {
  priorBackupDetail: PriorBackupDetail | undefined;
  error: string;
}

function createBaseTaskRunLog(): TaskRunLog {
  return {
    type: TaskRunLog_Type.TYPE_UNSPECIFIED,
    deployId: "",
    schemaDumpStart: undefined,
    schemaDumpEnd: undefined,
    commandExecute: undefined,
    commandResponse: undefined,
    databaseSyncStart: undefined,
    databaseSyncEnd: undefined,
    taskRunStatusUpdate: undefined,
    transactionControl: undefined,
    priorBackupStart: undefined,
    priorBackupEnd: undefined,
  };
}

export const TaskRunLog = {
  encode(message: TaskRunLog, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== TaskRunLog_Type.TYPE_UNSPECIFIED) {
      writer.uint32(8).int32(taskRunLog_TypeToNumber(message.type));
    }
    if (message.deployId !== "") {
      writer.uint32(98).string(message.deployId);
    }
    if (message.schemaDumpStart !== undefined) {
      TaskRunLog_SchemaDumpStart.encode(message.schemaDumpStart, writer.uint32(18).fork()).ldelim();
    }
    if (message.schemaDumpEnd !== undefined) {
      TaskRunLog_SchemaDumpEnd.encode(message.schemaDumpEnd, writer.uint32(26).fork()).ldelim();
    }
    if (message.commandExecute !== undefined) {
      TaskRunLog_CommandExecute.encode(message.commandExecute, writer.uint32(34).fork()).ldelim();
    }
    if (message.commandResponse !== undefined) {
      TaskRunLog_CommandResponse.encode(message.commandResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.databaseSyncStart !== undefined) {
      TaskRunLog_DatabaseSyncStart.encode(message.databaseSyncStart, writer.uint32(50).fork()).ldelim();
    }
    if (message.databaseSyncEnd !== undefined) {
      TaskRunLog_DatabaseSyncEnd.encode(message.databaseSyncEnd, writer.uint32(58).fork()).ldelim();
    }
    if (message.taskRunStatusUpdate !== undefined) {
      TaskRunLog_TaskRunStatusUpdate.encode(message.taskRunStatusUpdate, writer.uint32(66).fork()).ldelim();
    }
    if (message.transactionControl !== undefined) {
      TaskRunLog_TransactionControl.encode(message.transactionControl, writer.uint32(74).fork()).ldelim();
    }
    if (message.priorBackupStart !== undefined) {
      TaskRunLog_PriorBackupStart.encode(message.priorBackupStart, writer.uint32(82).fork()).ldelim();
    }
    if (message.priorBackupEnd !== undefined) {
      TaskRunLog_PriorBackupEnd.encode(message.priorBackupEnd, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = taskRunLog_TypeFromJSON(reader.int32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.deployId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schemaDumpStart = TaskRunLog_SchemaDumpStart.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.schemaDumpEnd = TaskRunLog_SchemaDumpEnd.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.commandExecute = TaskRunLog_CommandExecute.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.commandResponse = TaskRunLog_CommandResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.databaseSyncStart = TaskRunLog_DatabaseSyncStart.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.databaseSyncEnd = TaskRunLog_DatabaseSyncEnd.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.taskRunStatusUpdate = TaskRunLog_TaskRunStatusUpdate.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.transactionControl = TaskRunLog_TransactionControl.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.priorBackupStart = TaskRunLog_PriorBackupStart.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.priorBackupEnd = TaskRunLog_PriorBackupEnd.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog {
    return {
      type: isSet(object.type) ? taskRunLog_TypeFromJSON(object.type) : TaskRunLog_Type.TYPE_UNSPECIFIED,
      deployId: isSet(object.deployId) ? globalThis.String(object.deployId) : "",
      schemaDumpStart: isSet(object.schemaDumpStart)
        ? TaskRunLog_SchemaDumpStart.fromJSON(object.schemaDumpStart)
        : undefined,
      schemaDumpEnd: isSet(object.schemaDumpEnd) ? TaskRunLog_SchemaDumpEnd.fromJSON(object.schemaDumpEnd) : undefined,
      commandExecute: isSet(object.commandExecute)
        ? TaskRunLog_CommandExecute.fromJSON(object.commandExecute)
        : undefined,
      commandResponse: isSet(object.commandResponse)
        ? TaskRunLog_CommandResponse.fromJSON(object.commandResponse)
        : undefined,
      databaseSyncStart: isSet(object.databaseSyncStart)
        ? TaskRunLog_DatabaseSyncStart.fromJSON(object.databaseSyncStart)
        : undefined,
      databaseSyncEnd: isSet(object.databaseSyncEnd)
        ? TaskRunLog_DatabaseSyncEnd.fromJSON(object.databaseSyncEnd)
        : undefined,
      taskRunStatusUpdate: isSet(object.taskRunStatusUpdate)
        ? TaskRunLog_TaskRunStatusUpdate.fromJSON(object.taskRunStatusUpdate)
        : undefined,
      transactionControl: isSet(object.transactionControl)
        ? TaskRunLog_TransactionControl.fromJSON(object.transactionControl)
        : undefined,
      priorBackupStart: isSet(object.priorBackupStart)
        ? TaskRunLog_PriorBackupStart.fromJSON(object.priorBackupStart)
        : undefined,
      priorBackupEnd: isSet(object.priorBackupEnd)
        ? TaskRunLog_PriorBackupEnd.fromJSON(object.priorBackupEnd)
        : undefined,
    };
  },

  toJSON(message: TaskRunLog): unknown {
    const obj: any = {};
    if (message.type !== TaskRunLog_Type.TYPE_UNSPECIFIED) {
      obj.type = taskRunLog_TypeToJSON(message.type);
    }
    if (message.deployId !== "") {
      obj.deployId = message.deployId;
    }
    if (message.schemaDumpStart !== undefined) {
      obj.schemaDumpStart = TaskRunLog_SchemaDumpStart.toJSON(message.schemaDumpStart);
    }
    if (message.schemaDumpEnd !== undefined) {
      obj.schemaDumpEnd = TaskRunLog_SchemaDumpEnd.toJSON(message.schemaDumpEnd);
    }
    if (message.commandExecute !== undefined) {
      obj.commandExecute = TaskRunLog_CommandExecute.toJSON(message.commandExecute);
    }
    if (message.commandResponse !== undefined) {
      obj.commandResponse = TaskRunLog_CommandResponse.toJSON(message.commandResponse);
    }
    if (message.databaseSyncStart !== undefined) {
      obj.databaseSyncStart = TaskRunLog_DatabaseSyncStart.toJSON(message.databaseSyncStart);
    }
    if (message.databaseSyncEnd !== undefined) {
      obj.databaseSyncEnd = TaskRunLog_DatabaseSyncEnd.toJSON(message.databaseSyncEnd);
    }
    if (message.taskRunStatusUpdate !== undefined) {
      obj.taskRunStatusUpdate = TaskRunLog_TaskRunStatusUpdate.toJSON(message.taskRunStatusUpdate);
    }
    if (message.transactionControl !== undefined) {
      obj.transactionControl = TaskRunLog_TransactionControl.toJSON(message.transactionControl);
    }
    if (message.priorBackupStart !== undefined) {
      obj.priorBackupStart = TaskRunLog_PriorBackupStart.toJSON(message.priorBackupStart);
    }
    if (message.priorBackupEnd !== undefined) {
      obj.priorBackupEnd = TaskRunLog_PriorBackupEnd.toJSON(message.priorBackupEnd);
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog>): TaskRunLog {
    return TaskRunLog.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog>): TaskRunLog {
    const message = createBaseTaskRunLog();
    message.type = object.type ?? TaskRunLog_Type.TYPE_UNSPECIFIED;
    message.deployId = object.deployId ?? "";
    message.schemaDumpStart = (object.schemaDumpStart !== undefined && object.schemaDumpStart !== null)
      ? TaskRunLog_SchemaDumpStart.fromPartial(object.schemaDumpStart)
      : undefined;
    message.schemaDumpEnd = (object.schemaDumpEnd !== undefined && object.schemaDumpEnd !== null)
      ? TaskRunLog_SchemaDumpEnd.fromPartial(object.schemaDumpEnd)
      : undefined;
    message.commandExecute = (object.commandExecute !== undefined && object.commandExecute !== null)
      ? TaskRunLog_CommandExecute.fromPartial(object.commandExecute)
      : undefined;
    message.commandResponse = (object.commandResponse !== undefined && object.commandResponse !== null)
      ? TaskRunLog_CommandResponse.fromPartial(object.commandResponse)
      : undefined;
    message.databaseSyncStart = (object.databaseSyncStart !== undefined && object.databaseSyncStart !== null)
      ? TaskRunLog_DatabaseSyncStart.fromPartial(object.databaseSyncStart)
      : undefined;
    message.databaseSyncEnd = (object.databaseSyncEnd !== undefined && object.databaseSyncEnd !== null)
      ? TaskRunLog_DatabaseSyncEnd.fromPartial(object.databaseSyncEnd)
      : undefined;
    message.taskRunStatusUpdate = (object.taskRunStatusUpdate !== undefined && object.taskRunStatusUpdate !== null)
      ? TaskRunLog_TaskRunStatusUpdate.fromPartial(object.taskRunStatusUpdate)
      : undefined;
    message.transactionControl = (object.transactionControl !== undefined && object.transactionControl !== null)
      ? TaskRunLog_TransactionControl.fromPartial(object.transactionControl)
      : undefined;
    message.priorBackupStart = (object.priorBackupStart !== undefined && object.priorBackupStart !== null)
      ? TaskRunLog_PriorBackupStart.fromPartial(object.priorBackupStart)
      : undefined;
    message.priorBackupEnd = (object.priorBackupEnd !== undefined && object.priorBackupEnd !== null)
      ? TaskRunLog_PriorBackupEnd.fromPartial(object.priorBackupEnd)
      : undefined;
    return message;
  },
};

function createBaseTaskRunLog_SchemaDumpStart(): TaskRunLog_SchemaDumpStart {
  return {};
}

export const TaskRunLog_SchemaDumpStart = {
  encode(_: TaskRunLog_SchemaDumpStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_SchemaDumpStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_SchemaDumpStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TaskRunLog_SchemaDumpStart {
    return {};
  },

  toJSON(_: TaskRunLog_SchemaDumpStart): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_SchemaDumpStart>): TaskRunLog_SchemaDumpStart {
    return TaskRunLog_SchemaDumpStart.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TaskRunLog_SchemaDumpStart>): TaskRunLog_SchemaDumpStart {
    const message = createBaseTaskRunLog_SchemaDumpStart();
    return message;
  },
};

function createBaseTaskRunLog_SchemaDumpEnd(): TaskRunLog_SchemaDumpEnd {
  return { error: "" };
}

export const TaskRunLog_SchemaDumpEnd = {
  encode(message: TaskRunLog_SchemaDumpEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_SchemaDumpEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_SchemaDumpEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_SchemaDumpEnd {
    return { error: isSet(object.error) ? globalThis.String(object.error) : "" };
  },

  toJSON(message: TaskRunLog_SchemaDumpEnd): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_SchemaDumpEnd>): TaskRunLog_SchemaDumpEnd {
    return TaskRunLog_SchemaDumpEnd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_SchemaDumpEnd>): TaskRunLog_SchemaDumpEnd {
    const message = createBaseTaskRunLog_SchemaDumpEnd();
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseTaskRunLog_CommandExecute(): TaskRunLog_CommandExecute {
  return { commandIndexes: [] };
}

export const TaskRunLog_CommandExecute = {
  encode(message: TaskRunLog_CommandExecute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.commandIndexes) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_CommandExecute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_CommandExecute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.commandIndexes.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.commandIndexes.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_CommandExecute {
    return {
      commandIndexes: globalThis.Array.isArray(object?.commandIndexes)
        ? object.commandIndexes.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: TaskRunLog_CommandExecute): unknown {
    const obj: any = {};
    if (message.commandIndexes?.length) {
      obj.commandIndexes = message.commandIndexes.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_CommandExecute>): TaskRunLog_CommandExecute {
    return TaskRunLog_CommandExecute.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_CommandExecute>): TaskRunLog_CommandExecute {
    const message = createBaseTaskRunLog_CommandExecute();
    message.commandIndexes = object.commandIndexes?.map((e) => e) || [];
    return message;
  },
};

function createBaseTaskRunLog_CommandResponse(): TaskRunLog_CommandResponse {
  return { commandIndexes: [], error: "", affectedRows: 0, allAffectedRows: [] };
}

export const TaskRunLog_CommandResponse = {
  encode(message: TaskRunLog_CommandResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.commandIndexes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    if (message.affectedRows !== 0) {
      writer.uint32(24).int32(message.affectedRows);
    }
    writer.uint32(34).fork();
    for (const v of message.allAffectedRows) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_CommandResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_CommandResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.commandIndexes.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.commandIndexes.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.affectedRows = reader.int32();
          continue;
        case 4:
          if (tag === 32) {
            message.allAffectedRows.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allAffectedRows.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_CommandResponse {
    return {
      commandIndexes: globalThis.Array.isArray(object?.commandIndexes)
        ? object.commandIndexes.map((e: any) => globalThis.Number(e))
        : [],
      error: isSet(object.error) ? globalThis.String(object.error) : "",
      affectedRows: isSet(object.affectedRows) ? globalThis.Number(object.affectedRows) : 0,
      allAffectedRows: globalThis.Array.isArray(object?.allAffectedRows)
        ? object.allAffectedRows.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: TaskRunLog_CommandResponse): unknown {
    const obj: any = {};
    if (message.commandIndexes?.length) {
      obj.commandIndexes = message.commandIndexes.map((e) => Math.round(e));
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    if (message.affectedRows !== 0) {
      obj.affectedRows = Math.round(message.affectedRows);
    }
    if (message.allAffectedRows?.length) {
      obj.allAffectedRows = message.allAffectedRows.map((e) => Math.round(e));
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_CommandResponse>): TaskRunLog_CommandResponse {
    return TaskRunLog_CommandResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_CommandResponse>): TaskRunLog_CommandResponse {
    const message = createBaseTaskRunLog_CommandResponse();
    message.commandIndexes = object.commandIndexes?.map((e) => e) || [];
    message.error = object.error ?? "";
    message.affectedRows = object.affectedRows ?? 0;
    message.allAffectedRows = object.allAffectedRows?.map((e) => e) || [];
    return message;
  },
};

function createBaseTaskRunLog_DatabaseSyncStart(): TaskRunLog_DatabaseSyncStart {
  return {};
}

export const TaskRunLog_DatabaseSyncStart = {
  encode(_: TaskRunLog_DatabaseSyncStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_DatabaseSyncStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_DatabaseSyncStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TaskRunLog_DatabaseSyncStart {
    return {};
  },

  toJSON(_: TaskRunLog_DatabaseSyncStart): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_DatabaseSyncStart>): TaskRunLog_DatabaseSyncStart {
    return TaskRunLog_DatabaseSyncStart.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TaskRunLog_DatabaseSyncStart>): TaskRunLog_DatabaseSyncStart {
    const message = createBaseTaskRunLog_DatabaseSyncStart();
    return message;
  },
};

function createBaseTaskRunLog_DatabaseSyncEnd(): TaskRunLog_DatabaseSyncEnd {
  return { error: "" };
}

export const TaskRunLog_DatabaseSyncEnd = {
  encode(message: TaskRunLog_DatabaseSyncEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.error !== "") {
      writer.uint32(10).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_DatabaseSyncEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_DatabaseSyncEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_DatabaseSyncEnd {
    return { error: isSet(object.error) ? globalThis.String(object.error) : "" };
  },

  toJSON(message: TaskRunLog_DatabaseSyncEnd): unknown {
    const obj: any = {};
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_DatabaseSyncEnd>): TaskRunLog_DatabaseSyncEnd {
    return TaskRunLog_DatabaseSyncEnd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_DatabaseSyncEnd>): TaskRunLog_DatabaseSyncEnd {
    const message = createBaseTaskRunLog_DatabaseSyncEnd();
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseTaskRunLog_TaskRunStatusUpdate(): TaskRunLog_TaskRunStatusUpdate {
  return { status: TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED };
}

export const TaskRunLog_TaskRunStatusUpdate = {
  encode(message: TaskRunLog_TaskRunStatusUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED) {
      writer.uint32(8).int32(taskRunLog_TaskRunStatusUpdate_StatusToNumber(message.status));
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_TaskRunStatusUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_TaskRunStatusUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = taskRunLog_TaskRunStatusUpdate_StatusFromJSON(reader.int32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_TaskRunStatusUpdate {
    return {
      status: isSet(object.status)
        ? taskRunLog_TaskRunStatusUpdate_StatusFromJSON(object.status)
        : TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED,
    };
  },

  toJSON(message: TaskRunLog_TaskRunStatusUpdate): unknown {
    const obj: any = {};
    if (message.status !== TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED) {
      obj.status = taskRunLog_TaskRunStatusUpdate_StatusToJSON(message.status);
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_TaskRunStatusUpdate>): TaskRunLog_TaskRunStatusUpdate {
    return TaskRunLog_TaskRunStatusUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_TaskRunStatusUpdate>): TaskRunLog_TaskRunStatusUpdate {
    const message = createBaseTaskRunLog_TaskRunStatusUpdate();
    message.status = object.status ?? TaskRunLog_TaskRunStatusUpdate_Status.STATUS_UNSPECIFIED;
    return message;
  },
};

function createBaseTaskRunLog_TransactionControl(): TaskRunLog_TransactionControl {
  return { type: TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED, error: "" };
}

export const TaskRunLog_TransactionControl = {
  encode(message: TaskRunLog_TransactionControl, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED) {
      writer.uint32(8).int32(taskRunLog_TransactionControl_TypeToNumber(message.type));
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_TransactionControl {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_TransactionControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = taskRunLog_TransactionControl_TypeFromJSON(reader.int32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_TransactionControl {
    return {
      type: isSet(object.type)
        ? taskRunLog_TransactionControl_TypeFromJSON(object.type)
        : TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: TaskRunLog_TransactionControl): unknown {
    const obj: any = {};
    if (message.type !== TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED) {
      obj.type = taskRunLog_TransactionControl_TypeToJSON(message.type);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_TransactionControl>): TaskRunLog_TransactionControl {
    return TaskRunLog_TransactionControl.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_TransactionControl>): TaskRunLog_TransactionControl {
    const message = createBaseTaskRunLog_TransactionControl();
    message.type = object.type ?? TaskRunLog_TransactionControl_Type.TYPE_UNSPECIFIED;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseTaskRunLog_PriorBackupStart(): TaskRunLog_PriorBackupStart {
  return {};
}

export const TaskRunLog_PriorBackupStart = {
  encode(_: TaskRunLog_PriorBackupStart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_PriorBackupStart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_PriorBackupStart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TaskRunLog_PriorBackupStart {
    return {};
  },

  toJSON(_: TaskRunLog_PriorBackupStart): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_PriorBackupStart>): TaskRunLog_PriorBackupStart {
    return TaskRunLog_PriorBackupStart.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TaskRunLog_PriorBackupStart>): TaskRunLog_PriorBackupStart {
    const message = createBaseTaskRunLog_PriorBackupStart();
    return message;
  },
};

function createBaseTaskRunLog_PriorBackupEnd(): TaskRunLog_PriorBackupEnd {
  return { priorBackupDetail: undefined, error: "" };
}

export const TaskRunLog_PriorBackupEnd = {
  encode(message: TaskRunLog_PriorBackupEnd, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priorBackupDetail !== undefined) {
      PriorBackupDetail.encode(message.priorBackupDetail, writer.uint32(10).fork()).ldelim();
    }
    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TaskRunLog_PriorBackupEnd {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTaskRunLog_PriorBackupEnd();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.priorBackupDetail = PriorBackupDetail.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.error = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TaskRunLog_PriorBackupEnd {
    return {
      priorBackupDetail: isSet(object.priorBackupDetail)
        ? PriorBackupDetail.fromJSON(object.priorBackupDetail)
        : undefined,
      error: isSet(object.error) ? globalThis.String(object.error) : "",
    };
  },

  toJSON(message: TaskRunLog_PriorBackupEnd): unknown {
    const obj: any = {};
    if (message.priorBackupDetail !== undefined) {
      obj.priorBackupDetail = PriorBackupDetail.toJSON(message.priorBackupDetail);
    }
    if (message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create(base?: DeepPartial<TaskRunLog_PriorBackupEnd>): TaskRunLog_PriorBackupEnd {
    return TaskRunLog_PriorBackupEnd.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TaskRunLog_PriorBackupEnd>): TaskRunLog_PriorBackupEnd {
    const message = createBaseTaskRunLog_PriorBackupEnd();
    message.priorBackupDetail = (object.priorBackupDetail !== undefined && object.priorBackupDetail !== null)
      ? PriorBackupDetail.fromPartial(object.priorBackupDetail)
      : undefined;
    message.error = object.error ?? "";
    return message;
  },
};

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
