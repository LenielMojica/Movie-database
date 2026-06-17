const Button =({text,style,icon,onClick})=>{
return (
    <button className={style}
    onClick={onClick}
    > <p className="flex justify-center gap-2 "> {icon}  {text}</p></button>
)
}
export default Button