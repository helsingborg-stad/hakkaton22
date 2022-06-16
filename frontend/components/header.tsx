import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <div className="bg-white p-4">
      <Image src="/hbglogo.png" alt="Logotype" width={200} height={50} />
    </div>
  );
}
