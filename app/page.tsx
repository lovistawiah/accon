import Apartments from "@/components/Apartments";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
export default function Home() {
  return (
    <section className="flex flex-col m-0 p-0 ">
      <Header />
      <Banner />
      <Apartments />
    </section>
  );
}
