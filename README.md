# Words To Numbers
Project that converts spanish words into numbers.

![<bryancr89](https://circleci.com/gh/bryancr89/words-to-numbers-es.svg?style=shield)

## Installation
```
npm install words-to-numbers-es
```
## Example using ES6

```
import evalute from 'words-to-numbers-es';

const value = evaluate('ciento once mil quinientos treinta y dos dólares con tres centavos');
console.log(value); //111532.3
```
## Example using CommonJS

```
var wordsToNumbersEs = require("words-to-numbers-es")

const value = wordsToNumbersEs.default('ciento once mil quinientos treinta y dos dólares con tres centavos');
console.log(value);
```
