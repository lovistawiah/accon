/* eslint-disable @next/next/no-img-element */
import Location from "./svg/Location";
import Love from "./svg/Love";
const Tile = ({ img }: { img: string }) => {
  return (
    <section className="flex gap-[1px] flex-col w-[150px] h-fit pb-[5px]  items-center rounded border-[0.8px] border-solid border-slate-100 m-[10px">
      <img
        src={img}
        alt="house"
        className="p-0 w-full h-[270px]"
      />
      {/* tile info */}
      <section className="flex flex-col items-start rounded-b-[5px] pl-[3px]">
        {/*Price  */}
        <section className="flex self-stretch text-[17.5px] leading-normal font-[600] text-sky-950 ">
          GHC 700
          <span className="text-[14px] font-[400] pl-[2px]">per night</span>
        </section>
        {/* apartment */}
        <section className="flex flex-wrap text-slate-950 tex-[15.5px] leading-tight">
          Two bedroom apartment
        </section>
      </section>
      {/* location */}
      <section className="flex self-stretch gap-[5px] items-center pt-[1px] pb-[1px] pl-[4px] ">
        <Location />
        <section className="line-clamp-1">
          Dome Kwabenya at greater accra
        </section>
      </section>
      {/* apartment desc */}
      <p className="w-full overflow-hidden line-clamp-2 leading-tight text-[14px] pl-[3px]">
        Executive newly built chamber and hall self
        contained.fkldjfdlkfjalkdsfjdlaksfjldksafjlkdsajflkadsdklfajdlkfjladks
      </p>
      {/* button */}
      <section className="flex gap-[13px] items-center self-stretch rounded-b-[5px] justify-center ">
        <Love />
        <button className="w-[120px] rounded h-[28px] text-center leading-normal font-normal text-white bg-sky-800 hover:bg-sky-900 ">
          Book
        </button>
      </section>
    </section>
  );
};
export default Tile;
