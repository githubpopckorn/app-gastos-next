"use client";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import Image from "next/image";
import LoadingSession from "./components/LoadingSession";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  const user = getSession();

  console.log("session", session, status);
  if (status === "loading") {
    return <LoadingSession />;
  }

  const getUsernameLetters = () => {
    const username = session.user.name;
    const letters = username.split(" ");
    const firstLetter = letters[0].charAt(0);
    const secondLetter = letters[1].charAt(0);
    return firstLetter + secondLetter;
  };

  return (
    <>
      {session && (
        <section className="md:flex items-center justify-end gap-2 absolute top-6 right-6 hidden">
          <span className="font-semibold text-lg">Bienvenid@!</span>
          <div className="inline-flex items-center justify-center rounded-full shadow-lg dark:bg-slate-800 bg-slate-100 w-12 h-12">
            <span className="font-medium text-gray-600 dark:text-gray-300">
              {getUsernameLetters()}
            </span>
          </div>
        </section>
      )}

      <div className="flex flex-col items-start justify-start px-6 pt-6">
        <h1 className="max-w-md  font-extrabold text-6xl">
          Administración de ingresos y gastos
        </h1>
        <h3 className=" text-2xl pt-6 w-1/2 text-yellow-400">
          Monitorea tus ingresos y gastos por cada mes, podras visualizar
          gráficas de tus flujos de dinero y tu estado de cuenta.
        </h3>

        {!session && (
          <>
            <div className="flex flex-col gap-4 mt-8 justify-between md:flex-row md:w-auto w-full">
              <button
                className="flex items-center gap-2 px-8 p-4 bg-white md:w-auto text-slate-900 font-bold 
              rounded-lg shadow-xl hover:shadow-2xl transition duration-200 ease-in-out 
              transform hover:-translate-y-1 hover:scale-110"
                onClick={() => signIn("google")}
              >
                <Image src="/google.svg" alt="Google" width={32} height={32} />
                Ingresar con Google
              </button>
              <button
                className="flex items-center gap-2 px-8 p-4 bg-white md:w-auto text-slate-900 font-bold 
              rounded-lg shadow-xl hover:shadow-2xl transition duration-200 ease-in-out 
              transform hover:-translate-y-1 hover:scale-110"
                onClick={() => signIn("github")}
              >
                <Image src="/github.svg" alt="Google" width={32} height={32} />
                Ingresar con Github
              </button>
            </div>
            <div 
            className="mt-6 shadow-lg rounded-lg p-6 right-1 bg-transparent 
            border-slate-800 border bg-slate-800 text-white font-semibold w-full md:w-auto">
              <span>Para usar la aplicación primero debes iniciar sesión.</span>
            </div>
          </>
        )}
        {session && (
          <>
            <div className="flex w-full md:w-auto ">
              <Link className="flex items-center gap-2 p-4 bg-white w-full md:w-auto  text-slate-900 font-bold 
              rounded-lg shadow-xl hover:shadow-2xl transition duration-200 ease-in-out 
              transform hover:-translate-y-0 hover:scale-110 mt-6"
              href="/gastos">
                Esta todo listo! Usar la aplicación
                <Image src="/arrow-right.svg" alt="Google" width={32} height={32} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
