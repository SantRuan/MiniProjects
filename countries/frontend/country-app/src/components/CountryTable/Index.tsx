import { Country } from "../../models/Country";
import './styles.css'
interface CountryTableProps {
  countries: Country[];
}

export const CountryTable: React.FC<CountryTableProps> = ({ countries }) => {
  return (
    <table className="app-table-container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        <CountryRows countries={countries} />
      </tbody>
    </table>
  );
};

const CountryRow: React.FC<{ country: Country }> = ({ country }) => {
  return (
    <tr key={country.id}>
      <td>{country.name}</td>
      <td>{country.population}</td>
      <td>{country.area}</td>
    </tr>
  );
};

const CountryRows: React.FC<{ countries: Country[] }> = ({ countries }) => {
  return (
    <>
      {countries.map((c) => (
        <CountryRow key={c.id} country={c} />
      ))}
    </>
  );
};
