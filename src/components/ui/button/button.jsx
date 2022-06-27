import getClasses from "../../../util/join-classes";

import "./style.css";

function Button({ className, minWidth, children }) {
  return (
    <button
      type="button"
      className={getClasses(["button", className])}
      style={{ minWidth: minWidth }}
    >
      {children}
    </button>
  );
}

export default Button;
