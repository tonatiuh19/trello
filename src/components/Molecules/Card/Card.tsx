import React, { useState } from "react";
import "./Card.css";
import { CardProps } from "../../../interfaces/Board.interface";
import CardInfo from "../CardInfo/CardInfo";
import { FiMoreHorizontal } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import Category from "../../Atoms/Category/Category";
import OverlapAvatars from "../../Atoms/OverlapAvatars/OverlapAvatars";

const Card = ({
  card,
  boardId,
  removeCard,
  onDragEnd,
  onDragEnter,
  updateCard,
}: CardProps) => {
  const { id, title, users, tasks, priority } = card;
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CardInfo
          onClose={() => setShowModal(false)}
          card={card}
          boardId={boardId}
          updateCard={updateCard}
        />
      )}
      <div
        className="card my-1"
        key={card.id}
        draggable
        onDragEnd={() => onDragEnd(boardId, id)}
        onDragEnter={() => onDragEnter(boardId, id)}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="card-body p-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <small>{title}</small>
              </div>
              <div className="col">
                <div className="float-end">
                  <div className="dropdown">
                    <a
                      className="btn btn-secondary"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FiMoreHorizontal />
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item text-muted"
                          onClick={() => removeCard(boardId, id)}
                        >
                          <small>
                            <BiTrash /> Delete
                          </small>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Category item={priority} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer p-1">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="float-start">
                  <OverlapAvatars users={users} header={false} />
                </div>
              </div>
              <div className="col">
                <div className="float-end">
                  {tasks && tasks?.length > 0 && (
                    <small>
                      <GrTask className="icon-task-size" /> {tasks?.length}
                    </small>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
