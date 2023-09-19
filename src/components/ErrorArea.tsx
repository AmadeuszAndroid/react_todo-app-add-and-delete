/* eslint-disable jsx-a11y/control-has-associated-label */
type ErrorAreaProps = {
  onClick: () => void
  errorMessage: string
};

export const ErrorArea = ({ onClick, errorMessage }: ErrorAreaProps) => (
  <div className="notification is-danger is-light has-text-weight-normal">
    <button
      type="button"
      className="delete"
      onClick={onClick}
    />
    {errorMessage}
  </div>
);
