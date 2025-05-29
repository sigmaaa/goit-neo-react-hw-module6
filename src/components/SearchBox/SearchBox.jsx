import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { getFilters } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilters);
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
