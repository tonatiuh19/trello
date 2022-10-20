import { data, users } from "../../api/data";
import { Board, User } from "../../interfaces/Board.interface";

const LocalStorageKeyNameBoard = "vaultBoard";
const LocalStorageKeyNameUser = "vaultUser";

export class BoardAPI {
  async fetchBoardList(): Promise<Board[]> {
    const apiData: Board[] = data;
    let BoardList: Board[] = [];

    if (localStorage.getItem(LocalStorageKeyNameBoard)) {
      const localStorageData: Board[] = JSON.parse(
        localStorage.getItem(LocalStorageKeyNameBoard) ?? ""
      );
      BoardList = [...localStorageData];
    } else {
      BoardList = [...apiData];
      updateLocalStorageBoards(BoardList);
    }

    return BoardList;
  }

  async fetchUserList(): Promise<User[]> {
    const apiData: User[] = users;
    let UserList: User[] = [];

    if (localStorage.getItem(LocalStorageKeyNameUser)) {
      const localStorageData: User[] = JSON.parse(
        localStorage.getItem(LocalStorageKeyNameUser) ?? ""
      );
      UserList = [...localStorageData];
    } else {
      UserList = [...apiData];
      updateLocalStorageUsers(UserList);
    }

    return UserList;
  }
}

export async function fetchBoardList(): Promise<Board[]> {
  const api = new BoardAPI();
  return api.fetchBoardList();
}

export async function fetchUserList(): Promise<User[]> {
  const api = new BoardAPI();
  return api.fetchUserList();
}

export function updateLocalStorageBoards(boards: Board[]) {
  localStorage.setItem(LocalStorageKeyNameBoard, JSON.stringify(boards));
}

export function updateLocalStorageUsers(users: User[]) {
  localStorage.setItem(LocalStorageKeyNameUser, JSON.stringify(users));
}
