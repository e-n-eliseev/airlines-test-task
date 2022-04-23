

const Company = ({ item }) => {
    const [company, minPrice] = item;
    return (
        <div className="filter__company"><label className="filter__label">
            <input type="checkbox" /> - {company}
        </label><p>от {minPrice} р.</p>
        </div>
    )
}

export default Company;