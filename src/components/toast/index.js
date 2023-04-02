import { toast } from "react-toastify";

export const toastMessage = {
  error: (message) => {
    toast.error(message);
    toast.clearWaitingQueue();
  },
  success: (message) => {
    toast.success(message);
    toast.clearWaitingQueue();
  },
  info: (message) => {
    toast.info(message);
    toast.clearWaitingQueue();
  },
};
