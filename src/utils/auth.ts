import axios from "axios";
import { localStorageController } from "./localStorageController";
export class Auth {
    static register(data: any, setError: any, navigate: any) {
        axios
            .post(
                `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/register/`,
                { ...data }
            )
            .then(async (res) => {
                await localStorageController.setAccessToken(
                    res.data.access_token
                );
                await localStorageController.setRefreshToken(
                    res.data.refresh_token
                );

                navigate("/profile");
            })
            .catch((err) => {
                setError(
                    err.response.data.error || err.response.data.detail?.[0].msg
                );
            });
    }

    static login(data: any, setError: any, navigate: any) {
        axios
            .post(
                `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/login/`,
                { ...data }
            )
            .then(async (res) => {
                await localStorageController.setAccessToken(
                    res.data.access_token
                );
                await localStorageController.setRefreshToken(
                    res.data.refresh_token
                );

                navigate("/profile");
            })
            .catch((err) => {
                setError(err.response.data.error);
            });
    }

    static async getUser() {
        const token = await localStorageController.getAccessToken();
        console.log(token);
        let user = "";

        const headers: any = {
            Authorization: `Bearer ${token}`,
        };

        if (token && headers) {
            await axios
                .get(
                    `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/profile/`,
                    { headers }
                )
                .then((res) => {
                    user = res.data;
                });

            return await user;
        }
    }

    static async changeUserAvatar(data: any) {
        const token = await localStorageController.getAccessToken();
        console.log(token);
        let user = "";

        const headers: any = {
            Authorization: `Bearer ${token}`,
        };

        if (token && headers) {
            await axios
                .put(
                    `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/profile/change_cover/`,
                    data,
                    { headers }
                )
                .then((res) => {
                    user = res.data;
                });

            return await user;
        }
    }

    static async checkIfUserLoggedIn(navigate?: any) {
        const token = await localStorageController.getAccessToken();
        let isLogged;

        const data = {
            token: token || "",
        };

        await axios
            .post(
                `${process.env.REACT_APP_BACKEND_DOMAIN}/api/v1/auth/token_verify/`,
                data
            )
            .then((res) => {
                if (navigate) {
                    if (res.data === false) {
                        navigate("/register");
                    }
                }
                isLogged = res.data;
            });

        return isLogged;
    }
}
