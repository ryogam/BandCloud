/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
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
export const onCreateStudio = /* GraphQL */ `
  subscription OnCreateStudio {
    onCreateStudio {
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
export const onUpdateStudio = /* GraphQL */ `
  subscription OnUpdateStudio {
    onUpdateStudio {
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
export const onDeleteStudio = /* GraphQL */ `
  subscription OnDeleteStudio {
    onDeleteStudio {
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
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
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
