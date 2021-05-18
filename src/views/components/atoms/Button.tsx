import React, { useState } from "react";

type SubmitProps = {
  text: string;
};

type InputProps = {
  value?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type RadioProps = {
  value: string;
  name: string;
  checked: boolean;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type RadioBlockProps = {
  value: string;
  labelList: string[];
  name: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type ListProps = {
  list: string[];
  handleValue: string;
  name: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

type CheckProps = {
  value: string;
  name: string;
  label: string;
};

type CheckBoxProps = {
  list: string[];
  name: string;
  id?: string;
};

export const InputArea = (props: InputProps) => {
  return (
    <div className="text-left">
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="m-1 p-1 rounded-lg border-transparent flex appearance-none border border-gray-300 py-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="search by name"
      />
    </div>
  );
};

export const TextArea = (props: InputProps) => {
  return (
    <div className="text-left">
      <input
        type="textarea"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="m-2 p-1 rounded-lg border-transparent flex appearance-none border border-gray-300 py-2 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
    </div>
  );
};

export const RadioButton = (props: RadioProps) => {
  return (
    <span>
      <label className="block">
        <input
          type="radio"
          name={props.name}
          value={props.label}
          checked={props.checked}
          onChange={props.onChange}
          className="m-2 p-1 align-baseline"
        />
        {props.label}
      </label>
    </span>
  );
};

export const RadioBlock = (props: RadioBlockProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="text-left flex flex-wrap">
      {!display && (
        <button
          onClick={() => setDisplay(!display)}
          className="text-white rounded bg-black text-left border-red-500 border"
        >
          RadioField
        </button>
      )}
      {display && (
        <fieldset>
          <button
            onClick={() => setDisplay(!display)}
            className="text-white rounded bg-black text-left border-red-500 border"
          >
            selectField
          </button>
          <div>
            {props.labelList.map((label, i) => {
              return (
                <RadioButton
                  value={label}
                  name={props.name}
                  checked={props.value === label}
                  label={label}
                  key={props.name + i}
                  onChange={props.onChange}
                />
              );
            })}
          </div>
        </fieldset>
      )}
    </div>
  );
};

export const SelectButton = (props: ListProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div id={props.id} className="text-left">
      {!display && (
        <button
          onClick={() => setDisplay(!display)}
          className="text-white rounded bg-black text-left border-red-500 border"
        >
          selectField
        </button>
      )}
      {display && (
        <fieldset>
          <button
            onClick={() => setDisplay(!display)}
            className="text-white rounded bg-black text-left border-red-500 border"
          >
            selectField
          </button>
          <select
            name={props.name}
            value={props.handleValue}
            onChange={props.onChange}
            className="block w-52 text-gray-700 py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            {props.list.map((e, i) => (
              <option value={e} key={props.name + i}>
                {e}
              </option>
            ))}
          </select>
        </fieldset>
      )}
    </div>
  );
};

export const CheckButton = (props: CheckProps) => {
  const [check, setCheck] = useState(false);
  return (
    <span>
      <label className="inline-block">
        <input
          type="checkbox"
          name={props.name}
          value={props.value}
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
          className="
          text-xl m-2 p-1 relative align-baseline
          border-radius border border-red
          "
        />
        {props.label}
      </label>
    </span>
  );
};

export const CheckBox = (props: CheckBoxProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div id={props.id} className="text-left">
      {!display && (
        <button
          onClick={() => setDisplay(!display)}
          className="text-white rounded bg-black text-left border-red-500 border"
        >
          checkField
        </button>
      )}
      {display && (
        <fieldset>
          <button
            onClick={() => setDisplay(!display)}
            className="text-white rounded bg-black text-left border-red-500 border"
          >
            checkField
          </button>
          <div>
            {props.list.map((label, i) => {
              return (
                <CheckButton
                  value={label}
                  name={props.name}
                  label={label}
                  key={props.name + i}
                />
              );
            })}
          </div>
        </fieldset>
      )}
    </div>
  );
};

export const SubmitButton = (props: SubmitProps) => {
  return (
    <span>
      <input
        type="submit"
        value={props.text}
        className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
      />
    </span>
  );
};
