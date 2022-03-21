import express from 'express';
import { string } from 'yup';
const router = express.Router();

const pageData = [
  { id: '1', title: 'ページ1', content: 'ページ1の本文' },
  { id: '2', title: 'ページ2', content: 'ページ2の本文' },
  { id: '3', title: 'ページ3', content: 'ページ3の本文' },
  { id: '4', title: 'ページ4', content: 'ページ4の本文' },
  { id: '5', title: 'ページ5', content: 'ページ5の本文' },
  { id: '6', title: 'ページ6', content: 'ページ6の本文' },
];

router.get('/pages', (req, res) => {
  res.send(pageData);
});

const todoData = [
  { id: '1', todo: `somthing task 1`, checked: false },
  { id: '2', todo: `somthing task 2`, checked: false },
  { id: '3', todo: `somthing task 3`, checked: false },
];

router.get('/todo', (req, res) => {
  res.send(todoData);
});

router.post('/todo', (req, res) => {
  console.log(req.body);
  const todo = {
    id: `${todoData.length + 1}`,
    todo: req.body.todo,
    checked: false,
  };
  todoData.push(todo);
  res.send(todo);
});

router.patch('/todo', (req, res) => {
  const todo = todoData.find((v) => v.id === req.body.todo.id);
  if (todo) {
    todo.todo = req.body.todo.todo;
    todo.checked = req.body.todo.checked;
  }
  res.send(todo);
});

interface D3SampleItem {
  name: string;
  value: number;
}
const d3sample: { [index: string]: D3SampleItem[] } = {};

router.get('/d3sample/:name', (req, res) => {
  const data = d3sample[req.params.name];
  if (data) {
    return res.send(data);
  }
  setTimeout(() => {
    res.send([
      { name: 'value1', value: 1 },
      { name: 'value2', value: 2 },
    ]);
  }, 500);
});

router.post('/d3sample/:name', (req, res) => {
  const { data }: { data: D3SampleItem[] } = req.body;
  if (data) {
    d3sample[req.params.name] = data;
  }
  setTimeout(() => {
    res.sendStatus(200);
  }, 500);
});

export const apiRouter = router;
