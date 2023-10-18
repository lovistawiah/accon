import Apartments from "@/components/Apartments";
import FilterPage from "@/components/FilterPage";
import Header from "@/components/Header";
import Tile from "@/components/Tile";
export default function Home() {
  return (
    <section className="flex flex-col w-[100dvw] h-[100dvh]">
      <Header />
      <FilterPage />
      <Apartments />
    </section>
  );
}
