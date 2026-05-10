"use client";

import { Download, PlusCircle } from "lucide-react";
import { useState } from "react";
import { Trip } from "@/types/trips";

interface Props {
  onAddTrip: (trip: Trip) => void;
}

export default function TripHero({ onAddTrip }: Props) {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    code: "",
    from: "",
    to: "",
    road: "",
    time: "",
    plate: "",
    driver: "",
    status: "Sắp tới",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    const newTrip: Trip = {
      id: Date.now(),
      ...form,
    };

    onAddTrip(newTrip);

    // reset form
    setForm({
      code: "",
      from: "",
      to: "",
      road: "",
      time: "",
      plate: "",
      driver: "",
      status: "Sắp tới",
    });

    setShowForm(false);
  };

  return (
    <div className="relative overflow-hidden bg-[#10182B] border border-[#1F2B45] rounded-3xl p-10 mb-8">
      <div className="relative z-10">
        <p className="text-cyan-400 text-2xl mb-3">Quản Lý Chuyến Xe</p>

        <h2 className="text-gray-300 text-xl leading-9 max-w-3xl mb-8">
          Theo dõi và điều phối toàn bộ đội xe VBus theo thời gian thực.
        </h2>

        <div className="flex gap-5 mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold flex items-center gap-3"
          >
            <PlusCircle size={20} />
            THÊM CHUYẾN MỚI
          </button>

          <button className="px-7 py-4 rounded-xl border border-cyan-500 text-cyan-400 flex items-center gap-3">
            <Download size={20} />
            XUẤT BÁO CÁO
          </button>
        </div>

        {showForm && (
          <div className="grid grid-cols-2 gap-4">
            <input
              name="code"
              placeholder="Mã chuyến"
              value={form.code}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="from"
              placeholder="Điểm đi"
              value={form.from}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="to"
              placeholder="Điểm đến"
              value={form.to}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="road"
              placeholder="Tuyến đường"
              value={form.road}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="time"
              placeholder="Giờ khởi hành"
              value={form.time}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="plate"
              placeholder="Biển số"
              value={form.plate}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <input
              name="driver"
              placeholder="Tài xế"
              value={form.driver}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="p-3 rounded-xl bg-[#0B1120] border border-[#1F2B45]"
            >
              <option>Sắp tới</option>
              <option>Đang chạy</option>
              <option>Hoàn thành</option>
            </select>

            <div className="flex justify-center gap-4 mt-4 ">
              <button
                onClick={handleAdd}
                className="px-8 py-4 rounded-xl bg-cyan-500 font-semibold hover:opacity-90 transition"
              >
                THÊM
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-4 ">
              <button
                onClick={() => setShowForm(false)}
                className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 font-semibold hover:bg-gray-800 transition"
              >
                HUỶ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// import { Download, PlusCircle } from "lucide-react";

// export default function TripHero() {
//   return (
//     <div className="relative overflow-hidden bg-[#10182B] border border-[#1F2B45] rounded-3xl p-10 mb-8">
//       <div className="relative z-10">
//         <p className="text-cyan-400 text-2xl mb-3">Quản Lý Chuyến Xe</p>

//         <h2 className="text-gray-300 text-xl leading-9 max-w-3xl mb-8">
//           Theo dõi và điều phối toàn bộ đội xe VBus theo thời gian thực. Đảm bảo
//           hành trình an toàn và đúng giờ.
//         </h2>

//         <div className="flex gap-5">
//           <button className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold flex items-center gap-3">
//             <PlusCircle size={20} />
//             THÊM CHUYẾN MỚI
//           </button>

//           <button className="px-7 py-4 rounded-xl border border-cyan-500 text-cyan-400 flex items-center gap-3">
//             <Download size={20} />
//             XUẤT BÁO CÁO
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
