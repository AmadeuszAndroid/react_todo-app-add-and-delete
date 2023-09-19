import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

const generateTodoUserRoute = (userId: number) => {
  return `/todos?userId=${userId}`;
};

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(generateTodoUserRoute(userId));
};

export const addTodo = (userId: number, title: string) => {
  return client.post<Todo>(generateTodoUserRoute(userId), {
    userId,
    title,
    completed: false,
  });
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};
