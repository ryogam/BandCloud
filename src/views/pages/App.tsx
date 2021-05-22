import React from "react";
import logo from "img/logo.svg";
import "style/App.css";
import { getJsonLines } from "lib/getJsonLines";
import Header from "views/components/block/Header";
import Footer from "views/components/block/Footer";
import SearchForm from "views/components/modules/InputForm";
import { List } from "views/components/block/List";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <div className="float-left w-1/5">
          <SearchForm />
        </div>
        <div className="float-left w-3/4">
          <List jsonList={noahList} name="noahList" />
        </div>
      </div>
      <div className="clear-both w-screen"></div>
      <Footer />
    </div>
  );
}

const noahList = [
  JSON.parse(
    '{"group": "penta", "name": "新宿店", "phone": "03-3351-3140", "address": "160-0022 東京都新宿区新宿4-2-6"}'
  ),
  JSON.parse(
    '{"group": "penta", "name": "池袋ロックオン", "phone": "03-3986-2022", "address": "170-0013 東京都豊島区東池袋1-20-6-2F"}'
  ),
  JSON.parse(
    '{"group": "penta", "name": "池袋ハンズサイド", "phone": "03-3981-4436", "address": "170-0013 東京都豊島区東池袋1-26-4-BF"}'
  ),
  JSON.parse(
    '{"group": "penta", "name": "池袋店", "phone": "03-3981-5540", "address": "171-0022 東京都豊島区南池袋2-47-8-BF"}'
  ),
  JSON.parse(
    '{"group": "noah", "name": "駒沢", "phone": "03-5433-5711", "address": "〒154-0011 東京都世田谷区上馬4-2-7"}'
  ),
];

export default App;
