import { useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

function SearchBox({ filter }) {
  const searchFieldId = useId();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <label className={s.label} htmlFor={searchFieldId}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        id={searchFieldId}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;
