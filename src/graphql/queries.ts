/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudio = /* GraphQL */ `
  query GetStudio($id: ID!) {
    getStudio(id: $id) {
      address
      erea
      fee
      group
      id
      name
      number_rooms
      phone
      station
      time
      url
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      _deleted
      _lastChangedAt
      _version
      createdAt
      description
      id
      name
      updatedAt
    }
  }
`;
export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: TableStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        address
        erea
        fee
        group
        id
        name
        number_rooms
        phone
        station
        time
        url
      }
      nextToken
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        _deleted
        _lastChangedAt
        _version
        createdAt
        description
        id
        name
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $lastSync: AWSTimestamp
    $limit: Int
    $nextToken: String
  ) {
    syncTodos(
      filter: $filter
      lastSync: $lastSync
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        _deleted
        _lastChangedAt
        _version
        createdAt
        description
        id
        name
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
