import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyService from './currency-service.js';

function clearFields() {
  $('#search-currency').val("");
}

function getElements(response, currency) {
  let currencyInput = $('#currency').val();
  if (response) {
    if (!(currency in response.conversion_rates)) {
      $('.result').text("not a real currency");
    } else if (currency === "EUR") {
      $('.result').text((currencyInput * `${response['conversion_rates']['EUR']}`));
    } else if (currency === 'GBP') {
      $('.result').text((currencyInput * `${response['conversion_rates']['GBP']}`).toFixed(2));
    } else if (currency === "JPY") {
      $('.result').text((currencyInput * `${response['conversion_rates']['JPY']}`).toFixed(2));
    } else if (currency === 'CAD') {
      $('.result').text((currencyInput * `${response['conversion_rates']['CAD']}`).toFixed(2));
    } else if (currency === 'AUD') {
      $('.result').text((currencyInput * `${response['conversion_rates']['AUD']}`).toFixed(2));
    }
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function () {
  $('#button').click(function (event) {
    event.preventDefault();
    let currency = $('#type-currency').val();
    CurrencyService.getCurrency()
      .then(function (response) {
        getElements(response, currency);
        clearFields();
      }, function (error) {
        $('.showErrors').text(`There was an error processing your request: ${error}`);
      });
  });
});
