// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ModelAttributeTypes = {
  "NULL": "_null",
  "BINARY": "binary",
  "BINARY_SET": "binarySet",
  "BOOL": "bool",
  "LIST": "list",
  "MAP": "map",
  "NUMBER": "number",
  "NUMBER_SET": "numberSet",
  "STRING": "string",
  "STRING_SET": "stringSet"
};

const ModelSortDirection = {
  "ASC": "ASC",
  "DESC": "DESC"
};

const { Studio, Todo, StudioConnection, ModelTodoConnection } = initSchema(schema);

export {
  ModelAttributeTypes,
  ModelSortDirection,
  Studio,
  Todo,
  StudioConnection,
  ModelTodoConnection
};