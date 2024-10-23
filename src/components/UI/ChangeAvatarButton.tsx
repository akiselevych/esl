import "../../styles/components/UI/ChangeAvatarButton.scss";
import { Auth } from "../../utils/auth";

type ChangeAvatarButtonProps = {
    connected?: boolean;
};

const ChangeAvatarButton = ({ connected }: ChangeAvatarButtonProps) => {
    const inputClick = () => {
        const input = document.getElementById("avatar_input_X1sS23dSDW");

        if (input) {
            input.click();
        }
    };

    const changeAvatar = (e: any) => {
        const image: any = document.querySelector(".profile-picture");
        const file = e.currentTarget.files[0];
        const codedFile = URL.createObjectURL(e.currentTarget.files[0]);

        if (image) {
            image.src = codedFile;
        }

        const fd = new FormData();

        fd.append("image_file", file);

        Auth.changeUserAvatar(fd);
    };

    return (
        <>
            <input
                onChange={changeAvatar}
                id="avatar_input_X1sS23dSDW"
                accept="image/*"
                type="file"
            />
            <button
                onClick={inputClick}
                className={`change-avatar-button ${
                    connected ? "connected" : ""
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                >
                    <path
                        d="M12.2386 15.1181L10.6011 13.6269C9.79816 12.8955 9.39663 12.5298 8.94158 12.3913C8.54078 12.2693 8.1128 12.2693 7.71205 12.3913C7.257 12.5298 6.85548 12.8955 6.05244 13.6269L3.02708 16.3663M12.2386 15.1181L12.5721 14.8144C13.3751 14.083 13.7767 13.7173 14.2316 13.5788C14.6324 13.4568 15.0604 13.4568 15.4611 13.5788C15.9162 13.7173 16.3177 14.083 17.1208 14.8144L18.3361 15.8724M12.2386 15.1181L15.8273 18.3668M15.7778 7.33333C15.7778 8.4993 14.8326 9.44444 13.6667 9.44444C12.5007 9.44444 11.5556 8.4993 11.5556 7.33333C11.5556 6.1674 12.5007 5.22222 13.6667 5.22222C14.8326 5.22222 15.7778 6.1674 15.7778 7.33333ZM20 10.5C20 15.7467 15.7467 20 10.5 20C5.2533 20 1 15.7467 1 10.5C1 5.2533 5.2533 1 10.5 1C15.7467 1 20 5.2533 20 10.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                Change avatar image
            </button>
        </>
    );
};

export default ChangeAvatarButton;
