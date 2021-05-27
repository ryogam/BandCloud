import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class Studio {
  readonly address?: string;
  readonly erea?: (string | null)[];
  readonly fee?: string;
  readonly group?: string;
  readonly id: string;
  readonly name?: string;
  readonly number_rooms?: string;
  readonly phone?: string;
  readonly station?: string;
  readonly time?: string;
  readonly url?: string;
  constructor(init: ModelInit<Studio>);
}

export declare class Todo {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly createdAt: string;
  readonly description?: string;
  readonly id: string;
  readonly name: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Todo>);
}

export declare class StudioConnection {
  readonly items?: (Studio | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<StudioConnection>);
}

export declare class ModelTodoConnection {
  readonly items?: (Todo | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelTodoConnection>);
}

