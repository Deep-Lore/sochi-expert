interface IButtonProps {
  children: string,
  onClick?: () => void
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      className="w-45 h-10 text-primary-blue bg-primary-orange/100 text-text-black rounded-[1px] cursor-pointer transition-colors
      hover:bg-primary-orange/80"
      onClick={onClick}
    >
      {children}
    </button>
  )
}