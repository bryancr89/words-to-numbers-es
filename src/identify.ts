const LETTER = /[a-zA-Z]/;
const WHITE_SPACE = /\s+/;

export const isWhiteSpace = (character: string): boolean => WHITE_SPACE.test(character);

export const isLetter = (character: string = ''): boolean => LETTER.test(character);