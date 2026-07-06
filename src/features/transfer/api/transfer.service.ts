import { apiClient } from "@/lib/axios";
import { SearchUserResponse } from "../types/user.types";

class TransferService {
    SearchUsers(query : string){
        return apiClient.get<SearchUserResponse>(
            `user/search?query=${encodeURIComponent(query)}`
        );
    }
}

export default new TransferService();