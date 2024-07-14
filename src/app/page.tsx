import LibFinderForm from "@/components/LibFinderForm";

function Home() {
  return (
    <div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl text-center">
        LibFinder
      </h1>

      <LibFinderForm />
    </div>
  );
}

export default Home;
