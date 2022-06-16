import Image from "next/image";
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <div className="bg-white p-4 flex justify-between">
      <Link href="/">
        <Image src="/hbglogo.png" alt="Logotype" width={200} height={50} />
      </Link>

      <Link href="/awardcenter">
        <Image src="/trophy.svg" alt="Trophy" width={30} height={30} />
      </Link>
    </div>
  );
}
