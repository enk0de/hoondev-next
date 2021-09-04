import { TypoDisplay1 } from '../../styles/Typography';
import 'twin.macro';

export default function Jumbotron() {
  return (
    <div tw="py-[150px]">
      <TypoDisplay1 tw="bg-gradient-to-t from-primary to-primary-lighter bg-clip-text text-transparent">
        안녕하세요. 임지훈입니다.
      </TypoDisplay1>
    </div>
  );
}
