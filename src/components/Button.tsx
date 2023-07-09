interface BtnProps {
  children: React.ReactNode;
  onClick: () => void;
  widthFull?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  outlined?: boolean;
}

export default function Button({
  widthFull,
  loading,
  disabled,
  onClick,
  className,
  children,
  outlined,
}: BtnProps) {
  const width = widthFull ? "w-full flex-1" : "";
  const btn_style = outlined
    ? " border-[1px] border-[#009bc1] text-[#009bc1]"
    : " bg-[#009bc1] text-white  ";
  return (
    <button
      onClick={onClick}
      className={
        width +
        btn_style +
        " text-2xl font-medium  relative py-5 px-10 rounded-lg duration-200 disabled:opacity-60 disabled:cursor-not-allowed " +
        className
      }
    >
      {children}
    </button>
  );
}
