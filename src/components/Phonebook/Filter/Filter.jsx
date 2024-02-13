import { useSelector, useDispatch} from "react-redux";

import { setFilter } from "../../../redux/filter/filter-slice";
import { selectFilter } from "../../../redux/filter/filter-selectors"

import styles from "./filter.modules.css"

const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)

  const changeFilter = ({ target }) => dispatch(setFilter(target.value))

  return (
    <>
      <p>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={styles.searchInput}
        name="filter"
        placeholder="Search" />
    </>
  )
}

export default Filter
