import { useState } from "react";
import Banner from "../components/content/main/Banner";
import Pagination from "../components/content/main/Pagination";
import Table from "../components/content/main/Table";
import Analytics from "../components/content/right/Analytics";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getDataCustomers, getLength } from "../utils/customerDatas";

function App() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  let totalPage = Math.ceil(getLength() / limit);

  const handleChangePage = (value) => {
    value === "Previous" && page !== 1
      ? setPage(page - 1)
      : value === "Next" && page !== totalPage
      ? setPage(page + 1)
      : setPage(value);
  };

  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full p-6">
        <Header />
        <div className="w-full flex gap-6">
          <section className="max-w-[949px] pt-4 space-y-4">
            <Banner />
            <Table customers={getDataCustomers(page, limit)} />
            <Pagination
              page={page}
              limit={limit}
              totalPage={totalPage}
              siblings={1}
              onChangePage={handleChangePage}
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
