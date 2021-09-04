import Image from 'next/image';
import 'twin.macro';

export default function Header() {
  return (
    <div tw="bg-white px-[30px] py-[20px]">
      <Image src="/images/logo.svg" width={172.5} height={24} alt="Logo" />
    </div>
  );
}
