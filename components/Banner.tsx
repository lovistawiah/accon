import FilterPage from "./FilterPage";

/* eslint-disable @next/next/no-img-element */
const Banner = () => {
  return (
    <div className=" w-[95%] h-[350px] mt-3 mb-1 self-center rounded-lg relative">
      <img
        src="/images/banner.jpg"
        alt="background banner"
        className="w-full h-full rounded-lg bg-blend-lighten brightness-[.5] absolute bg-cover"
      />
      <section className="absolute pt-[70px] pl-[20px] text-[2.625rem] text-white leading-[46px]">
        Your perfect
        <div className="text-white pl-[40px]">place to rest</div>
      </section>
      <FilterPage />
    </div>
  );
};
export default Banner;
