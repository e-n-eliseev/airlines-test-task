import { SORT } from "../../../utils/constants";
import SortItem from "./SortItem";


const SortFilter = () => {
    return (
        <form className="filter" >
            <p className="filter__heading" >Сортировать</p>
            {SORT.map((item, index) => <SortItem key={index} item={item} />)}
        </form >
    );
};

export default SortFilter;