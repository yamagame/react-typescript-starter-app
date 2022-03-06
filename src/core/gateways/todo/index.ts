import { API } from 'core/gateways/utils/api';

export type ToDo = {
  id: string;
  todo: string;
  checked: boolean;
};

const headers = { 'content-type': 'application/json' };

// ------------------------------------------------------------
export type TodoGetRequest = {
  //
};

export type ToDoGetResponse = {
  data: ToDo[];
  status?: number;
};

/**
 * ToDo を全て取得
 */
export const getTodoAsync = async (
  _: TodoGetRequest
): Promise<ToDoGetResponse> => {
  const res = await API.getAsync('/api/todo');
  return { data: res.data, status: res.status };
};

// ------------------------------------------------------------
export type TodoPostRequest = {
  todo: string;
};

export type ToDoPostResponse = {
  data: ToDo;
  status?: number;
};

/**
 * ToDo を作成
 */
export const postTodoAsync = async (
  payload: TodoPostRequest
): Promise<ToDoPostResponse> => {
  const { todo } = payload;
  const res = await API.postAsync('/api/todo', {
    headers,
    data: JSON.stringify({ todo }),
  });
  return { data: res.data, status: res.status };
};

// ------------------------------------------------------------
export type TodoPatchRequest = {
  todo: ToDo;
};

export type ToDoPatchResponse = {
  data: ToDo;
  status?: number;
};

/**
 * ToDo を更新
 */
export const patchToDoAsync = async (
  payload: TodoPatchRequest
): Promise<ToDoPatchResponse> => {
  const { todo } = payload;
  const res = await API.patchAsync(`/api/todo`, {
    headers,
    data: JSON.stringify({ todo }),
  });
  return { data: res.data, status: res.status };
};
