import { trips } from "@/data/trips";
import TripPagination from "./TripPagination";
import TripRow from "./TripRow";

export default function TripTable() {
  return (
    <div className="bg-[#10182B] border border-[#1F2B45] rounded-3xl mt-8 overflow-hidden">
      <div className="p-8 border-b border-[#1E2A45] flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Danh Sách Chuyến Xe</h2>

        <div className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
          ● ĐANG TẢI DỮ LIỆU TRỰC TIẾP
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 uppercase text-sm">
            <th className="py-5 px-5">Mã chuyến</th>
            <th className="py-5 px-5">Tuyến đường</th>
            <th className="py-5 px-5">Giờ khởi hành</th>
            <th className="py-5 px-5">Biển số / Tài xế</th>
            <th className="py-5 px-5">Trạng thái</th>
            <th className="py-5 px-5">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {trips.map((item) => (
            <TripRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="p-6">
        <p className="text-gray-500">
          Hiển thị 1 - 10 trong số 1,240 chuyến xe
        </p>

        <TripPagination />
      </div>
    </div>
  );
}
