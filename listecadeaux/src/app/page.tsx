export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:text-6xl text-4xl my-6 font-semibold">
        <h1 className="font-title uppercase">Apps de Guillaume de Sabran</h1>
      </div>
      <main className="grid grid-flow-row grid-cols-3 gap-8 my-20">
        <div className="border-gray-300 border-[1px] sm:text-2xl text-base rounded-sm p-4 py-12 text-center bg-gray-100">
          Ma Liste de Cadeaux
        </div>
      </main>
    </div>
  );
}
