"use client";

import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import FormulaireIdeeCadeau from "./form";

export default function Cadeaux() {
  const [gifts, setGifts] = useState<string[]>([]);
  const [menuAjoutCadeau, modifierMenuAjoutCadeau] = useState<boolean>(false);

  function addGift(gift: string) {
    setGifts([...gifts, gift]);
    modifierMenuAjoutCadeau(false);
  }

  function ouvrirMenuAjoutCadeau() {
    modifierMenuAjoutCadeau(true);
  }
  return (
    <div className="mx-auto max-w-5xl my-5 px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 pb-4 flex items-center justify-between">
        <h3 className="sm:text-2xl text-xl font-semibold leading-6 text-gray-900 py-2">
          Idées Cadeaux
        </h3>
        <div className="flex sm:ml-4 sm:mt-0">
          {!menuAjoutCadeau && (
            <button
              type="button"
              onClick={() => ouvrirMenuAjoutCadeau()}
              className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="sm:inline hidden">Ajouter une idée</span>
              <PlusCircleIcon className="h-6 w-6 sm:hidden inline-flex" />
            </button>
          )}
        </div>
      </div>
      <main className="my-8">
        {menuAjoutCadeau && <FormulaireIdeeCadeau addAction={addGift} />}
        <ul className="flex-1 mg-0">
          {gifts.map((gift, index) => (
            <li key={index} className="capitalize">
              {gift}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
