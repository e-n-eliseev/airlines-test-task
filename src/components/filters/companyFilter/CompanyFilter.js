

const CompanyFilterc = () => {
    return (
        <form className="filter">
            <p className="filter__heading">Авиакомпании</p>
            <div className="filter__company"><label className="filter__label">
                <input type="checkbox" /> - LOT Polish Airlines
            </label><p>от 21049 р.</p>
            </div>
            <div className="filter__company"><label className="filter__label">
                <input type="checkbox" /> - Aeroflot - Российские авиалинии
            </label><p>от 21049 р.</p>
            </div>
        </form >
    );
};

export default CompanyFilterc;