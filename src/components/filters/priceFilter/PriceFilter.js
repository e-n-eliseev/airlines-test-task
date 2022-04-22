

const PriceFilter = () => {
    return (
        <form className="filter filter__price">
            <p className="filter__heading">Цена</p>
            <label >
                От <input type="number" />
            </label>
            <label className="filter__price-label">
                До <input type="number" />
            </label>
        </form >
    );
};

export default PriceFilter;