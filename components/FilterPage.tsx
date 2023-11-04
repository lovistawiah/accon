const FilterPage = () => {
  return (
    <section className="absolute w-[90%] h-fit pb-2 top-[70%] left-[18px] flex flex-col rounded-lg bg-white">
      {/* location */}
      <section className="flex gap-[10px] flex-col w-full py-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="location"
          className="w-[95%] place-self-center pl-[5px] border-[0.7px] border-slate-400 outline-none rounded-[5px] text-[15px] h-[40px]"
        />
      </section>

      {/* apartment */}
      <section className="flex gap-[10px] justify-center">
        <select className=" w-[95%]  h-[40px] pl-1 rounded border-[0.7px] border-slate-400 bg-white text-slate-400">
          <option value="select apartment" className="bg-slate-300 tex-white">
            select apartment
          </option>
        </select>
      </section>
      {/* rooms */}
      <section className="flex gap-[10px] flex-col w-full py-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="number of rooms"
          className="w-[95%] place-self-center pl-[5px] border-[0.7px] border-slate-400 outline-none rounded-[5px] text-[15px] h-[40px]"
        />
      </section>
      {/* price */}
      <section className="flex justify-center gap-[10px] items-center w-[90%] place-self-center ">
        <section className="text-base text-slate-800 w-[30%]">Price</section>
        <section className="flex justify-between items-center w-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Min"
            className="w-[30%] outline-none pl-1 border-[0.7px] border-slate-400 rounded h-[40px]"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Max"
            className="w-[30%] outline-none pl-1 border-[0.7px] border-slate-400 rounded h-[40px]"
          />
        </section>
      </section>
      <section className="flex justify-center items-center pt-3">
        <button className="hover:bg-sky-800 active:bg-sky-950 w-[70%] h-[39px] text-center rounded-[7px] bg-sky-700 text-white">
          Search
        </button>
      </section>
    </section>
  );
};
export default FilterPage;
