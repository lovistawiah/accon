import Header from "@/components/Header"
export default function Home() {
  return (
  <div>
    <Header />
    {/* filter holder */}
  <section className="flex w-[377px] h-[90vh] px-0 py-[10px] flex-col justify-center items-center gap-[10px] shrink-0">

    {/* filter section or page */}
    <section className=" border border-solid border-slate-400 flex py-[26px] px-[7px] flex-col items-center gap-5 rounded-lg ">

    {/* location filter */}
    <section className="flex justify-between items-center self-stretch w-full">
      {/* location text holder */}
      <section className="text-black text-[16px]
      font-normal leading-normal pr-2">Location</section>
      <input className="w-[214px] border-[0.7px] border-solid border-sky-900 rounded-[5px] outline-none py-1 pl-2" placeholder="Location"/>
    </section>
    {/* apartment filter */}
    <section className="flex py-[6px] items-center gap-[10px]">

      {/* apartment text holder */}
      <section className="text-black font-normal leading-normal py-[6px]">Apartment</section>

      <section className="flex self-stretch items-center justify-between pt-[10px] pr-[12px] pb-[4px] pl-[12px]">
        <select name="" id="" className="font-light leading-normal text-[16px] rounded-lg px-[12px] h-8 flex items-center pb-[5px] cursor-pointer w-[214px]">
          <option value="">select apartment</option>
        </select>
      </section>
    </section>
    {/* number of rooms */}
    <section className="flex py-[6px] items-center gap-[10px] w-full">
      {/* number of room text */}
      <section className=" font-normal leading-normal text-[16px]">Number of rooms
      </section>
      <input type="number" className="w-[160px] rounded-[5px] flex justify-end items-center gap-[10px] border-[0.7px] border-solid border-sky-900 outline-none pl-1" defaultValue='1'/>
    </section>
    {/* price */}
    <section className="flex py-[6px] items-center self-stretch justify-between">
    <section className="font-normal leading-normal text-black">Price</section>
    <section className="flex items-center justify-center gap-[22px]">

      <input type="text" className="w-[80px] py-[5px] px-[11px] text-sky-900 text-[16px] leading-normal font-normal border-[0.7px] rounded-[5px] outline-none border-solid border-sky-900" placeholder="Min" />

      <input type="text" className="w-[80px] py-[5px] px-[11px] text-sky-900 text-[16px] leading-normal font-normal border-[0.7px] rounded-[5px] outline-none border-solid border-sky-900" placeholder="Max" />
    </section>
    </section>
    <button className="w-[248px] h-[39px] rounded-[7px] bg-sky-800 text-white font-[18px]leading-normal hover:bg-sky-700 active:bg-sky-900">Search</button>
    </section>
  </section>
  

  </div>
  )
}
