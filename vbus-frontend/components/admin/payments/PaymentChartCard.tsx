export default function PaymentChartCard() {
  return (
    <div className="w-[340px] bg-[#111A2D] border border-[#1A2740] rounded-3xl overflow-hidden relative">
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 p-7 h-full flex flex-col justify-end">
        <h3 className="text-xl font-semibold mb-2">Biểu đồ xu hướng</h3>

        <p className="text-gray-400 text-xs">
          Giao dịch tăng trưởng 18% so với tuần trước
        </p>
      </div>
    </div>
  );
}
