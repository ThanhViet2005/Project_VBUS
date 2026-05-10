export type PromotionStatus = "Hoạt động" | "Sắp hết hạn" | "Hết hạn";

export interface Promotion {
  id: string;
  code: string;
  label: string; // Ví dụ: "MÙA HÈ 2024"
  discountValue: string; // "-20%" hoặc "-50k"
  expiryDate: string;
  usageCount: number;
  maxUsage: number;
  type: string;
  value: string;
  status: PromotionStatus;
  colorTheme: string; // Dùng để map màu sắc CSS
}

export interface SummaryStat {
  label: string;
  value: string;
  subValue?: string;
  status?: string;
}
