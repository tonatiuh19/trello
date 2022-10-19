import React from "react";
import "./ItemUser.css";
import CircleUserImage from "../../Atoms/CircleUser/CircleUserImage";
import { TfiExchangeVertical } from "react-icons/tfi";
import ButtonIcon from "../../Atoms/ButtonIcon/ButtonIcon";

const ItemUser = () => {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-3">
          <div className="float-end">
            <CircleUserImage
              src="https://xsgames.co/randomusers/avatar.php?g=pixel"
              variant="md"
            />
          </div>
        </div>
        <div className="col-6 mt-1">
          <div className="float-start">Felix Gomez</div>
        </div>
        <div className="col-3">
          <div className="float-end">
            <ButtonIcon variant="sm" onClick={() => console.log("Click")}>
              <TfiExchangeVertical />
            </ButtonIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemUser;
