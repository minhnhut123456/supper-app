import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Welcome to Our Super App
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          Explore two powerful apps: <strong>Notion</strong> for productivity
          and <strong>Chat App</strong> for team communication.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" asChild>
            <Link to="/notion-app">Go to Notion</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link to="/notion-app">Go to Chat App</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
