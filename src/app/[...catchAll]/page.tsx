import type { Metadata } from "next";

import { NotFoundPage } from "../../components";

export const metadata: Metadata = {
  title: "Not found",
};

const CatchAllPage: React.FC = () => {
  return (
    <main>
      <NotFoundPage />
    </main>
  );
};

export default CatchAllPage;
