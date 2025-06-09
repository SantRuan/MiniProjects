from fastapi import APIRouter
from domain.models.country import Country
from services.coutries_services import get_countries, get_per_population, get_countries_by_continent
router = APIRouter()


@router.get('/all_countries')
def find_all_countries():
    countries = get_countries()
    return countries


@router.get('/countries_over_50m')
def get_countries_over_50m():
    countries = get_per_population()
    return countries


@router.get('/coutries_by_population')
def get_countries_over_50m():
    countries = get_countries()
    countries.sort(key=lambda country: country.population, reverse=False)
    return countries


@router.get('/grouped_by_continent/{continent}')
def grouped_by_continent(continent: str):
    countries = get_countries_by_continent(continent=continent)
    return countries
