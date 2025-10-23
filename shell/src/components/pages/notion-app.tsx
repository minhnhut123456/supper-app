import { lazy, Suspense } from "react";

const NotionRemote = lazy(() => import("notion-app/app"));

function NotionApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NotionRemote />
    </Suspense>
  );
}

export default NotionApp;
