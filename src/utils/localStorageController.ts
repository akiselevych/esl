import axios from "axios";

export class localStorageController {
    static async setAccessToken(token: string) {
        localStorage.setItem("accessToken", token);
    }

    static async setRefreshToken(token: string) {
        localStorage.setItem("refreshToken", token);
    }

    static async getAccessToken() {
        const token = localStorage.getItem("accessToken");

        try {
            if (token) {
                return token;
            } else {
                return await this.getAccessFromRefresh();
            }
        } catch (err) {
            console.log(err);
        }
    }

    static async getRefreshToken() {
        const token = localStorage.getItem("refreshToken");

        return token;
    }

    static async getAccessFromRefresh() {
        const token = await this.getRefreshToken();

        if (token) {
            const data = {
                token: token,
            };

            await axios
                .post(
                    `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/access_token_from_refresh/`,
                    data
                )
                .then(async (res) => {
                    await this.setAccessToken(res.data.access_token);
                    await this.setRefreshToken(res.data.refresh_token);
                    return await res.data.access_token;
                });
        } else {
            return "";
        }
    }
}
