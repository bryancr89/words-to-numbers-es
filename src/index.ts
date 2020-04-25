import tokenize from './tokenize';
import * as I from './interfaces';

const tokens: I.Token[] = tokenize('test 123 abc');

console.log('tokens', JSON.stringify(tokens, null, 4));