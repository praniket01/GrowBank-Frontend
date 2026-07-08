import { apiClient } from "@/lib/axios";
import { SearchUserResponse } from "../types/user.types";
import { TransferRequest,TransferResponse } from "../types/transfer.types";

class TransferService {
    SearchUsers(query : string){
        return apiClient.get<SearchUserResponse>(
            `user/search?query=${encodeURIComponent(query)}`
        );
    }

    transfer(data : TransferRequest){
        return apiClient.post<TransferResponse>(
            '/transaction',
            data
        )
    }
}

export default new TransferService();