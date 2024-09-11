import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center" id="error-page">
      <h1 className="text-2xl font-semibold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  );
}