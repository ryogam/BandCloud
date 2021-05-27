/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStudioInput = {
  address?: string | null,
  erea?: Array< string | null > | null,
  fee?: string | null,
  group?: string | null,
  name?: string | null,
  number_rooms?: string | null,
  phone?: string | null,
  station?: string | null,
  time?: string | null,
  url?: string | null,
};

export type Studio = {
  __typename: "Studio",
  address?: string | null,
  erea?: Array< string | null > | null,
  fee?: string | null,
  group?: string | null,
  id?: string,
  name?: string | null,
  number_rooms?: string | null,
  phone?: string | null,
  station?: string | null,
  time?: string | null,
  url?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreateTodoInput = {
  _version?: number | null,
  description?: string | null,
  id?: string | null,
  name: string,
};

export type Todo = {
  __typename: "Todo",
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  _version?: number,
  createdAt?: string,
  description?: string | null,
  id?: string,
  name?: string,
  updatedAt?: string,
};

export type DeleteStudioInput = {
  id: string,
};

export type DeleteTodoInput = {
  _version?: number | null,
  id: string,
};

export type UpdateStudioInput = {
  address?: string | null,
  erea?: Array< string | null > | null,
  fee?: string | null,
  group?: string | null,
  id: string,
  name?: string | null,
  number_rooms?: string | null,
  phone?: string | null,
  station?: string | null,
  time?: string | null,
  url?: string | null,
};

export type UpdateTodoInput = {
  _version?: number | null,
  description?: string | null,
  id: string,
  name?: string | null,
};

export type TableStudioFilterInput = {
  address?: TableStringFilterInput | null,
  erea?: TableStringFilterInput | null,
  fee?: TableStringFilterInput | null,
  group?: TableStringFilterInput | null,
  id?: TableIDFilterInput | null,
  name?: TableStringFilterInput | null,
  number_rooms?: TableStringFilterInput | null,
  phone?: TableStringFilterInput | null,
  station?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableIDFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type StudioConnection = {
  __typename: "StudioConnection",
  items?:  Array<Studio | null > | null,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items?:  Array<Todo | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateStudioMutationVariables = {
  input?: CreateStudioInput,
};

export type CreateStudioMutation = {
  createStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input?: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudioMutationVariables = {
  input?: DeleteStudioInput,
};

export type DeleteStudioMutation = {
  deleteStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input?: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudioMutationVariables = {
  input?: UpdateStudioInput,
};

export type UpdateStudioMutation = {
  updateStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input?: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type GetStudioQueryVariables = {
  id?: string,
};

export type GetStudioQuery = {
  getStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id?: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type ListStudiosQueryVariables = {
  filter?: TableStudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudiosQuery = {
  listStudios?:  {
    __typename: "StudioConnection",
    items?:  Array< {
      __typename: "Studio",
      address?: string | null,
      erea?: Array< string | null > | null,
      fee?: string | null,
      group?: string | null,
      id: string,
      name?: string | null,
      number_rooms?: string | null,
      phone?: string | null,
      station?: string | null,
      time?: string | null,
      url?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items?:  Array< {
      __typename: "Todo",
      _deleted?: boolean | null,
      _lastChangedAt: number,
      _version: number,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  lastSync?: number | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items?:  Array< {
      __typename: "Todo",
      _deleted?: boolean | null,
      _lastChangedAt: number,
      _version: number,
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStudioSubscriptionVariables = {
  erea?: Array< string | null > | null,
  group?: string | null,
  id?: string | null,
  name?: string | null,
  phone?: string | null,
};

export type OnCreateStudioSubscription = {
  onCreateStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudioSubscriptionVariables = {
  erea?: Array< string | null > | null,
  group?: string | null,
  id?: string | null,
  name?: string | null,
  phone?: string | null,
};

export type OnDeleteStudioSubscription = {
  onDeleteStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudioSubscriptionVariables = {
  erea?: Array< string | null > | null,
  group?: string | null,
  id?: string | null,
  name?: string | null,
  phone?: string | null,
};

export type OnUpdateStudioSubscription = {
  onUpdateStudio?:  {
    __typename: "Studio",
    address?: string | null,
    erea?: Array< string | null > | null,
    fee?: string | null,
    group?: string | null,
    id: string,
    name?: string | null,
    number_rooms?: string | null,
    phone?: string | null,
    station?: string | null,
    time?: string | null,
    url?: string | null,
  } | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    _deleted?: boolean | null,
    _lastChangedAt: number,
    _version: number,
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    updatedAt: string,
  } | null,
};
