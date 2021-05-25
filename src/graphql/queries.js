/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudio = /* GraphQL */ `
  query GetStudio($id: ID!) {
    getStudio(id: $id) {
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
export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: ModelStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studioID
        name
        type
        size
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
