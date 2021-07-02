import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './currency-service.js'

function clearFields() {
  $('#search-currency').val("");
}

function getElements(response) {
  if (response.main) {
    console.log(response)
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(city) {
  const response = await WeatherService.getWeather(city);
  getElements(response);
} 

$('#button').click(function (event) {
  event.preventDefault();
  let inputCurrency = $('#input-currency').val();
  clearFields();
  let promise = CurrencyService.getCurrency(userSearch);
  promise.then(function (response) {
  }, function (error) {
    $('.showErrors').text(`There was an error processing your request: ${error}`);
  });
});