import React from 'react';
import { MainTemplate } from 'ui/components/templates/MainTemplate';
import { Button } from 'ui/components/atoms/Button';

export type ToDo = { id: string; todo: string; checked: boolean };

export type Props = {
  status?: string;
  todos: ToDo[];
  actions: {
    onClickToDoAdd: (todo: string) => void;
    onClickTodoCheckbox: (todo: ToDo) => void;
  };
};

export function ToDoPage(props: Props) {
  const { todos, actions, status } = props;
  const [todoText, setTodoText] = React.useState('');
  return (
    <MainTemplate header="ToDo">
      <p>{status ? status : null}</p>
      <input
        type="text"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <Button
        label="Add"
        onClick={() => {
          actions.onClickToDoAdd(todoText);
          setTodoText('');
        }}
        size="large"
      />
      {todos.map((v) => (
        <div key={v.id}>
          {v.todo}
          <input
            type="checkbox"
            checked={v.checked}
            onChange={(e) =>
              actions.onClickTodoCheckbox({ ...v, checked: e.target.checked })
            }
          />
        </div>
      ))}
    </MainTemplate>
  );
}
