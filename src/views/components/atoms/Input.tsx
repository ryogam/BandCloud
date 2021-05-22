import React from "react";

type InputProps = {
  value?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputForm = (props: InputProps) => {
  return (
    <div className="text-left">
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        placeholder="search by name"
      />
    </div>
  );
};

export const TextForm = (props: InputProps) => {
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
