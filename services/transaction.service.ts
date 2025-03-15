import { TransactionType } from "@/app/dashboard/add-transaction/page";
import { axiosClient } from "./axios.service";
import helper from "@/lib/helper";

class TransactionService {
  async addTransaction(transaction: TransactionType) {
    try {
      const response = await axiosClient.post("/api/transactions", {...transaction, userId: helper.getLocalStorage("userId")});
      return helper.successResponse(response.data);
    } catch (error: any) {
      return helper.errorResponse(error);
    }
  }

  async getTransactions() {
    try {
      const response = await axiosClient.get("/api/transactions");
      return helper.successResponse(response.data);
    } catch (error: any) {
      return helper.errorResponse(error);
    }
  }
}

const transactionService = new TransactionService();

export default transactionService;