import classNames from 'classnames';
import { Todo } from '../types/Todo';

type TodoInfoProps = {
  todo: Todo
  onClick?: (todoId: number) => void
  deleteTodoIds?: number[]
};

export const TodoInfo = (
  { todo: { id, completed, title }, onClick, deleteTodoIds }: TodoInfoProps,
) => {
  const todoClassNames = classNames('todo', { completed });
  const modalClassNames = classNames('modal', 'overlay', {
    'is-active': id === 0 || deleteTodoIds?.includes(id),
  });

  return (
    <div className={todoClassNames}>
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span className="todo__title">{title}</span>

      <button
        type="button"
        className="todo__remove"
        onClick={onClick && (() => onClick(id))}
      >
        ×
      </button>

      <div className={modalClassNames}>
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
