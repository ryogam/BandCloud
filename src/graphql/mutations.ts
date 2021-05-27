/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudio = /* GraphQL */ `
  mutation CreateStudio($input: CreateStudioInput!) {
    createStudio(input: $input) {
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
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
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
export const deleteStudio = /* GraphQL */ `
  mutation DeleteStudio($input: DeleteStudioInput!) {
    deleteStudio(input: $input) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
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
export const updateStudio = /* GraphQL */ `
  mutation UpdateStudio($input: UpdateStudioInput!) {
    updateStudio(input: $input) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
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
