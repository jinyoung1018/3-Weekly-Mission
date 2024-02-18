import styles from "./SearchText.module.css";

const SearchText = ({ inputText }) => {
  return (
    <div className={styles.textArea}>
      <div className={styles.inputText}>{inputText}</div>
      <div className={styles.defaultText}>으로 검색한 결과입니다.</div>
    </div>
  );
};
export default SearchText;
