/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import 'twin.macro';
import tw from 'twin.macro';
import { TypoH6 } from '../../../styles/Typography';

interface IHeaderProps {
  float?: boolean;
  title?: string;
}

export default function Header({ float, title }: IHeaderProps) {
  return (
    <header tw="fixed z-50 top-0 left-0 right-0 m-[12px] max-lg:m-0">
      <div
        css={[
          tw`flex items-center max-w-screen-lg mx-auto bg-white py-[15px] transition-shadow rounded-2xl max-lg:rounded-none backdrop-filter backdrop-blur-md`,
          float && tw`shadow-light-el-4 bg-opacity-75`
        ]}
      >
        <div tw="h-[30px] w-[50px] pl-[10px] flex">
          <Image src="/icons/back.svg" priority width="24" height="24" />
        </div>
        <TypoH6 tw="text-dark-1">{title}</TypoH6>
      </div>
    </header>
  );
}
