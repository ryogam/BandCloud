import React, { useState } from "react";
import { CheckButton, RadioButton } from "views/components/atoms/Button";

type RadioBlockProps = {
  value: string;
  labelList: string[];
  name: string;
  id?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type CheckBoxProps = {
  list: string[];
  name: string;
  id?: string;
};

export const RadioBlock = (props: RadioBlockProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="text-left flex flex-wrap">
      <fieldset>
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
    </div>
  );
};

export const CheckBox = (props: CheckBoxProps) => {
  const [display, setDisplay] = useState(false);
  return (
    <div id={props.id} className="text-left">
      <fieldset>
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
    </div>
  );
};
