import requests
from typing import List
from domain.models.country import Country

base_url = "https://restcountries.com/v3.1"


def get_countries(path: str = 'all') -> List[Country]:

    params = {
        'fields': ['name', 'population', 'area', 'continent']
    }
    response = requests.get(f"{base_url}/{path}", params=params)
    data = response.json()
    list_of_countries = []
    for index, countries in enumerate(data):
        country = Country(
            id=int(index),
            name=countries["name"]["common"],
            population=countries["population"],
            area=converting_km_to_miles(int(countries["area"]))
        )
        list_of_countries.append(country)
    return list_of_countries


def get_per_population() -> List[Country]:
    countries = get_countries()

    countries_per_limit = list(filter(compare_countries, countries))

    return countries_per_limit


def compare_countries(country: Country, limit=50000000):
    if country.population > limit:
        return True
    else:
        return False


def get_countries_by_continent(continent: str):
    countries = get_countries(path=f"subregion/{continent}")
    return countries


def converting_km_to_miles(area_km: int):
    mile = 1.609344 * area_km
    return mile
