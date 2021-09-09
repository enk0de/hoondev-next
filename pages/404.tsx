/** @jsxImportSource @emotion/react */
import Link from 'next/link';
import 'twin.macro';
import NormalButton from '../components/Button/NormalButton';

function NotFound() {
  return (
    <div tw="px-[16px] space-y-4 mt-[200px] flex flex-col items-center justify-center">
      <h1 tw="max-sm:text-xl text-3xl text-center font-bold text-dark-1">
        존재하지 않거나
        <br />
        준비 중인 페이지입니다.
      </h1>
      <Link href="/" passHref={true}>
        <NormalButton>메인으로</NormalButton>
      </Link>
    </div>
  );
}
export default NotFound;
