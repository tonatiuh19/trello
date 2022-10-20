import React from "react";
import "./Action.css";
import { BoardProps } from "../../../interfaces/Board.interface";
import Card from "../../Molecules/Card/Card";
import InputCard from "../../Molecules/InputCard/InputCard";
import { AiOutlinePlus } from "react-icons/ai";

const Action = ({
  board,
  addCard,
  removeCard,
  onDragEnd,
  onDragEnter,
  updateCard,
  priority,
  theme,
}: BoardProps) => {
  return (
    <div className="container" key={board?.id}>
      <div className="row py-2">
        <div className="col-8 action-title">{board?.title}</div>
        <div className="col">
          <div className="float-end">
            <span className="badge rounded-pill text-bg-secondary">
              {board?.cards?.length || 0}
            </span>
          </div>
        </div>
      </div>
      <div className={theme ? "row text-dark" : "row"}>
        <div className="col">
          <InputCard
            text={<AiOutlinePlus />}
            placeholder="Title"
            displayClass="board-add-card"
            editClass="board-add-card-edit"
            onSubmit={(value: string) => addCard(board?.id, value)}
          />
          {priority
            ? board?.cards?.map((item) => {
                if (item.priority === priority) {
                  return (
                    <Card
                      key={item.id}
                      card={item}
                      boardId={board.id}
                      removeCard={removeCard}
                      onDragEnter={onDragEnter}
                      onDragEnd={onDragEnd}
                      updateCard={updateCard}
                    />
                  );
                }
              })
            : board?.cards?.map((item) => (
                <Card
                  key={item.id}
                  card={item}
                  boardId={board.id}
                  removeCard={removeCard}
                  onDragEnter={onDragEnter}
                  onDragEnd={onDragEnd}
                  updateCard={updateCard}
                />
              ))}
          {}
        </div>
      </div>
    </div>
  );
};

export default Action;
