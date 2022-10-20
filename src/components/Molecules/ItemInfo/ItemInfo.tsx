import React from "react";
import "./ItemInfo.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ItemInfoProps } from "../../../interfaces/Components.interface";
import useHover from "../../../hooks/useHover";

const ItemInfo = ({
  icon,
  onClick,
  notification,
  title,
  variant,
  active,
}: ItemInfoProps) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const isNotification = (state: boolean) => {
    if (notification) {
      return <span className="badge text-bg-danger">{notification}</span>;
    } else {
      if (state) {
        if (!variant) {
          return (
            <small>
              <AiOutlineArrowRight />
            </small>
          );
        }
      } else {
        return null;
      }
    }
  };

  return (
    <div
      className={
        active
          ? "container item-btn target item-btn-active"
          : "container item-btn target"
      }
      ref={hoverRef}
    >
      <div className="row ">
        <div className="col-10 mt-1">
          <div className="float-start">
            <div
              className={variant ? `text-muted size-${variant}` : "text-muted"}
            >
              <span
                className={variant ? `icon-size-${variant}` : "icon-size-md"}
              >
                {icon}
              </span>{" "}
              {title}
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="float-end mt-1">
            {active ? isNotification(true) : isNotification(isHovered)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
