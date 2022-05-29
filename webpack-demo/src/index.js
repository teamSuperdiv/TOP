'use strict'

// // import your function
// import myName from './myName';

// function component() {
//   const element = document.createElement('div');

//   // use your function!
//   element.textContent = myName('Cody');
//   return element;
// }

// document.body.appendChild(component());

import _ from 'lodash';
import printMe from './print.js';

 function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';

   btn.onclick = printMe;


   element.appendChild(btn);

   return element;
 }

 document.body.appendChild(component());