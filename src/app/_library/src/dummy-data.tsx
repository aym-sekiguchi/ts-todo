import { type Status } from "./_status";

export type Todo = {
  title: string;
  description: string;
  createAt: string;
  status: Status;
  dueDate: Date;
  userId: string;
  slug: string;
};

export const dummyData: Todo[] = [
  {
    slug: "1",
    title: "todo1",
    description: "description of todo1",
    createAt: "2024.01.01",
    status: "untouched",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "2",
    title: "todo2",
    description: "description of todo2",
    createAt: "2024.01.01",
    status: "untouched",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
  {
    slug: "3",
    title: "todo3",
    description: "description of todo3",
    createAt: "2024.01.01",
    status: "ongoing",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "4",
    title: "todo4",
    description: "description of todo4",
    createAt: "2024.01.01",
    status: "ongoing",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
  {
    slug: "5",
    title: "todo5",
    description: "description of todo5",
    createAt: "2024.01.01",
    status: "done",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "6",
    title: "todo6",
    description: "description of todo6",
    createAt: "2024.01.01",
    status: "done",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
  {
    slug: "7",
    title: "todo7",
    description: "description of todo1",
    createAt: "2024.01.01",
    status: "untouched",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "8",
    title: "todo8",
    description: "description of todo8",
    createAt: "2024.01.01",
    status: "untouched",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
  {
    slug: "9",
    title: "todo9",
    description: "description of todo9",
    createAt: "2024.01.01",
    status: "ongoing",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "10",
    title: "todo10",
    description: "description of todo10",
    createAt: "2024.01.01",
    status: "ongoing",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
  {
    slug: "11",
    title: "todo11",
    description: "description of todo11",
    createAt: "2024.01.01",
    status: "done",
    dueDate: new Date("2024-02-01"),
    userId: "",
  },
  {
    slug: "12",
    title: "todo12",
    description: "description of todo12",
    createAt: "2024.01.01",
    status: "done",
    dueDate: new Date("2025.01.01"),
    userId: "",
  },
];
