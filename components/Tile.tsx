import Image from "next/legacy/image"
const Tile = () => {
  return (
    <div className="flex w-[200px] h-[435px] flex-col items-start rounded-[5px] border-[0.7px] border-solid border-gray-500 bg-white">
       <Image width={200} height={296}  src='/images/house-2.png' alt="home picture" />
    </div>
  )
}
export default Tile