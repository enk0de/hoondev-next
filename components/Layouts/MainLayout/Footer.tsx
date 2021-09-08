/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import 'twin.macro';
import { TypoMediumLabel } from '../../../styles/Typography';
import { css } from '@emotion/react';
import tw from 'twin.macro';

export default function Footer() {
  return (
    <footer tw="px-[16px] py-[30px] mb-[50px] max-w-screen-lg mx-auto">
      <div
        tw="flex space-x-5"
        css={css`
          > a {
            cursor: pointer;
            ${tw`transition-opacity hover:opacity-75`}
          }
        `}
      >
        <a href="https://twitter.com/hoondeveloper" target="_blank" rel="noreferrer">
          <Image src="/icons/twitter.svg" width={24} height={24} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/%EC%A7%80%ED%9B%88-%EC%9E%84-b441b81b5/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/icons/linkedin.svg" width={24} height={24} alt="LinkedIn" />
        </a>
        <a
          href="https://www.rocketpunch.com/@hoonskyn9"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/icons/rocketpunch.svg"
            width={24}
            height={24}
            alt="Rocketpunch"
          />
        </a>
      </div>
      <TypoMediumLabel tw="text-dark-4">Frontend Engineer, Lim Ji Hoon</TypoMediumLabel>
    </footer>
  );
}
