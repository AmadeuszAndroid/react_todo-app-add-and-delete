type FooterProps = {
  countText: string
  allClasses: string
  onClickAll: () => void
  activeClasses: string
  onClickActive: () => void
  completedClasses: string
  onClickCompleted: () => void
  existsCompleteTodo: boolean
  onClickClearCompleted: () => void
};

export const Footer = ({
  countText,
  allClasses,
  onClickAll,
  activeClasses,
  onClickActive,
  completedClasses,
  onClickCompleted,
  existsCompleteTodo,
  onClickClearCompleted,
}: FooterProps) => {
  return (
    <footer className="todoapp__footer">
      <span className="todo-count">
        {countText}
      </span>

      <nav className="filter">
        <a
          href="#/"
          className={allClasses}
          onClick={onClickAll}
        >
          All
        </a>

        <a
          href="#/active"
          className={activeClasses}
          onClick={onClickActive}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={completedClasses}
          onClick={onClickCompleted}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        onClick={onClickClearCompleted}
        disabled={!existsCompleteTodo}
      >
        Clear completed
      </button>
    </footer>
  );
};
