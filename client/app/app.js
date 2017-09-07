import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);


//   // returns an array of the first n prime numbers
// function findPrimes(n) {
//   let result = [2];
//   if (n === 1) {
//     return result;
//   }
//   let num = 3;
//   while (result.length < n) {
//     if (isPrime(num)) {
//       result.push(num);
//     }
//     num += 2;
//   }
//   return result;
// }

// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log('p', findPrimes(33));



