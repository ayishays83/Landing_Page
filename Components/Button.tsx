type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

function Button({ type, title, icon, variant }: ButtonProps) {
  return (
    <button
      className={`flexCenter border-2 border-[#0C5BC6] rounded-md ${variant}`}
      type={type}
    >
      {title}
    </button>
  );
}

export default Button;
