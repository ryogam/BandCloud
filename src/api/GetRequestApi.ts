import { API, graphqlOperation } from "aws-amplify";
import { gql } from "graphql-request";
import { GraphQLResult, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";

export interface GraphQLOptions {
  input?: unknown;
  variables?: unknown;
  authMode?: GRAPHQL_AUTH_MODE;
}

export type JsonObjType = {
  address?: string;
  erea?: string[];
  fee?: string;
  group?: string;
  id: string;
  name?: string;
  number_rooms?: string;
  phone?: string;
  station?: string;
  time?: string;
  url?: string;
};

export type Errors = "No Data" | "Fetching Error";

type ResultType<T extends keyof JsonObjType> =
  | {
      type: "fail";
      res: Errors;
    }
  | {
      type: "success";
      res: Pick<JsonObjType, T>[];
    };

type GraphQLGetResponse = {
  getStudioTable: JsonObjType;
};

type GraphQLListResponse = {
  listStudioTables: {
    items: JsonObjType[];
  };
};

const ListRequestQuery = gql`
  query ListStudioTables($filter: ModelStudioTableFilterInput) {
    listStudioTables(filter: $filter) {
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
    }
  }
`;

async function callGraphQL<T>(
  query: unknown,
  options?: GraphQLOptions
): Promise<GraphQLResult<T>> {
  return (await API.graphql(
    graphqlOperation(query, options)
  )) as GraphQLResult<T>;
}

export async function fetchStudios<T extends keyof JsonObjType>(
  options?: GraphQLOptions
) {
  let data: ResultType<T>;
  try {
    const res = await callGraphQL<GraphQLListResponse>(
      ListRequestQuery,
      options
    );
    if (res.data) {
      data = {
        type: "success",
        res: res.data.listStudioTables.items.map((json) => {
          return json as Pick<JsonObjType, T>;
        }),
      };
    } else {
      data = {
        type: "fail",
        res: "No Data",
      };
    }
  } catch (error) {
    data = {
      type: "fail",
      res: error,
    };
  }

  return data;
}
