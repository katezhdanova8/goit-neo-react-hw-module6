import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  return (
    <label className={css.SearchBox}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        placeholder="Search contact"
        value={search}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

export default SearchBox;