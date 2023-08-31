// Search.js


import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import useTitle  from "../hooks/useTitle";
import Card from "../components/Card";

export default function Search({ apiPath }) {
  const [searchParam] = useSearchParams();
  const queryTerms = searchParam.get("q");
  const { data: movies } = useFetch(apiPath, queryTerms);

  const pageTitle = useTitle(`Search result for ${queryTerms}`);

  
  if (!movies) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <section className=" py-7">
        <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerms}'` : `Result for '${queryTerms}'`}</p>
      </section>

      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}


