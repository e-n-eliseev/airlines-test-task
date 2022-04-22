

const PathFilter = () => {
    return (
        <form className="filter">
            <p className="filter__heading">Фильтровать</p>
            <label>
                <input type="checkbox" /> - 1 пересадка
            </label>
            <label>
                <input type="checkbox" /> - без пересадок
            </label>
        </form>
    );
};

export default PathFilter;