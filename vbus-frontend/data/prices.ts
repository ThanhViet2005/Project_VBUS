import { PriceRoute } from "../../frontend/types/prices";

export const priceRoutes: PriceRoute[] = [
  {
    id: 1,
    route: "Hà Nội - Hải Phòng",
    distance: "120km",
    vehicle: "LIMOUSINE",
    price: 250000,
    surcharge: 5,
    status: "Đang áp dụng",
  },
  {
    id: 2,
    route: "TP.HCM - Đà Lạt",
    distance: "310km",
    vehicle: "SLEEPER",
    price: 380000,
    surcharge: 15,
    status: "Đang áp dụng",
  },
  {
    id: 3,
    route: "Hà Nội - Sapa",
    distance: "320km",
    vehicle: "LIMOUSINE",
    price: 450000,
    surcharge: 10,
    status: "Lịch trình tới",
  },
  {
    id: 4,
    route: "Đà Nẵng - Huế",
    distance: "100km",
    vehicle: "SEAT",
    price: 120000,
    surcharge: 0,
    status: "Đang áp dụng",
  },
];
