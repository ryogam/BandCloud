import React, { useReducer } from "react";
import { SelectButton, SubmitButton } from "views/components/atoms/Button";
import { InputForm } from "views/components/atoms/Input";
import { RadioBlock, CheckBox } from "views/components/block/Box";
import { JsonObjType } from "api/GetRequestApi";

export type ButtonObjType = {
  input: string;
  radio: string;
  select: string;
  check: string[];
};

type Action = {
  type: "input" | "radio" | "select" | "check" | "uncheck" | "reset";
  aug: string;
};

type SubmitFunction = (aug: any) => void;

type Props = {
  subFunc: SubmitFunction;
};

const SearchForm = (props: Props) => {
  const initialObj: ButtonObjType = {
    input: "",
    radio: "",
    select: "",
    check: [],
  };

  const reducer = (obj: ButtonObjType, action: Action) => {
    let newObj: ButtonObjType;
    switch (action.type) {
      case "input":
        newObj = { ...obj, input: action.aug };
        return newObj;
      case "radio":
        newObj = { ...obj, radio: action.aug };
        return newObj;
      case "select":
        newObj = { ...obj, select: action.aug };
        return newObj;
      case "check":
        newObj = { ...obj, check: obj.check.concat([action.aug]) };
        return newObj;
      case "uncheck":
        newObj = { ...obj, check: obj.check.filter((e) => e !== action.aug) };
        return newObj;
      case "reset":
        newObj = { input: "", radio: "", select: "", check: [] };
        return newObj;
      default:
        return obj;
    }
  };

  const [obj, dispatch] = useReducer(reducer, initialObj);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "input", aug: event.currentTarget.value });
    console.log(obj.input);
  };
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "radio", aug: event.currentTarget.value });
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "select", aug: event.currentTarget.value });
  };
  const handleCheck =
    (isChecked: boolean) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isChecked) dispatch({ type: "uncheck", aug: event.target.value });
      else dispatch({ type: "check", aug: event.target.value });
    };
  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("reset");
    dispatch({ type: "reset", aug: "" });
    console.log(obj);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(obj);
    if (obj.select) props.subFunc({ filter: { group: { eq: obj.select } } });
    else props.subFunc({});
  };

  const inputForm = <InputForm name="input" onChange={handleInput} />;

  const radioBox = (
    <RadioBlock
      value={obj.radio}
      labelList={["man", "woman", "other"]}
      name="sex"
      onChange={handleRadio}
    />
  );

  const selectBox = (
    <SelectButton
      list={groupname}
      handleValue={obj.select}
      name={"groupname"}
      id={"groupname"}
      onChange={handleSelect}
    />
  );

  const checkBox = (
    <CheckBox
      list={groupname}
      name={"groupname"}
      id={"groupname"}
      onChange={handleCheck}
    />
  );

  return (
    <div className="container flex flex-1 h-full mx-auto p-2 boder-3 boder-red">
      <div className="w-full max-w-lg">
        <div>
          <div className="leading-loose">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
            >
              <button
                type="button"
                onClick={handleReset}
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              >
                Filter Reset
              </button>
              {selectBox}
              <SubmitButton text="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const location = ["Ota", "Setagaya", "Shinbashi"];

const groupname = [
  "J'Z STUDIO",
  "サウンドスタジオノア",
  "First Avenue Studio",
  "音楽館",
  "スタジオペンタ",
  "島村楽器",
  "SOUND STUDIO M",
  "スタジオマザーハウス",
  "東京倶楽部",
  "リンキィディンクスタジオ",
  "M.studio",
  "伊藤楽器 MUSIC BANK",
  "ベースオントップ",
  "ロサンゼルスクラブ",
  "山響楽器店",
  "ピアノサロンノア",
  "サウンドアーツ",
];

export default SearchForm;
