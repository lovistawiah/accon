import Apartments from "@/components/Apartments";
import Banner from "@/components/Banner";
import FilterPage from "@/components/FilterPage";
import Header from "@/components/Header";
import Tile from "@/components/Tile";
export default function Home() {
  return (
    <section className="flex flex-col m-0 p-0 overflow-hidden">
      <Header />
      <Banner />
      <FilterPage />
      <Apartments />
    </section>
  );
}
