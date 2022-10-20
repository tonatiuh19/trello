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
              src="https://robohash.org/sitvoluptasaccusamus.png?size=100x100&set=set1"
              variant="md"
            />
          </div>
        </div>
        <div className="col-7 mt-1">
          <div className="float-start title-user">Tonatiuh Gomez</div>
        </div>
        <div className="col-2">
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
