import { useSelector } from "react-redux";
import { getPath } from "../../../store/filter/filterSelectors";
import { PATH } from "../../../utils/constants";
import PathItem from "./PathItem";


const PathFilter = () => {
    //getting current search parametr from store
    const { path } = useSelector(getPath);
    return (
        <form className="filter">
            <p className="filter__heading">Фильтровать</p>
            {PATH.map((item, index) => <PathItem
                key={index}
                item={item}
                disabled={path && item !== path}
            />)}
        </form>
    );
};

export default PathFilter;