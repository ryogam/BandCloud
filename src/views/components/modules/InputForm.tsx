import React, { useReducer } from "react";
import {
  InputArea,
  RadioBlock,
  SelectButton,
  SubmitButton,
  CheckBox,
} from "views/components/atoms/Button";
import "style/tailwind.css";

export type ObjectType = {
  input: string;
  radio: string;
  select: string;
};

type Action = {
  type: "input" | "radio" | "select";
  aug: string;
};

const InputForm = () => {
  const initialObj: ObjectType = {
    input: "",
    radio: "",
    select: "",
  };

  const reducer = (obj: ObjectType, action: Action) => {
    let newObj: ObjectType;
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
      default:
        return obj;
    }
  };

  const [obj, dispatch] = useReducer(reducer, initialObj);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "input", aug: event.currentTarget.value });
  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({ type: "radio", aug: event.target.value });
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch({ type: "select", aug: event.target.value });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    console.log(obj);

  return (
    <div className="container flex flex-1 h-full mx-auto p-2 boder-3 boder-red">
      <div className="w-full max-w-lg">
        <div>
          <div className="leading-loose">
            <form
              onSubmit={handleSubmit}
              className="max-w-sm p-10 m-auto bg-white bg-opacity-25 rounded shadow-xl"
            >
              <InputArea name="input" onChange={handleInput} />
              <RadioBlock
                value={obj.radio}
                labelList={["man", "woman", "other"]}
                name="sex"
                onChange={handleRadio}
              />
              <SelectButton
                list={location}
                handleValue={obj.select}
                name={"location"}
                id={"location"}
                onChange={handleSelect}
              />
              <CheckBox
                list={instruments}
                name={"instruments"}
                id={"instruments"}
              />
              <SubmitButton text="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const location = ["Ota", "Setagaya", "Shinbashi"];

const instruments = ["guitar", "base", "drum", "piano", "violin"];

export default InputForm;
