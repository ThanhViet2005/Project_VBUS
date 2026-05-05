"use client";
import Link from 'next/link';

export default function ScheduleSection() {
  const rows = [
    { fromTime: '08:00', from: 'SÀI GÒN', toTime: '14:30', to: 'ĐÀ LẠT', price: '350.000đ' },
    { fromTime: '09:15', from: 'HÀ NỘI', toTime: '15:00', to: 'SAPA', price: '420.000đ' },
    { fromTime: '10:30', from: 'ĐÀ NẴNG', toTime: '16:45', to: 'NHA TRANG', price: '300.000đ' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Lịch Trình Ngoại Thành</h2>
          <p className="text-gray-600">Các tuyến xe kết nối từ các trung tâm thành phố lớn đến các tỉnh thành lân cận.</p>
        </div>

        <div className="space-y-6">
          {rows.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold">{r.fromTime}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.from}</div>
                </div>

                <div className="text-gray-300">—</div>

                <div className="text-center">
                  <div className="text-2xl font-bold">{r.toTime}</div>
                  <div className="text-xs text-gray-500 mt-1">{r.to}</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-gray-500">Loại xe</p>
                  <p className="text-blue-600 font-semibold">Limousine 22 Phòng</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">{r.price}</p>
                  <Link href="/nguoidung/datve" className="ml-4 bg-sky-600 text-white px-4 py-2 rounded-lg">Đặt vé</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
