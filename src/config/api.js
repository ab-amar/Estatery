// const city = "dubai";
export const options = {
    method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020,6901,5003,8617,5599,11876,5274,5241,9038',
    // locationExternalIDs:`${city==="dubai"?'5002,6020,6901,5003,8617,5599,11876,5274,5241,9038':''}`,
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'verified-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '3e2118a20fmsh2160efcf6e5437ep1738c1jsnf1513a7b55a4',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
  };
