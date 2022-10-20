import { Board, User } from "../interfaces/Board.interface";

export const data: Board[] = [
  {
    id: 1651319512266.7095,
    title: "Backlog",
    cards: [
      {
        id: 1651319552926.0933,
        title: "Task1",
        priority: "High",
        tasks: [
          { id: 1651319625559.8025, completed: true, text: "Task1_subtask1" },
          { id: 1651319629650.8945, completed: true, text: "Task1_subtask2" },
          { id: 1651319633774.9905, completed: true, text: "Task1_subtask3" },
        ],
        users: [
          {
            id: 1,
            first_name: "Katalin",
            last_name: "Jannasch",
            picture:
              "https://robohash.org/vitaeautvoluptatem.png?size=100x100&set=set1",
          },
          {
            id: 2,
            first_name: "Harlene",
            last_name: "Patron",
            picture:
              "https://robohash.org/solutanullaquo.png?size=100x100&set=set1",
          },
          {
            id: 3,
            first_name: "Adelina",
            last_name: "Sherburn",
            picture:
              "https://robohash.org/asperioreslaudantiumaut.png?size=100x100&set=set1",
          },
        ],
        desc: "Task1 Detail Description",
      },
      {
        id: 1651319568365.593,
        title: "Task2",
        priority: "Lowest",
        tasks: [],
        users: [
          {
            id: 8,
            first_name: "Paloma",
            last_name: "Gunningham",
            picture:
              "https://robohash.org/remplaceatin.png?size=100x100&set=set1",
          },
          {
            id: 9,
            first_name: "Kaela",
            last_name: "Batman",
            picture:
              "https://robohash.org/eaqueoccaecaticonsequuntur.png?size=100x100&set=set1",
          },
          {
            id: 10,
            first_name: "Jojo",
            last_name: "Bridgstock",
            picture:
              "https://robohash.org/eumillumrem.png?size=100x100&set=set1",
          },
        ],
      },
    ],
  },
  {
    id: 1651319523126.113,
    title: "To Do",
    cards: [
      {
        id: 1651319672685.5078,
        title: "Task3",
        priority: "Medium",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "restore db" },
        ],
        users: [
          {
            id: 1,
            first_name: "Katalin",
            last_name: "Jannasch",
            picture:
              "https://robohash.org/vitaeautvoluptatem.png?size=100x100&set=set1",
          },
        ],
      },
    ],
  },
  {
    id: 1651319530017.122,
    title: "On going",
    cards: [
      {
        id: 1651319677070.0732,
        title: "Task4",
        priority: "Medium",
        tasks: [
          { id: 1651319728301.3855, completed: false, text: "restore db" },
        ],
        users: [
          {
            id: 2,
            first_name: "Harlene",
            last_name: "Patron",
            picture:
              "https://robohash.org/solutanullaquo.png?size=100x100&set=set1",
          },
          {
            id: 3,
            first_name: "Adelina",
            last_name: "Sherburn",
            picture:
              "https://robohash.org/asperioreslaudantiumaut.png?size=100x100&set=set1",
          },
          {
            id: 4,
            first_name: "Lela",
            last_name: "McEvon",
            picture:
              "https://robohash.org/utlaborerem.png?size=100x100&set=set1",
          },
        ],
      },
    ],
  },
  {
    id: 1651319535931.4182,
    title: "Team review",
    cards: [
      {
        id: 1651319680948.0479,
        title: "Task5",
        priority: "Highest",
        tasks: [
          { id: 1651319820180.9648, completed: false, text: "GraphQl" },
          { id: 1651319833779.3252, completed: true, text: "Restful API" },
        ],
        users: [
          {
            id: 1,
            first_name: "Katalin",
            last_name: "Jannasch",
            picture:
              "https://robohash.org/vitaeautvoluptatem.png?size=100x100&set=set1",
          },
          {
            id: 3,
            first_name: "Adelina",
            last_name: "Sherburn",
            picture:
              "https://robohash.org/asperioreslaudantiumaut.png?size=100x100&set=set1",
          },
          {
            id: 5,
            first_name: "Mellie",
            last_name: "Falco",
            picture:
              "https://robohash.org/expeditamaioresquo.png?size=100x100&set=set1",
          },
          {
            id: 7,
            first_name: "Suellen",
            last_name: "Dudding",
            picture:
              "https://robohash.org/optioaliasin.png?size=100x100&set=set1",
          },
          {
            id: 9,
            first_name: "Kaela",
            last_name: "Batman",
            picture:
              "https://robohash.org/eaqueoccaecaticonsequuntur.png?size=100x100&set=set1",
          },
        ],
      },
    ],
  },
];

export const users: User[] = [
  {
    id: 1,
    first_name: "Katalin",
    last_name: "Jannasch",
    picture:
      "https://robohash.org/vitaeautvoluptatem.png?size=100x100&set=set1",
  },
  {
    id: 2,
    first_name: "Harlene",
    last_name: "Patron",
    picture: "https://robohash.org/solutanullaquo.png?size=100x100&set=set1",
  },
  {
    id: 3,
    first_name: "Adelina",
    last_name: "Sherburn",
    picture:
      "https://robohash.org/asperioreslaudantiumaut.png?size=100x100&set=set1",
  },
  {
    id: 4,
    first_name: "Lela",
    last_name: "McEvon",
    picture: "https://robohash.org/utlaborerem.png?size=100x100&set=set1",
  },
  {
    id: 5,
    first_name: "Mellie",
    last_name: "Falco",
    picture:
      "https://robohash.org/expeditamaioresquo.png?size=100x100&set=set1",
  },
  {
    id: 6,
    first_name: "Morgun",
    last_name: "Pittet",
    picture: "https://robohash.org/suntametaut.png?size=100x100&set=set1",
  },
  {
    id: 7,
    first_name: "Suellen",
    last_name: "Dudding",
    picture: "https://robohash.org/optioaliasin.png?size=100x100&set=set1",
  },
  {
    id: 8,
    first_name: "Paloma",
    last_name: "Gunningham",
    picture: "https://robohash.org/remplaceatin.png?size=100x100&set=set1",
  },
  {
    id: 9,
    first_name: "Kaela",
    last_name: "Batman",
    picture:
      "https://robohash.org/eaqueoccaecaticonsequuntur.png?size=100x100&set=set1",
  },
  {
    id: 10,
    first_name: "Jojo",
    last_name: "Bridgstock",
    picture: "https://robohash.org/eumillumrem.png?size=100x100&set=set1",
  },
];
