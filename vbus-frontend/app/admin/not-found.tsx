import Link from 'next/link';

export default function AdminNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#020817] px-4 text-white">
            <h1 className="text-9xl font-bold text-cyan-900/30">404</h1>
            <p className="text-2xl font-semibold text-cyan-400 mt-4">Không tìm thấy trang quản trị</p>
            <p className="text-slate-500 mt-2 text-center max-w-md">
                Trang bạn đang tìm kiếm không tồn tại hoặc bạn không có quyền truy cập vào khu vực này.
            </p>
            <Link href="/" className="mt-8 px-6 py-3 bg-cyan-600 text-white rounded-xl font-semibold hover:bg-cyan-700 transition-colors">
                Quay lại trang chủ
            </Link>
        </div>
    );
}
