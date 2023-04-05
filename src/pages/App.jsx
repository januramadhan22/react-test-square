import Banner from "../components/content/main/Banner";
import Table from "../components/content/main/Table";
import Analytics from "../components/content/right/Analytics";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full p-6">
        <Header />
        <div className="w-full flex gap-4">
          <section className="max-w-[949px] pt-4">
            <Banner />
            <Table />
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
