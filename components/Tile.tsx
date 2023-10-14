import Image from "next/legacy/image"
const Tile = () => {
  return (
    <div className="flex w-[200px] h-[435px] flex-col items-start rounded-[5px] border-[0.7px] border-solid border-gray-500 bg-white">
       <Image width={200} height={296}  src='/images/house-2.png' alt="home picture" />
       <section className="flex py-1 px-0 flex-col items-start self-stretch rounded-b-[5px] bg-white">
        {/* price */}
        <section className="text-slate-900 font-[600] leading-normal flex pt-[1px] pr-0 pb-[1px] pl-[5px]">GHC 700.00
        <span className="text-[14px] leading-normal font-[400] pl-[2px]">per night</span>
        </section>
        {/* apartment header */}
        <section className="flex pt-[1px] pr-0 pb-[1px] pl-[5px] flex-wrap text-[15.5px] font-normal flex-1">Two bedroom apartment
        </section>
        {/* location */}
        <section className="flex pt-[1px] pr-0 pb-[1px] pl-[5px]"></section>
       </section>
    </div>
  )
}
export default Tile