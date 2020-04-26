export interface Token {
  type: string;
  text: string;
}

export interface ParseToken {
  type: string;
  value: number;
}

export interface Keyword {
  [key: string]: undefined | number;
}