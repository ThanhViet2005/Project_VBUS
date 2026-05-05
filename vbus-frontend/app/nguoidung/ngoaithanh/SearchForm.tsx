"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchFormData {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  tripType: 'oneWay' | 'roundTrip';
}

export default function SearchForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<SearchFormData>({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    tripType: 'oneWay'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Search submitted:', formData);
    
    // Navigate to trip detail page
    router.push('/nguoidung/ngoaithanh/ctngoaithanh');
  };

  return (
    <section className="bg-white py-8 -mt-20 relative z-10 mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl p-6 md:p-8">
          {/* Trip Type Selector */}
          <div className="flex gap-4 mb-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="oneWay"
                checked={formData.tripType === 'oneWay'}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <span className="text-gray-700 font-medium">Một chiều</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="roundTrip"
                checked={formData.tripType === 'roundTrip'}
                onChange={handleInputChange}
                className="w-4 h-4"
              />
              <span className="text-gray-700 font-medium">Khứ hồi</span>
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* From */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Điểm đi</label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                placeholder="Sài Gòn"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
              />
            </div>

            {/* To */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Điểm đến</label>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                placeholder="Đà Lạt"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Depart Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày đi</label>
              <input
                type="date"
                name="departDate"
                value={formData.departDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Return Date (show only for round trip) */}
            {formData.tripType === 'roundTrip' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày về</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-700 transition flex items-center justify-center gap-2"
              >
                🔍 Tìm chuyến
              </button>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
              ✓ Tìm kiếm thành công! Đang tải kết quả...
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
