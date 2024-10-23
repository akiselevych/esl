import "../../styles/components/UI/Button.scss";

type ButtonProps = {
    text: string;
    callback: any;
    style?: any;
    classes?: string;
    noUpper?: boolean;
};

const Button = ({
    text,
    callback,
    style,
    classes,
    noUpper = false,
}: ButtonProps) => {
    return (
        <button
            style={style}
            onClick={() => {
                callback();
            }}
            className={`button ${classes || ""}`}
        >
            <p className={`${!noUpper && "upper"} fw-600`}>{text}</p>
        </button>
    );
};

export default Button;
