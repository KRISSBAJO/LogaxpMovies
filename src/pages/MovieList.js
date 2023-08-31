
import useFetch from "../hooks/useFetch";

import useTitle  from "../hooks/useTitle";

import Card from "../components/Card";



export default function MovieList({apiPath, title}) {
  const { data: movies } = useFetch(apiPath);
  const pageTitle = useTitle(title);

  if (!movies) {
    return <p>Loading...</p>;
  }
  return (
    <main>
        <section className="max-w-7xl mx-auto py-12">
          <div className="flex justify-start flex-wrap other:justify-evenly">
            { movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })
            }
          </div>
        </section>
    </main>
  );
}
