export type ToastType = "success" | "error";
export type ToastInput = {
  type: ToastType;
  body: React.ReactNode;
};