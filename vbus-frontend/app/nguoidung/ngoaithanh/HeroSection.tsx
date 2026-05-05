"use client";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">HÀNH TRÌNH DU LỊCH</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
                Hành trình <span className="text-sky-600">Vương</span>
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-1">
                <span className="italic text-sky-600">Tầm</span> <span className="text-gray-900">Khám phá</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Trải nghiệm dịch vụ xe khách cao cấp với mạng lưới tuyến ngoài thành rộng khắp. Chuyến đi an toàn, hiện đại và đáng tin cậy.
            </p>

            <div className="flex gap-4 pt-4">
              <Link href="/nguoidung/datve" className="bg-sky-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-700 transition">
                Đặt vé ngay
              </Link>
              <button className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-lg font-semibold hover:bg-sky-50 transition">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-300 to-sky-400 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/Image/banner/hinhngoaithanh.png" 
                alt="Hành trình vương tầm" 
                className="w-full h-full object-cover"
              />
              {/* Floating card effect */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 w-48">
                <p className="text-gray-600 text-sm">Hàng ngàn hành khách tin tưởng VBUS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
