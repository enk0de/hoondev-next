/** @jsxImportSource @emotion/react */
import { TypoDisplay1 } from '../../styles/Typography';
import 'twin.macro';

export default function Jumbotron() {
  return (
    <div tw="py-[150px] max-sm:py-[100px]">
      <TypoDisplay1 tw="max-sm:text-4xl bg-gradient-to-t from-primary to-primary-lighter bg-clip-text text-transparent">
        안녕하세요.
        <br />
        임지훈입니다.
      </TypoDisplay1>
    </div>
  );
}
