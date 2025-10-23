/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError, isRouteErrorResponse } from "react-router";
import Layout from "./layout";

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="w-full min-h-screen bg-red-50 p-6">
        <h1 className="text-4xl font-bold text-red-700">
          {error.status} {error.statusText}
        </h1>
        <pre className="mt-4 w-full overflow-x-auto bg-red-100 p-4 rounded-lg text-sm font-mono text-red-800">
          {JSON.stringify(error.data, null, 2)}
        </pre>
      </div>
    );
  }

  return (
    <Layout>
      <div className="w-full min-h-screen bg-gray-50 p-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Something went wrong!
        </h1>
        <pre className="mt-4 w-full overflow-x-auto bg-gray-100 p-4 rounded-lg text-sm font-mono text-gray-800">
          {(error && (error as any).message) || "An unexpected error occurred."}
        </pre>
      </div>
    </Layout>
  );
}

export default ErrorBoundary;
