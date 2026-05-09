"use client";

const data = [
  {
    code: "SUMMER24",
    type: "Phần trăm",
    value: "20%",
    status: "Hoạt động",
  },
  {
    code: "WELCOME50",
    type: "Tiền mặt",
    value: "50K",
    status: "Hoạt động",
  },
];

export default function PromotionTable() {
  return (
    <div
      className="
      bg-[#081028]
      border border-cyan-500/10
      rounded-2xl
      overflow-hidden
    "
    >
      <table className="w-full">
        <thead className="bg-cyan-500/10">
          <tr>
            <th className="text-left p-4 text-slate-300">Mã</th>
            <th className="text-left p-4 text-slate-300">Loại</th>
            <th className="text-left p-4 text-slate-300">Giá trị</th>
            <th className="text-left p-4 text-slate-300">Trạng thái</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-cyan-500/10">
              <td className="p-4 text-white">{item.code}</td>
              <td className="p-4 text-slate-300">{item.type}</td>
              <td className="p-4 text-cyan-400">{item.value}</td>
              <td className="p-4">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
