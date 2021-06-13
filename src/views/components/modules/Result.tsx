import React from "react";
import { List } from "views/components/block/List";
import SeachForm from "views/components/modules/InputForm";
import { JsonObjType } from "api/GetRequestApi";

type Props = {
  jsons: JsonObjType[];
};

const ResultPage = (props: Props) => {
  return (
    <div className="w-3/4 float-left">
      <List jsonList={props.jsons} name="noahList" />
    </div>
  );
};

export default ResultPage;
