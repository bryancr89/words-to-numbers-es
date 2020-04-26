import tokenize from './tokenize';
import parse from './parse';

const evaluate = (text: string): number => {
  const tokens = tokenize(text);
  const parsedTokens = parse(tokens);
  return parsedTokens.reduce((prev, next) => {
    return prev += next.value;
  }, 0);
};

export default evaluate;
