import { useDispatch } from "react-redux";
import { sortFilter } from "../../../store/filter/actions";
import { baseQuantityItems } from "../../../store/additional/actions";

const SortItem = ({ item }) => {
    const dispatch = useDispatch();
    //handler of input status
    const onChange = (item) => {
        dispatch(sortFilter(item));
        dispatch(baseQuantityItems());
    };

    return (
        <label>
            <input type="radio" name="sort" onChange={() => onChange(item)} /> {item}
        </label>
    )
}

export default SortItem;