/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
      id
      name
      studio {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
      id
      name
      studio {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
      id
      name
      studio {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudio = /* GraphQL */ `
  mutation CreateStudio(
    $input: CreateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    createStudio(input: $input, condition: $condition) {
      id
      groupID
      name
      group {
        id
        name
        createdAt
        updatedAt
      }
      erea
      station
      time
      number_rooms
      room {
        nextToken
      }
      phone
      address
      fee
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateStudio = /* GraphQL */ `
  mutation UpdateStudio(
    $input: UpdateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    updateStudio(input: $input, condition: $condition) {
      id
      groupID
      name
      group {
        id
        name
        createdAt
        updatedAt
      }
      erea
      station
      time
      number_rooms
      room {
        nextToken
      }
      phone
      address
      fee
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudio = /* GraphQL */ `
  mutation DeleteStudio(
    $input: DeleteStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    deleteStudio(input: $input, condition: $condition) {
      id
      groupID
      name
      group {
        id
        name
        createdAt
        updatedAt
      }
      erea
      station
      time
      number_rooms
      room {
        nextToken
      }
      phone
      address
      fee
      url
      createdAt
      updatedAt
    }
  }
`;
export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      studioID
      name
      type
      size
      studio {
        id
        groupID
        name
        erea
        station
        time
        number_rooms
        phone
        address
        fee
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      studioID
      name
      type
      size
      studio {
        id
        groupID
        name
        erea
        station
        time
        number_rooms
        phone
        address
        fee
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      studioID
      name
      type
      size
      studio {
        id
        groupID
        name
        erea
        station
        time
        number_rooms
        phone
        address
        fee
        url
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
