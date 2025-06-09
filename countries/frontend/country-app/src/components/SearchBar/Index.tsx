import './styles.css'

export const SearchBar = ({setSearchCountry}) =>{
     
    return (
        <>
        <input  className='search-bar' type="text" placeholder="Type a Country" onChange={(e)=> {
            setSearchCountry(e.target.value)}} />
        </>
    )
}