import React, { useEffect, useRef, useState } from "react";
import "./CardInfo.css";
import {
  Card,
  CardInfoProps,
  Task,
  User,
} from "../../../interfaces/Board.interface";
import { colorsList } from "../../../utils/Constants";
import InputCard from "../InputCard/InputCard";
import Alert from "../../Atoms/Alert/Alert";
import { AiOutlineCheck } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import Category from "../../Atoms/Category/Category";
import UserPill from "../../Atoms/UserPill/UserPill";
import InputCardSelect from "../InputCardSelect/InputCardSelect";
import { fetchUserList } from "../../../utils/Functions/DataStore";

const CardInfo = ({ onClose, card, boardId, updateCard }: CardInfoProps) => {
  const dataFetchedRef = useRef(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<Card>({
    ...card,
  });
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  async function fetchData() {
    const users: User[] = await fetchUserList();
    setUsers(users);
  }

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  const updateLabel = (value: string) => {
    setCardValues({ ...cardValues, priority: value });
  };

  const addTask = (value: string) => {
    const task: Task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setCardValues({
      ...cardValues,
      tasks: [...cardValues.tasks, task],
    });
  };

  const removeTask = (id: number) => {
    const tasks = [...cardValues.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setCardValues({
      ...cardValues,
      tasks: tempTasks,
    });
  };

  const updateTask = (id: number, value: boolean) => {
    const tasks = [...cardValues.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = Boolean(value);

    setCardValues({
      ...cardValues,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!cardValues.tasks?.length) return 0;
    const completed = cardValues.tasks?.filter(
      (item) => item.completed
    )?.length;
    return (completed / cardValues.tasks?.length) * 100;
  };

  const addUser = (user: User) => {
    const index = cardValues.users.findIndex((item) => item.id === user.id);
    if (index > -1) return; //if label text already exist then return

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      users: [...cardValues.users, user],
    });
  };

  const removeUser = (user: User) => {
    const tempUsers = cardValues.users.filter((item) => item.id !== user.id);

    setCardValues({
      ...cardValues,
      users: tempUsers,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
  }, [cardValues]);

  const calculatedPercent = calculatePercent();

  return (
    <Alert onClose={onClose}>
      <div className="cardinfo-wrapper">
        <div className="cardinfo-container">
          <div className="cardinfo-container-title">
            <p>Title</p>
          </div>
          <InputCard
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            buttonText={cardValues.title && <AiOutlineCheck />}
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo-container">
          <div className="cardinfo-container-title">
            <p>Description</p>
          </div>
          <InputCard
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Add a Description"}
            placeholder="Enter description"
            buttonText={cardValues.desc && <AiOutlineCheck />}
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo-container">
          <div className="cardinfo-container-title">
            <p>Priority</p>
          </div>
          <div className="cardinfo-container-labels">
            <Category item={cardValues.priority} />
          </div>

          <InputCard
            text="Priority"
            priority={true}
            placeholder="Enter label text"
            buttonText={cardValues.priority && <AiOutlineCheck />}
            onSubmit={updateLabel}
          />
        </div>

        <div className="cardinfo-container">
          <div className="cardinfo-container-title">
            <p>Users</p>
          </div>
          <div className="cardinfo-box-labels">
            {cardValues.users?.map((item, index) => (
              <UserPill key={index} item={item} removeUser={removeUser} />
            ))}
          </div>
          <InputCardSelect
            text="Add User"
            placeholder="Enter label text"
            data={users}
            onSubmit={(value: any) => addUser(JSON.parse(value))}
          />
        </div>

        <div className="cardinfo-container">
          <div className="cardinfo-container-title">
            <p>Tasks</p>
          </div>
          <div className="cardinfo-container-progress-bar">
            <div
              className="cardinfo-container-progress"
              style={{
                width: `${calculatedPercent}%`,
                backgroundColor: calculatedPercent === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo-container-task-list">
            {cardValues.tasks?.map((item) => (
              <div key={item.id} className="cardinfo-container-task-checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeTask(item.id)}
                >
                  <BiTrash />
                </button>
              </div>
            ))}
          </div>
          <InputCard
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Alert>
  );
};

export default CardInfo;
