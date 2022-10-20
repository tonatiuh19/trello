import React from "react";
import { UserProps } from "../../../interfaces/Board.interface";
import { IoMdRemoveCircleOutline } from "react-icons/io";

const UserPill = (props: UserProps) => {
  const { item, removeUser } = props;
  return (
    <span className="badge rounded-pill text-bg-dark m-1">
      {item.first_name} {item.last_name}
      {removeUser && (
        <IoMdRemoveCircleOutline onClick={() => removeUser(item)} />
      )}
    </span>
  );
};

export default UserPill;
