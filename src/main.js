import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyService from './currency-service.js';

function clearFields() {
  $('#search-currency').val("");
}

function getElements(response, currency) {
  let currencyInput = $('#currency').val();
  // const conversion_rates = Object.keys(response['conversion_rates']);
  if (response) {
    console.log(response);
    if (currency === "EUR") {
      $('.result').text(((currencyInput * `${response['conversion_rates']['EUR']}`).toFixed(2)));
    } else if (currency === 'GBP') {
      $('.result').text((currencyInput * `${response['conversion_rates']['GBP']}`).toFixed(2));
    } else if (currency === "JPY") {
      $('.result').text((currencyInput * `${response['conversion_rates']['JPY']}`).toFixed(2));
    } else if (currency ==='CAD') {
      $('.result').text((currencyInput * `${response['conversion_rates']['CAD']}`).toFixed(2));
    } else if (currency ==='AUD') {
      $('.result').text((currencyInput * `${response['conversion_rates']['AUD']}`).toFixed(2));
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$('#button').click(function (event) {
  event.preventDefault();
  let currency = $('#input-currency').val();
  clearFields();
  CurrencyService.getCurrency(currency)
    .then(function (response) {
      console.log('RESPONSE')
      console.log(currency)
      getElements(response, currency);
      // $('').append()
    }, function (error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
})
