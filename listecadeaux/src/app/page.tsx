import Link from "next/link";
import { ReactNode } from "react";

function CarteProjet({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="border-indigo-300 shadow-sm border-[2px] text-gray-700 sm:text-2xl text-base font-semibold rounded-lg p-4 py-12 text-center bg-indigo-50"
    >
      {children}
    </Link>
  );
}

export default function Accueil() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <main className="grid grid-flow-row sm:grid-cols-3 gid-cols-1 gap-8 my-20">
        <CarteProjet link={"/cadeaux"}>Idées Cadeaux</CarteProjet>
      </main>
    </div>
  );
}
