import type { Metadata } from "next";

import { NotFoundPage } from "../components";

export const metadata: Metadata = {
  title: "Page not found",
};

const NotFound: React.FC = () => {
  return (
    <main>
      <NotFoundPage />
    </main>
  );
};

export default NotFound;
