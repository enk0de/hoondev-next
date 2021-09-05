import Image from 'next/image';
import 'twin.macro';
import tw from 'twin.macro';
import styled from '@emotion/styled';

interface IHeaderProps {
  float?: boolean;
}

export default function Header({ float }: IHeaderProps) {
  return (
    <header tw="fixed top-0 left-0 right-0 m-[12px] max-lg:m-0">
      <div
        css={[
          tw`flex items-center max-w-screen-lg space-x-6 mx-auto bg-white px-[25px] py-[15px] transition-shadow rounded-2xl max-lg:rounded-none backdrop-filter backdrop-blur-2xl`,
          float && tw`shadow-light-el-4 bg-opacity-50`
        ]}
      >
        <div tw="w-[172.5px] h-[24px] relative max-sm:w-[137px] max-sm:h-[20px]">
          <Image src="/images/logo.svg" priority layout="fill" alt="Logo" />
        </div>

        <a href="https://feed.hoondev.com" target="_blank" rel="noreferrer">
          <StyledHeaderMenu>feed</StyledHeaderMenu>
        </a>
        <a href="https://www.github.com/hoondeveloper" target="_blank" rel="noreferrer">
          <StyledHeaderMenu>github</StyledHeaderMenu>
        </a>
      </div>
    </header>
  );
}

const StyledHeaderMenu = styled.button`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 20px;
  ${tw`text-dark-3 hover:text-dark-2 transition-colors max-sm:text-base`}
`;
