// const data = [
//     {
//       code: "SUMMER24",
//       type: "Phần trăm",
//       value: "20%",
//       status: "Hoạt động",
//     },
//     {
//       code: "WELCOME50",
//       type: "Tiền mặt",
//       value: "50K",
//       status: "Hoạt động",
//     },
//   ];
import { Promotion } from "@/types/promotions";

export const promotions: Promotion[] = [
  {
    id: "1",
    code: "SUMMER24",
    label: "MÙA HÈ 2024",
    discountValue: "-20%",
    expiryDate: "30/08/2025",
    usageCount: 120,
    maxUsage: 500,
    type: "Phần trăm",
    value: "20%",
    status: "Sắp hết hạn",
    colorTheme: "cyan",
  },

  {
    id: "2",
    code: "WELCOME50",
    label: "CHÀO MỪNG",
    discountValue: "-50K",
    expiryDate: "15/09/2025",
    usageCount: 50,
    maxUsage: 300,
    type: "Tiền mặt",
    value: "50K",
    status: "Hoạt động",
    colorTheme: "purple",
  },
];
