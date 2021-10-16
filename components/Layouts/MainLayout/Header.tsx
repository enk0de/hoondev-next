/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import 'twin.macro';
import tw from 'twin.macro';
import styled from '@emotion/styled';

interface IHeaderProps {
  float?: boolean;
}

export default function Header({ float }: IHeaderProps) {
  return (
    <nav tw="fixed z-50 top-0 left-0 right-0 m-[12px] max-lg:m-0" role="navigation">
      <div
        css={[
          tw`flex items-center max-w-screen-lg space-x-6 mx-auto bg-white px-[25px] py-[15px] transition-shadow rounded-2xl max-lg:rounded-none backdrop-filter backdrop-blur-xl`,
          float && tw`shadow-light-el-4 bg-opacity-75`
        ]}
      >
        <div tw="w-[172.5px] h-[24px] relative max-sm:w-[155px] max-sm:h-[25px]">
          <Image src="/images/logo.svg" priority layout="fill" alt="Logo" />
        </div>

        <StyledHeaderMenu
          href="https://feed.hoondev.com"
          target="_blank"
          rel="noreferrer"
          role="menuitem"
        >
          feed
        </StyledHeaderMenu>
        <StyledHeaderMenu
          href="https://www.github.com/hoondeveloper"
          target="_blank"
          rel="noreferrer"
          role="menuitem"
        >
          github
        </StyledHeaderMenu>
      </div>
    </nav>
  );
}

const StyledHeaderMenu = styled.a`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
  line-height: 22px;
  ${tw`text-dark-3 hover:text-dark-2 hover:no-underline transition-colors max-sm:text-[18px]`}
`;
