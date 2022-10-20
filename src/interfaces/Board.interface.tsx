export interface Task {
  id: number;
  completed: boolean;
  text: string;
}

export interface Card {
  id: number;
  title: string;
  priority: string;
  tasks: Task[];
  users: User[];
  desc?: string;
}

export interface Board {
  id: number;
  title: string;
  cards: Card[];
}

export interface UserProps {
  item: User;
  removeUser?: (user: User) => void;
}

export interface CategoryProps {
  item: string;
}

export interface InputCardProps {
  text: React.ReactNode;
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: React.ReactNode;
  priority?: boolean;
}

export interface InputCardSelectProps {
  text: React.ReactNode;
  onSubmit: (value: string) => void;
  displayClass?: string;
  editClass?: string;
  placeholder?: string;
  defaultValue?: string;
  buttonText?: React.ReactNode;
  data?: User[];
}

export interface CardInfoProps {
  onClose: () => void;
  card: Card;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: Card) => void;
}

export interface CardProps {
  card: Card;
  boardId: number;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: Card) => void;
}

export interface BoardProps {
  board: Board;
  addCard: (boardId: number, title: string) => void;
  removeBoard: (boardId: number) => void;
  removeCard: (boardId: number, cardId: number) => void;
  onDragEnd: (boardId: number, cardId: number) => void;
  onDragEnter: (boardId: number, cardId: number) => void;
  updateCard: (boardId: number, cardId: number, card: Card) => void;
  priority?: string;
  theme?: boolean;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  picture: string;
}
