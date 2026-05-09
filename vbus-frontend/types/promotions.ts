export type PromotionStatus = "active" | "expiring" | "expired";

export interface Promotion {
  id: string;
  code: string;
  label: string; // Ví dụ: "MÙA HÈ 2024"
  discountValue: string; // "-20%" hoặc "-50k"
  expiryDate: string;
  usageCount: number;
  maxUsage: number;
  type: "percentage" | "fixed";
  colorTheme: string; // Dùng để map màu sắc CSS
}

export interface SummaryStat {
  label: string;
  value: string;
  subValue?: string;
  status?: string;
}
