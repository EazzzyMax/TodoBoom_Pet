export interface ITodo {
  id: number;
  title: string;
  desc: string;
  completed: boolean;
}

export interface ICategory {
  id: number;
  categoryName: string;
  todos: ITodo[];
}
