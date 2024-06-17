import css from "./SearchBox.module.css"
import { useDispatch } from 'react-redux';
import {changeFilter} from '../../redux/filtersSlice'

const SearchBox = () => {
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        dispatch(changeFilter(e.target.value));
    }

    return (
        <div className={css.searchBoxContainer}>
            <p className={css.searchBoxText}>Find contacts by name</p>
            <input className={css.searchBoxInput} onChange={handleSearch} type="text" />
        </div>
    );
};


export default SearchBox;
