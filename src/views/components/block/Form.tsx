import React from "react";
import { InputForm } from "views/components/atoms/Input";

type SearchFormProps = {
  buttonLabel: string;
};

export const FormWithButton = (props: SearchFormProps) => {
  return (
    <form className="flex w-full max-w-sm space-x-3">
      <div className=" relative ">
        <InputForm
          name="search-form-button"
          onChange={() => {
            console.log();
          }}
        />
      </div>
      <button
        className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
        type="submit"
      >
        {props.buttonLabel}
      </button>
    </form>
  );
};
