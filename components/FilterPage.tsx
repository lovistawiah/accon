const FilterPage = () => {
  return (
    <section className="">
      <section className="w-[100dvw]">
        <div
          className="overflow-auto flex gap-3 w-full justify-start px-3 py-3"
          style={{ scrollbarWidth: "thin" }}
        >
          {/* location */}
          <section className="flex gap-[10px] items-center">
            <section className="w-[69px] flex self-stretch gap-[10px] justify-center flex-col">
              Location:
            </section>
            <input
              type="text"
              name=""
              id=""
              placeholder="location"
              className="w-[214px] pl-[5px] border-[0.7px] border-slate-400 outline-none rounded-[5px] text-[15px] h-[32px]"
            />
          </section>
          {/* apartment */}
          <section className="flex gap-[10px] items-center">
            <section className="">Apartment:</section>
            <select className=" w-[218px] text-center h-[32px] rounded bg-slate-100">
              <option
                value="select apartment"
                className="bg-slate-300 tex-white"
              >
                select apartment
              </option>
            </select>
          </section>
          {/* rooms */}
          <section className="flex gap-[7px] items-center">
            <section className="w-[69px] flex self-stretch justify-center flex-col">
              Rooms:
            </section>
            <input
              type="number"
              defaultValue="1"
              name=""
              id=""
              placeholder="rooms"
              className="w-[214px] pl-[5px] border-[0.7px] border-slate-400 outline-none rounded-[5px] text-[15px] h-[32px]"
            />
          </section>
          {/* price */}
          <section className="flex items-center gap-[10px] pr-3">
            <section className="text-center">Price:</section>
            <section className="flex justify-center items-center gap-[22px]">
              <input
                type="text"
                name=""
                id=""
                placeholder="Min"
                className="w-[58px] outline-none pl-1 border-[0.7px] border-slate-400 rounded h-[32px]"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Max"
                className="w-[58px] outline-none pl-1 border-[0.7px] border-slate-400 rounded h-[32px]"
              />
            </section>
          </section>
        </div>
      </section>
      {/* search button */}
      <section className="flex justify-center items-center pt-3">
        <button className="hover:bg-sky-800 active:bg-sky-950 w-[218px] h-[39px] text-center rounded-[7px] bg-sky-700 text-white">
          Search
        </button>
      </section>
    </section>
  );
};
export default FilterPage;
