import React, { Fragment, useState, useEffect } from "react";
import Introduction from "views/components/block/Introduction";
import ResultPage from "views/components/modules/Result";
import ErrorPage from "views/components/modules/Error";
import LoadingPage from "views/components/modules/Loading";
import SearchForm from "views/components/modules/InputForm";
import {
  JsonObjType,
  Errors,
  GraphQLOptions,
  fetchStudios,
} from "api/GetRequestApi";

type Required = "id" | "name" | "phone" | "address" | "group";

type PageState =
  | {
      type: "loading";
    }
  | {
      type: "error";
      content: string;
    }
  | {
      type: "loaded";
      content: Pick<JsonObjType, Required>[];
    };

const Top = () => {
  const [page, setPage] = useState<PageState>({ type: "loading" });

  useEffect(() => {
    fetchList();
  }, []);

  async function fetchList(option?: GraphQLOptions) {
    setPage({ type: "loading" });
    const fetchdata = await fetchStudios<Required>(option);
    switch (fetchdata.type) {
      case "success":
        setPage({
          type: "loaded",
          content: fetchdata.res,
        });
        break;
      case "fail":
        setPage({
          type: "error",
          content: fetchdata.res,
        });
    }
    return;
  }

  const filter = (
    <div className="w-1/5 float-left">
      <SearchForm subFunc={fetchList} />
    </div>
  );

  let currentPage: JSX.Element;

  switch (page.type) {
    case "error":
      currentPage = <ErrorPage error={page.content} />;
      break;
    case "loading":
      currentPage = <LoadingPage />;
      break;
    case "loaded":
      currentPage = <ResultPage jsons={page.content} />;
      break;
  }

  return (
    <Fragment>
      <Introduction />
      {filter}
      {currentPage}
    </Fragment>
  );
};

export default Top;
