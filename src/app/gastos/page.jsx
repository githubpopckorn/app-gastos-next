import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { ArrowLeft } from "../../assets/Icons";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { GastosForm } from "../../components/Gastos/GastosForm";
import { GastosList } from "../../components/Gastos/GastosList";

export default async function Gastos() {
  const user = await getServerSession(authOptions);
  console.log(user);

  return (
    <main className="flex flex-col gap-y-4">
      <section className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-x-1 tansition hover:contrast-125 hover:scale-105 items-center"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="font-semibold text-lg">Inicio</span>
        </Link>
        <GastosForm />
      </section>
      <section className="flex flex-col w-full">
        <GastosList />
      </section>
    </main>
  );
}
