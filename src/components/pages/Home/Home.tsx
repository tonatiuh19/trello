import React, { useEffect, useRef, useState } from "react";
import { Board, Card } from "../../../interfaces/Board.interface";
import {
  fetchBoardList,
  updateLocalStorageBoards,
} from "../../../utils/Functions/DataStore";
import Layout from "../../Layout/Layout";
import Action from "../../Organisms/Action/Action";

const Home = () => {
  const dataFetchedRef = useRef(false);
  const [boards, setBoards] = useState<Board[]>([]);
  const [priority, setPriority] = useState("");
  const [theme, setTheme] = useState(false);
  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  });

  async function fetchData() {
    const boards: Board[] = await fetchBoardList();
    setBoards(boards);
  }

  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex((item: Board) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1);
    setBoards(tempBoardsList);
  };

  const addCardHandler = (boardId: number, title: string) => {
    const boardIndex = boards.findIndex((item: Board) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex].cards.push({
      id: Math.random() * 2,
      title,
      priority: "",
      tasks: [],
      users: [],
      desc: "",
    });
    setBoards(tempBoardsList);
  };

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item: Board) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId: number, cardId: number, card: Card) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex].cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    tempBoardsList[boardIndex].cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex(
      (item: Board) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: Board) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard = tempBoardsList[sourceBoardIndex].cards[sourceCardIndex];
    tempBoardsList[sourceBoardIndex].cards.splice(sourceCardIndex, 1);
    tempBoardsList[targetBoardIndex].cards.splice(
      targetCardIndex,
      0,
      sourceCard
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };
  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  const getPriority = (e: any) => {
    setPriority(e);
  };

  const getTheme = (e: any) => {
    setTheme(e);
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchData();
  }, []);

  useEffect(() => {
    updateLocalStorageBoards(boards);
  }, [boards]);

  return (
    <Layout title="Stripe" onChange={getPriority} onChangeSelected={getTheme}>
      <div className="container">
        <div className="row">
          {boards.map((item) => {
            return (
              <div className="col-3" key={item.id}>
                <Action
                  board={item}
                  addCard={addCardHandler}
                  removeBoard={() => removeBoard(item.id)}
                  removeCard={removeCard}
                  onDragEnd={onDragEnd}
                  onDragEnter={onDragEnter}
                  updateCard={updateCard}
                  priority={priority}
                  theme={theme}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
