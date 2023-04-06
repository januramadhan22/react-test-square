import { useState } from "react";
import Banner from "../components/content/main/Banner";
import Pagination from "../components/content/main/Pagination";
import Table from "../components/content/main/Table";
import Analytics from "../components/content/right/Analytics";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full p-6">
        <Header />
        <div className="w-full flex gap-6">
          <section className="max-w-[949px] pt-4 space-y-4">
            <Banner />
            <Table />
            <Pagination
              page={page}
              setPage={setPage}
              limit={limit}
              setLimit={setLimit}
            />
          </section>
          <section className="w-full pt-4">
            <Analytics />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
