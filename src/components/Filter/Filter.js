import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/actions';

export default function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.currentTarget.value;
    dispatch(addFilter(filterValue));
  };

  return (
    <>
      <h2>Filter</h2>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}
