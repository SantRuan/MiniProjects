
export const DropDown = ({setContinent}) =>{

    return (
        <div style={{margin: '10px'}}>
        <select name="continents" 
        onChange={(e) =>setContinent(e.target.value) }>
            <option value="north-america">North America</option>
            <option value="south-america">South America</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="africa">Africa</option>
        </select>
        </div>
    )
}