import { nidGenerator, nidChecker, ncChecker, ncGenerator } from './iran-national-code.js'; 

// Test the nidGenerator function
const randomNid = nidGenerator();
console.log('Random National ID:', randomNid);

// Test the nidChecker function
const validNid = '10100621967'; // Replace with a valid national ID
console.log('Is valid NID?', nidChecker(validNid));

// Test the ncChecker function
const validNc = '4869731231'; // Replace with a valid national code
console.log('Is valid NC?', ncChecker(validNc));

// Test the ncGenerator function
const randomNc = ncGenerator();
console.log('Random National Code:', randomNc);
