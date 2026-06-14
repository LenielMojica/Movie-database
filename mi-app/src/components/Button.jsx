const Button =({text,style,icon})=>{
return (
    <button className={style}  > <p className="flex justify-center gap-2 "> {icon}  {text}</p></button>
)
}
export default Button