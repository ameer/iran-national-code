# iran-national-code

> Utility functions for generating and checking Iranian national IDs (legal persons) and national codes (actual person).

## Installation

You can install this package via npm:

```bash
npm install iran-national-code
```

## Usage

```js
const {
  nidGenerator,
  nidChecker,
  ncChecker,
  ncGenerator,
} = require('iran-national-code');

// Generate a random national ID
const randomNid = nidGenerator();
console.log('Random National ID:', randomNid);

// Check if a given national ID is valid
const validNid = '10100621967';
console.log('Is valid NID?', nidChecker(validNid));

// Check if a given national code is valid
const validNc = '4869731231';
console.log('Is valid NC?', ncChecker(validNc));

// Generate a random national code
const randomNc = ncGenerator();
console.log('Random National Code:', randomNc);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
