import Image from "next/image";
import Link from "next/link";
import LeftArrow from "../components/LeftArrow";

export default function Gastos() {
  return (
    <>
      <section className="flex justify-start items-center">
        <Link href="/" className="flex gap-x-2 tansition hover:contrast-125 hover:scale-105 text-yellow-300">
          <Image src="/arrow-left.svg" alt="Regresar" width={24} height={24} />
          <span className="font-semibold text-lg">Regresar</span>
        </Link>
      </section>
    </>
  );
}
