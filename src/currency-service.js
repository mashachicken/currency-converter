
export default class CurrencyService {
  static getCurrency(userSearch) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.currency_API_KEY}/latest/`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      })
  }
}