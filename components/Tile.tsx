/* eslint-disable @next/next/no-img-element */
import Location from "./svg/Location";
import Love from "./svg/Love";
const Tile = ({ img }: { img: string }) => {
  return (
    <section className="flex gap-[1px] flex-col w-[250px] h-fit pb-[5px]  items-center rounded border-[0.8px] border-solid border-slate-100 mb-4 hover:shadow hover:cursor-pointer">
      <img src={img} alt="house" className="p-0 w-full h-[270px] rounded-md object-cover" />
      {/* tile info */}
      <section className="flex flex-col rounded-b-[5px] pl-[3px] w-full">
        {/*Price  */}
        <section className="flex self-stretch text-[18.5px] leading-normal py-2 font-[600] text-sky-950 ">
          GHC 700
          <span className="text-[14px] font-[400] pl-[2px]">per night</span>
        </section>
        {/* apartment */}
        <section className="flex flex-wrap text-slate-950 tex-[15.5px] leading-normal pb-1">
          Two bedroom apartment
        </section>
      {/* location */}
      <section className="flex self-stretch gap-[5px] items-center pt-[1px] pb-[1px] leading-tight">
        <Location />
        <section className="line-clamp-2">
          Dome Kwabenya at greater accra
        </section>
      </section>
      {/* apartment desc */}
      <p className="w-full overflow-hidden line-clamp-3 leading-normal text-[14px] pl-[3px]">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eos possimus illo sequi corrupti quod, adipisci recusandae optio explicabo necessitatibus, eaque laborum unde! Aspernatur rem doloremque consectetur repellendus facere in sapiente vitae enim dolor. Tenetur, nesciunt! Voluptatibus nesciunt iusto vero non eaque ab accusantium repellat, odit et velit dolor tempora est impedit dicta repellendus sit quam cumque nisi qui tempore doloremque atque tenetur iure adipisci! Dolores consequatur, alias doloremque accusantium recusandae incidunt, ipsa voluptatum rem, molestiae nostrum mollitia nulla ad assumenda dolor sequi impedit. Cumque itaque vel, impedit vitae, fugit, iste illum debitis laborum ipsum quis nisi magni in officiis ea. Tempore, repellat quisquam provident quia at delectus dolore, in impedit earum excepturi ipsa, suscipit consequuntur odit placeat dolores odio!
      </p>
      {/* button */}
      <section className="flex items-center self-stretch rounded-b-[5px] pl-0 gap-2 pt-1">
        <Love />
        <button className="w-[70%] rounded h-[32px] text-center leading-normal font-normal text-white bg-sky-800 hover:bg-sky-900 ">
          Book
        </button>
      </section>
      </section>
    </section>
  );
};
export default Tile;
