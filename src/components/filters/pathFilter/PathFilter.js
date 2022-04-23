import { PATH } from "../../../utils/constants";
import PathItem from "./PathItem";


const PathFilter = () => {
    return (
        <form className="filter">
            <p className="filter__heading">Фильтровать</p>
            {PATH.map((item, index) => <PathItem key={index} item={item} />)}
        </form>
    );
};

export default PathFilter;