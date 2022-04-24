import { useDispatch } from "react-redux";
import { pathFilter } from "../../../store/filter/actions";
import { baseQuantityItems } from "../../../store/additional/actions";

const PathItem = ({ item, disabled }) => {
    const dispatch = useDispatch()

    //checkbox change handler
    const onChange = (item) => {
        dispatch(pathFilter(item));
        dispatch(baseQuantityItems());
    }

    return (
        <label>
            <input
                type="checkbox"
                onChange={() => onChange(item)}
                disabled={disabled} /> {item}
        </label>
    )
}

export default PathItem;