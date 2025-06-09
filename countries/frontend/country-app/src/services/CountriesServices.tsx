
export  const getAllCountries = async () =>{
    const url_base = 'http://127.0.0.1:8000/all_countries'
    const response: Promise<Response> = fetch(url_base,
        {
        method: 'GET',
        headers: {
			'content-type': 'application/json;charset=UTF-8',
		}
    })
    const json = (await response).json()
    return json
}

export const getCountriesByContinents = async (continent) => {
    const url = `http://127.0.0.1:8000/grouped_by_continent/${continent}`;
    const response: Promise<Response>  =  fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = (await response).json();
    console.log(data)
    return data;
};
