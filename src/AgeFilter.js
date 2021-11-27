const AgeFilter=(props)=>{
    const onSelectGroup=(event)=>{
        props.onSelect(event.target.value);
    }
    return (
        <div>
            <label>Age Group :</label>
            <select onChange={onSelectGroup} >
                <option value="all">All</option>
                <option value="child">Child</option>
                <option value="young">Young</option>
                <option value="mid">Middle Aged</option>
                <option value="old">Old</option>
            </select>
        </div>
    );
}

export default AgeFilter;