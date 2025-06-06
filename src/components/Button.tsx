import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <div>
      <button
        type={type}
        className={`flexCenter gap-3 rounded-full border ${variant}`}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
