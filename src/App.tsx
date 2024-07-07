import "bootstrap/dist/css/bootstrap.min.css";
import { HumanCard } from "./components/HumanCard";
import Pagination from "react-bootstrap/Pagination";
import styles from "./App.module.css";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { getHumanIdFromUrl } from "./helpers/getHumanIdFromUrl";
import { usePeople } from "./hooks/usePeople";

const ITEMS_IN_PORTION_COUNT = 10; // hardcoded

export const App = () => {
  const {
    people,
    isLoading,
    total,
    page,
    searchValue,
    handleChangePage,
    handleChangeSearchValue,
  } = usePeople();

  const pagesCount = Math.ceil(total / ITEMS_IN_PORTION_COUNT);

  return (
    <div className={styles.app}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <input
            className={styles.search}
            value={searchValue}
            onChange={handleChangeSearchValue}
          />
          <div className={styles.cards}>
            {people.map((human) => (
              <Link
                key={human.name}
                style={{ textDecoration: "none" }}
                to={`/people/${getHumanIdFromUrl(human.url)}`}
              >
                <HumanCard human={human} />
              </Link>
            ))}
          </div>
        </>
      )}
      <Pagination className={styles.pagination}>
        {Array.from(Array(pagesCount), (_, i) => i + 1).map((p) => (
          <Pagination.Item
            key={p}
            active={p === page}
            onClick={() => handleChangePage(p)}
          >
            {p}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};
