import React, { useState } from "react";
import { InputCardSelectProps } from "../../../interfaces/Board.interface";

const InputCardSelect = ({
  text,
  onSubmit,
  displayClass,
  editClass,
  placeholder,
  defaultValue,
  buttonText,
  data,
}: InputCardSelectProps) => {
  const [isCustomInput, setIsCustomInput] = useState(false);
  const [inputText, setInputText] = useState(defaultValue || "");

  const submission = (e: any) => {
    e.preventDefault();
    if (inputText && onSubmit) {
      setInputText("");
      onSubmit(inputText);
    }
    setIsCustomInput(false);
  };

  return (
    <div className="custom-input">
      {isCustomInput ? (
        <form
          className={`custom-input-edit ${editClass ? editClass : ""}`}
          onSubmit={submission}
        >
          <div className="input-group">
            <select
              defaultValue={"DEFAULT"}
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              onChange={(event) => setInputText(event.target.value)}
              autoFocus
            >
              <option value="DEFAULT" disabled>
                {" "}
                Choose...
              </option>
              {data?.map((item) => {
                return (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.first_name} {item.last_name}
                  </option>
                );
              })}
            </select>
            <button
              className="btn btn-outline-secondary btn-sm"
              type="submit"
              id="button-addon2"
            >
              {buttonText || "Add"}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => setIsCustomInput(false)}
              type="button"
            >
              X
            </button>
          </div>
        </form>
      ) : (
        <button
          className="btn btn-light btn-sm w-100"
          onClick={() => setIsCustomInput(true)}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default InputCardSelect;
