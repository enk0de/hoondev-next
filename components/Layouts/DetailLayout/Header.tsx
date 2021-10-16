/** @jsxImportSource @emotion/react */
import Image from 'next/image';
import 'twin.macro';
import tw from 'twin.macro';
import { TypoH6 } from '../../../styles/Typography';
import { useRouter } from 'next/router';

interface IHeaderProps {
  float?: boolean;
  title?: string;
}

export default function Header({ float, title }: IHeaderProps) {
  const router = useRouter();
  return (
    <header
      css={[
        tw`fixed z-50 top-0 left-0 right-0 m-[12px] max-lg:m-0`,
        tw`flex items-center max-w-screen-lg mx-auto bg-white py-[15px] transition-shadow rounded-2xl max-lg:rounded-none backdrop-filter backdrop-blur-md`,
        float && tw`shadow-light-el-4 bg-opacity-75`
      ]}
    >
      <button onClick={() => router.back()}>
        <div tw="h-[30px] w-[50px] pl-[10px] flex hover:opacity-75 transition-opacity">
          <Image src="/icons/back.svg" priority width="24" height="24" alt="뒤로" />
        </div>
      </button>
      <TypoH6 tw="text-dark-1 overflow-hidden overflow-ellipsis whitespace-nowrap pr-[24px]">
        {title}
      </TypoH6>
    </header>
  );
}
