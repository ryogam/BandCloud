import React, { Fragment } from "react";
import Introduction from "views/components/block/Introduction";
import ContactFormComponent from "views/components/block/ContactFrom";
import StudioList from "views/components/block/StudioList";
import SideBar from "views/components/block/SideBar";

function Top() {
  return (
    <React.Fragment>
      <Introduction />
      {/* <SideBar /> */}
      {/* <StudioList /> */}
    </React.Fragment>
  );
}

export default Top;
