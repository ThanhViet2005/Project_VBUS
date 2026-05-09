import { payments } from "@/data/payments";
import PaymentPagination from "./PaymentPagination";
import PaymentRow from "./PaymentRow";

export default function PaymentTable() {
  return (
    <div className="bg-[#111A2D] border border-[#1A2740] rounded-3xl p-5">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-xs border-b border-[#1A2740]">
            <th className="pb-6">Mã Giao Dịch</th>
            <th className="pb-6">Khách hàng</th>
            <th className="pb-6">Phương thức</th>
            <th className="pb-6">Số tiền</th>
            <th className="pb-6">Thời gian</th>
            <th className="pb-6">Trạng thái</th>
            <th className="pb-6">Thao tác</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((item) => (
            <PaymentRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-8">
        <p className="text-gray-500 text-lg">
          Hiển thị 1 - 10 trên tổng số 1,245 giao dịch
        </p>

        <PaymentPagination />
      </div>
    </div>
  );
}
