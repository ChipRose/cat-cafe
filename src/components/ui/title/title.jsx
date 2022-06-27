import getClasses from "../../../util/join-classes";

import "./style.css";

function Title({ level, size, className, children }) {
  const CustomTitleTag = `h${level}`;

  return (
    <CustomTitleTag
      className={getClasses(["title", `title__${size}`, className])}
    >
      {children}
    </CustomTitleTag>
  );
}

export default Title;
