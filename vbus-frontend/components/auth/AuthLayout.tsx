import React from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    leftSlogan: string;
    leftDescription: string;
    imageSrc: string;
}

const AuthLayout = ({
    children,
    title,
    subtitle,
    leftSlogan,
    leftDescription,
    imageSrc
}: AuthLayoutProps) => {
    return (
        <div className="py-8 md:py-12 flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl min-h-[550px]">
                {/* Left Side: Image & Slogan */}
                <div className="relative hidden md:flex flex-col justify-between p-8 lg:p-10 text-white overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 z-0 scale-105"
                        style={{
                            backgroundImage: `url('${imageSrc}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                    <div className="absolute inset-0 bg-[#005a8e]/80 z-10" />

                    {/* Content */}
                    <div className="relative z-20">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            VBUS
                        </Link>
                        <div className="mt-12 lg:mt-16">
                            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4">
                                {leftSlogan}
                            </h1>
                            <p className="text-sm lg:text-base text-blue-50 max-w-sm opacity-90">
                                {leftDescription}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="relative z-20 flex gap-3 mt-auto">
                        <div className="flex-1 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                            <div className="flex items-center gap-2 mb-0.5">
                                <div className="p-1 bg-blue-500 rounded-md">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-xs transition-all">Tin cậy</span>
                            </div>
                            <p className="text-[10px] text-blue-100 opacity-80">1M+ Chuyến đi an toàn</p>
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                            <div className="flex items-center gap-2 mb-0.5">
                                <div className="p-1 bg-yellow-500 rounded-md">
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="font-semibold text-xs transition-all">Nhanh chóng</span>
                            </div>
                            <p className="text-[10px] text-blue-100 opacity-80">Đặt vé 30s</p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="flex flex-col p-6 lg:p-10 justify-center">
                    <div className="max-w-md w-full mx-auto">
                        <div className="mb-6 lg:mb-8 text-center md:text-left">
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">{title}</h2>
                            <p className="text-gray-500 text-sm lg:text-base">{subtitle}</p>
                        </div>

                        {children}

                        <div className="mt-8 lg:mt-10 flex justify-between text-[10px] lg:text-xs text-gray-400">
                            <span>© 2024 VBUS</span>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-blue-600 transition-colors">ĐIỀU KHOẢN</a>
                                <a href="#" className="hover:text-blue-600 transition-colors">BẢO MẬT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
