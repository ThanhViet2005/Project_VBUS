import BookingBottomStats from "./BookingBottomStats";
import BookingMapInfo from "./BookingMapInfo";

export default function BookingMap() {
  return (
    <div className="relative h-[620px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#C7D0BF] to-[#B7C3AE] border border-[#1E2A45]">
      <BookingMapInfo />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600">
        <path
          d="M100 500 C300 450, 350 250, 520 220 S750 180, 900 80"
          stroke="#59D6E7"
          strokeWidth="4"
          strokeDasharray="10 10"
          fill="none"
        />

        <circle cx="100" cy="500" r="10" fill="#59D6E7" />

        <circle cx="520" cy="220" r="14" fill="#59D6E7" />

        <circle cx="900" cy="80" r="10" fill="#59D6E7" />
      </svg>

      <div className="absolute right-6 top-6 flex flex-col gap-3">
        <button className="w-24 h-14 rounded-2xl bg-[#344150] text-3xl">
          +
        </button>

        <button className="w-24 h-14 rounded-2xl bg-[#344150] text-3xl">
          −
        </button>

        <button className="w-24 h-14 rounded-2xl bg-[#344150] text-xl">
          ⊙
        </button>

        <button className="w-24 h-14 rounded-2xl bg-[#344150] text-sm font-semibold">
          🔴 LIVE
        </button>
      </div>

      <div className="absolute left-6 bottom-6 flex gap-4">
        <BookingBottomStats title="Tốc độ hiện tại" value="62 km/h" />

        <BookingBottomStats title="Thời tiết" value="24°C" />
      </div>

      <div className="absolute right-6 bottom-6">
        <BookingBottomStats title="Quãng đường còn lại" value="145 km" />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#5E6662] text-white px-8 py-3 rounded-full text-sm tracking-[2px]">
        BẢN ĐỒ HÀNH TRÌNH TRỰC TUYẾN
      </div>
    </div>
  );
}
