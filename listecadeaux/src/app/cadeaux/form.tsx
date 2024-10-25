import { useState } from "react";

export default function FormulaireIdeeCadeau({
  addAction,
}: {
  addAction: (gift: string) => void;
}) {
  const [cadeauTitre, remplirCadeauTitre] = useState<string>("");

  return (
    <form className="p-6 bg-white border-gray-200 rounded-md border-[1px]">
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="titre"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Titre
          </label>
          <div className="mt-2">
            <input
              id="titre"
              name="titre"
              type="text"
              onChange={(e) => remplirCadeauTitre(e.target.value)}
              value={cadeauTitre}
              placeholder="Titre de l'idée cadeau"
              className="ps-2 pe-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="lien"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Lien vers le produit
          </label>
          <div className="mt-2">
            <input
              id="lien"
              name="lien"
              type="url"
              placeholder="https://"
              className="ps-2 pe-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-6 flex justify-end items-end">
          <button
            type="button"
            onClick={() => addAction(cadeauTitre)}
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </form>
  );
}
