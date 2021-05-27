/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStudio = /* GraphQL */ `
  subscription OnCreateStudio(
    $erea: [String]
    $group: String
    $id: ID
    $name: String
    $phone: String
  ) {
    onCreateStudio(
      erea: $erea
      group: $group
      id: $id
      name: $name
      phone: $phone
    ) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
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
export const onDeleteStudio = /* GraphQL */ `
  subscription OnDeleteStudio(
    $erea: [String]
    $group: String
    $id: ID
    $name: String
    $phone: String
  ) {
    onDeleteStudio(
      erea: $erea
      group: $group
      id: $id
      name: $name
      phone: $phone
    ) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
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
export const onUpdateStudio = /* GraphQL */ `
  subscription OnUpdateStudio(
    $erea: [String]
    $group: String
    $id: ID
    $name: String
    $phone: String
  ) {
    onUpdateStudio(
      erea: $erea
      group: $group
      id: $id
      name: $name
      phone: $phone
    ) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
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
