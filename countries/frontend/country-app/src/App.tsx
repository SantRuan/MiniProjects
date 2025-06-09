import  { useEffect, useState } from 'react';
import { getAllCountries, getCountriesByContinents } from './services/CountriesServices';
import './App.css';
import { CountryTable } from './components/CountryTable/Index';
import { SearchBar } from './components/SearchBar/Index';
import { Country } from './models/Country';
import { Button } from './components/Button/Index';
import { DropDown } from './components/DropDown/Index';
function App() {
  const [countries, setCountries] = useState<Country[]>([])
  const [continent, setContinent] = useState<string>("")
  const [searchCountry, setSearchCountry] = useState("")
  useEffect(() => {
    

    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const data = await getAllCountries();
      setCountries(data);
    } catch (error) {
      console.error("Error to found country", error);
    }
  };
  useEffect(() =>{ 
    getCountries()
  }, [continent])

  const getCountries = async () =>{
    const response = getCountriesByContinents(continent)
    setCountries(await response) 
  }

  const handleSearch =() =>{
    if(countries){
      const countrySearched = countries.filter((c)=> c.name === searchCountry)
      setCountries(countrySearched)
    }
  }



  return (
    <div className='app-container'>
    
    <SearchBar setSearchCountry={setSearchCountry}/>
    <DropDown  setContinent={setContinent}/>
    <CountryTable countries={countries}/>
    <div className='button-container'>
    <Button type="text" title={"Pesquisar"} handleClick={handleSearch}   />
    <Button type="text" title={"Limpar Pesquisa"} handleClick={fetchCountries}   />
    </div>

    </div>
  );
}

export default App;
