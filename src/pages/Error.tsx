import { useRouteError, isRouteErrorResponse } from "react-router";
import { Link } from "react-router-dom";

export const Error: React.FC = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <main className="grid min-h-[100vh] place-items-center">
          <div className="text-center">
            <p className="text-9xl">404</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              page not found
            </h2>
            <p className="mt-6 text-lg leading-7">Sorry we couldn`t find the page you`re looking for.</p>
            <div className="mt-10">
              <Link to='/' className="btn btn-secondary">
                go back home
              </Link>
            </div>
          </div>
        </main>
      );
    }
  }

  return (
    <main className="grid min-h-[100vh] place-items-center">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};
