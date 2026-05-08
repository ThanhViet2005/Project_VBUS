"use client";
import React from 'react';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthInput from '@/components/auth/AuthInput';

export default function RegisterPage() {
    return (
        <AuthLayout
            title="Tạo tài khoản mới"
            subtitle="Nhập thông tin bên dưới để đăng ký thành viên."
            leftSlogan="Bắt đầu hành trình thông minh của bạn."
            leftDescription="Tham gia cộng đồng VBUS để trải nghiệm dịch vụ di chuyển cao cấp, tiện lợi và hiện đại nhất Việt Nam."
            imageSrc="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2000&auto=format&fit=crop"
        >
            <form onSubmit={(e) => e.preventDefault()}>
                <AuthInput
                    label="Họ và tên"
                    placeholder="Nguyễn Văn A"
                    type="text"
                    icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AuthInput
                        label="Email"
                        placeholder="example@gmail.com"
                        type="email"
                        icon={
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        }
                    />
                    <AuthInput
                        label="Số điện thoại"
                        placeholder="090 123 4567"
                        type="tel"
                        icon={
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        }
                    />
                </div>

                <AuthInput
                    label="Mật khẩu"
                    placeholder="••••••••"
                    type="password"
                    icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    }
                />

                <AuthInput
                    label="Xác nhận mật khẩu"
                    placeholder="••••••••"
                    type="password"
                    icon={
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    }
                />

                <button className="w-full bg-[#006399] hover:bg-[#004e7a] text-white font-bold py-3 lg:py-4 rounded-xl lg:rounded-2xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-2 lg:mt-4 mb-4 lg:mb-6 text-sm lg:text-base">
                    Đăng ký tài khoản
                </button>
            </form>

            <div className="relative flex items-center mb-4 lg:mb-6">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Hoặc tiếp tục với</span>
                <div className="flex-grow border-t border-gray-100"></div>
            </div>

            {/* Social Login */}
            <button className="w-full flex items-center justify-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 py-3 lg:py-4 rounded-xl lg:rounded-2xl font-semibold text-gray-700 transition-all mb-6 lg:mb-8 text-xs lg:text-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Đăng ký nhanh với Google
            </button>

            <p className="text-center text-gray-500 text-sm">
                Đã có tài khoản? <Link href="/auth/dang-nhap" className="text-blue-600 font-bold hover:underline">Đăng nhập ngay</Link>
            </p>
        </AuthLayout>
    );
}
