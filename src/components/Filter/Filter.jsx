import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const inputFilterId = nanoid();
  const handleFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <label className={css.filter} htmlFor={inputFilterId}>
      <span className={css.filter_text}>Find contact by name</span>
      <input
        className={css.filter_input}
        type="text"
        name="filter"
        id={inputFilterId}
        onChange={handleFilter}
      />
    </label>
  );
}
