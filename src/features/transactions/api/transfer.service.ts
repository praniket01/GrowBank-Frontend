import { apiClient } from "@/lib/axios";

const transferService = {
    getHistory(page = 1 , limit = 1){
        return apiClient.post(`transaction/get-history?page=${page}&limit=${limit}`)
    }
}

export default transferService;