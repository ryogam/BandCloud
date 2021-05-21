import React, { useState } from "react";

type SubmitProps = {
  text: string;
};

type RadioProps = {
  value: string;
  name: string;
  checked: boolean;
  label: string;
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

type PageTransitionButtonProps = {
  num: number;
  onChange: React.ChangeEventHandler<HTMLButtonElement>;
};

export const RadioButton = (props: RadioProps) => {
  return (
    <div className="text-left">
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

export const PageTransitionButton = (props: PageTransitionButtonProps) => {
  return (
    <button
      type="button"
      className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
      onChange={props.onChange}
    >
      {props.num}
    </button>
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
