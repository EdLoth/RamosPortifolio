import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    theDirection: number;
    bgImage: string;
    colors: {
      primary: string;
      secundary: string;

      background: string;
      text: string;
    },
    header: {
      logo: string;
      background: string;
      text: string;
      colorHover: string;
    }
  }
}