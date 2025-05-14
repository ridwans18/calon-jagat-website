import { IoIosArrowDown } from "react-icons/io";
function Card_Produk() {
  return (
    <div className="flex gap-2 ">
      <div>
        <input type="checkbox" className="w-4 h-4" />
      </div>
      <div className="min-w-[350px] flex gap-2">
        <img src="" alt="" className="w-20 h-20" />
        <p>Ayam</p>
      </div>
      <div className="min-w-[150px] w-full">
        <div className="flex h-[40px] w-[150px] items-center gap-2  rounded-md overflow-hidden border-secondary border">
          <div className="bg-secondary h-full flex items-center justify-center  min-w-[30px]">
            <p>Rp</p>
          </div>
          <input
            type="text"
            value={"100.000"}
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="min-w-[150px] w-full">
        <input type="text" value={"1"} />
      </div>
      <div className="min-w-[150px] w-full">
        <p>aktif</p>
      </div>
      <div className="min-w-[150px] w-full">
        <div className="flex items-center justify-between p-2 border-2 border-secondary rounded-md">
          <p>atur</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default Card_Produk;
