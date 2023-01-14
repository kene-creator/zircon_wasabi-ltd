import styles from './HeadInformation.module.css';
import icons from '../assets/icons.svg';

const HeadInformation = () => {
  return (
    <div className="flex_center flex_col">
      <div>
        <h1 className={styles.header_text}>Compare Schools</h1>
        <p className={styles.header_p}>
          Compare top four schools you’re interested in and pick the right one
          for you. Use the search field to add schools to compare. You can drag
          to reorder schools after selection.
        </p>
      </div>
      <div className="flex_center">
        <form action="" className={styles.header_search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.header_search_input}
          />
          <button className={styles.btn_search}>
            <svg className={styles.search_icon}>
              <use xlinkHref={`${icons}#search`} />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeadInformation;
