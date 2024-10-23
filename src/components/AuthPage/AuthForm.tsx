import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import "../../styles/components/AuthPage/AuthForm.scss";
import { Auth } from "../../utils/auth";
import Button from "../UI/Button";

const AuthForm = () => {
    const [isRegister, setIsRegister] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { register, reset, handleSubmit } = useForm();

    useEffect(() => {
        setShowPass(false);
        reset();
        setError("");

        const inputs = document.querySelectorAll(
            ".auth-form-input-container input"
        );

        inputs.forEach((input: any) => {
            if (input) {
                input.value = "";
            }
        });
    }, [isRegister]);

    const togglePassShow = () => {
        setShowPass(!showPass);
    };

    const signUp = async (data: any) => {
        setError("");

        if (data.password !== data.password_confirm) {
            setError("Confirmation password doesn't match password.");
            return;
        }

        await Auth.register(data, setError, navigate);
        return;
    };

    const signIn = async (data: any) => {
        setError("");

        await Auth.login(data, setError, navigate);
        return;
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <div className="auth-form-options">
                    <p
                        onClick={() => setIsRegister(true)}
                        className={`fs-16 auth-form-option ${
                            isRegister ? "active" : ""
                        }`}
                    >
                        Register
                    </p>
                    <p
                        onClick={() => setIsRegister(false)}
                        className={`fs-16 auth-form-option ${
                            !isRegister ? "active" : ""
                        }`}
                    >
                        Sign in!
                    </p>
                </div>

                <div className="auth-form-inputs">
                    {isRegister ? (
                        <>
                            <label className="auth-form-input">
                                Nickname
                                <div className="auth-form-input-container">
                                    <input
                                        {...register("username", {
                                            required: true,
                                        })}
                                        placeholder="Example"
                                    />
                                </div>
                            </label>

                            <label className="auth-form-input">
                                Password
                                <div className="auth-form-input-container">
                                    <input
                                        {...register("password", {
                                            required: true,
                                        })}
                                        type={!showPass ? "password" : "text"}
                                        placeholder="We won't tell anyone"
                                    />
                                    <div
                                        onClick={togglePassShow}
                                        className="auth-form-show-pass"
                                    >
                                        {!showPass ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                viewBox="0 0 704 668"
                                                fill="none"
                                            >
                                                <path
                                                    d="M51.9675 34L651.967 634M280.11 264.455C262.689 282.453 251.967 306.973 251.967 334C251.967 389.23 296.74 434 351.967 434C379.383 434 404.223 422.967 422.287 405.1M168.634 155.572C105.324 197.345 57.1018 260.131 33.9011 334C76.3761 469.237 202.72 567.333 351.973 567.333C418.27 567.333 480.047 547.98 531.96 514.613M318.633 102.313C329.6 101.224 340.723 100.667 351.973 100.667C501.23 100.667 627.573 198.764 670.047 334C660.69 363.8 647.257 391.793 630.407 417.333"
                                                    stroke="black"
                                                    strokeWidth="66.6667"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                viewBox="0 0 704 534"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M352.074 0.666748C187.843 0.666748 48.9126 108.614 2.19846 257.345C0.156185 263.847 0.156178 270.819 2.19843 277.322C48.9118 426.052 187.843 534 352.074 534C516.303 534 655.234 426.052 701.949 277.322C703.991 270.82 703.991 263.847 701.949 257.345C655.234 108.615 516.303 0.666748 352.074 0.666748ZM352.074 467.333C221.495 467.333 110.325 383.885 69.1342 267.333C110.325 150.781 221.495 67.3334 352.074 67.3334C482.651 67.3334 593.821 150.782 635.013 267.333C593.821 383.885 482.651 467.333 352.074 467.333ZM285.392 267.333C285.392 230.513 315.24 200.667 352.057 200.667C388.878 200.667 418.724 230.513 418.724 267.333C418.724 304.154 388.878 334 352.057 334C315.24 334 285.392 304.154 285.392 267.333ZM352.057 134C278.422 134 218.725 193.694 218.725 267.333C218.725 340.973 278.422 400.667 352.057 400.667C425.697 400.667 485.391 340.973 485.391 267.333C485.391 193.694 425.697 134 352.057 134Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </label>

                            <label className="auth-form-input">
                                Confirm Password
                                <div className="auth-form-input-container">
                                    <input
                                        {...register("password_confirm", {
                                            required: true,
                                        })}
                                        type={!showPass ? "password" : "text"}
                                        placeholder="We won't tell anyone"
                                    />
                                </div>
                            </label>

                            <p className="auth-form-error fs-14">{error}</p>

                            <Button
                                text="Create Account"
                                callback={handleSubmit(signUp)}
                                style={{ width: "100%" }}
                                classes="auth-button"
                            />
                        </>
                    ) : (
                        <>
                            <label className="auth-form-input">
                                Nickname
                                <div className="auth-form-input-container">
                                    <input
                                        {...register("username", {
                                            required: true,
                                        })}
                                        placeholder="Example"
                                    />
                                </div>
                            </label>

                            <label className="auth-form-input">
                                Password
                                <div className="auth-form-input-container">
                                    <input
                                        {...register("password", {
                                            required: true,
                                        })}
                                        type={!showPass ? "password" : "text"}
                                        placeholder="We won't tell anyone"
                                    />
                                    <div
                                        onClick={togglePassShow}
                                        className="auth-form-show-pass"
                                    >
                                        {!showPass ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                viewBox="0 0 704 668"
                                                fill="none"
                                            >
                                                <path
                                                    d="M51.9675 34L651.967 634M280.11 264.455C262.689 282.453 251.967 306.973 251.967 334C251.967 389.23 296.74 434 351.967 434C379.383 434 404.223 422.967 422.287 405.1M168.634 155.572C105.324 197.345 57.1018 260.131 33.9011 334C76.3761 469.237 202.72 567.333 351.973 567.333C418.27 567.333 480.047 547.98 531.96 514.613M318.633 102.313C329.6 101.224 340.723 100.667 351.973 100.667C501.23 100.667 627.573 198.764 670.047 334C660.69 363.8 647.257 391.793 630.407 417.333"
                                                    stroke="black"
                                                    strokeWidth="66.6667"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                viewBox="0 0 704 534"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M352.074 0.666748C187.843 0.666748 48.9126 108.614 2.19846 257.345C0.156185 263.847 0.156178 270.819 2.19843 277.322C48.9118 426.052 187.843 534 352.074 534C516.303 534 655.234 426.052 701.949 277.322C703.991 270.82 703.991 263.847 701.949 257.345C655.234 108.615 516.303 0.666748 352.074 0.666748ZM352.074 467.333C221.495 467.333 110.325 383.885 69.1342 267.333C110.325 150.781 221.495 67.3334 352.074 67.3334C482.651 67.3334 593.821 150.782 635.013 267.333C593.821 383.885 482.651 467.333 352.074 467.333ZM285.392 267.333C285.392 230.513 315.24 200.667 352.057 200.667C388.878 200.667 418.724 230.513 418.724 267.333C418.724 304.154 388.878 334 352.057 334C315.24 334 285.392 304.154 285.392 267.333ZM352.057 134C278.422 134 218.725 193.694 218.725 267.333C218.725 340.973 278.422 400.667 352.057 400.667C425.697 400.667 485.391 340.973 485.391 267.333C485.391 193.694 425.697 134 352.057 134Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </div>
                            </label>

                            <p className="auth-form-error">{error}</p>

                            <Button
                                text="Sign In"
                                callback={handleSubmit(signIn)}
                                style={{ width: "100%" }}
                                classes="auth-button"
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
