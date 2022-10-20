import React, { useState } from "react";
import { InputCardProps } from "../../../interfaces/Board.interface";

const InputCard = ({
  text,
  onSubmit,
  displayClass,
  editClass,
  placeholder,
  defaultValue,
  buttonText,
  priority,
}: InputCardProps) => {
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
          {priority ? (
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
                <option value="Highest">Highest</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Lowest">Lowest</option>
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
          ) : (
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={inputText}
                placeholder={placeholder}
                onChange={(event) => setInputText(event.target.value)}
                autoFocus
              />
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
          )}
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

export default InputCard;
