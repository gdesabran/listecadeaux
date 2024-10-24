import Link from "next/link";
import { ReactNode } from "react";

function CarteProjet({ children }: { children: ReactNode }) {
  return (
    <Link
      href="/cadeaux"
      className="border-yellow-300 border-[1px] sm:text-2xl text-base rounded-sm p-4 py-12 text-center bg-blue-50"
    >
      {children}
    </Link>
  );
}

export default function Accueil() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <main className="grid grid-flow-row sm:grid-cols-3 gid-cols-1 gap-8 my-20">
        <CarteProjet>Ma Liste de Cadeaux</CarteProjet>
      </main>
    </div>
  );
}
