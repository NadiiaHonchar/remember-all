import css from "./BookTitle.module.css";
export const BookTitle = ({ text }) => {
  return <h1 className={css.title}>{text}</h1>;
};
