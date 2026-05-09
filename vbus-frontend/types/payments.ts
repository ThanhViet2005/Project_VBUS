export interface Payment {
  id: number;
  code: string;
  customer: string;
  email: string;
  method: string;
  amount: string;
  time: string;
  status: string;
  initials: string;
}
