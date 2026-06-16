const Button =({text,style,icon,deploy})=>{
return (
    <button className={style}
    onClick={deploy}
    > <p className="flex justify-center gap-2 "> {icon}  {text}</p></button>
)
}
export default Button