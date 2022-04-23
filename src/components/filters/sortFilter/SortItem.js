
const SortItem = ({ item }) => {
    return (
        <label>
            <input type="radio" name="sort" /> {item}
        </label>
    )
}

export default SortItem;