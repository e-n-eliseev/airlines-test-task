

const SortFilter = () => {
    return (
        <form className="filter" >
            <p className="filter__heading" >Сортировать</p>
            <label>
                <input type="radio" name="sort" checked /> - по возрастанию цены
            </label>
            <label>
                <input type="radio" name="sort" /> - по убыванию цены</label>
            <label>
                < input type="radio" name="sort" /> - по времени в пути</label>
        </form >
    );
};

export default SortFilter;