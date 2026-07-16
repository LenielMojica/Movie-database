import NavLinks from "./NavLinks"
const DeployableMenu =({isUp, children, style=""})=>{
return (
<div className={`absolute mt-2 top-full left-1/2 -translate-x-1/2 flex-col transition duration-400 ${style} ${isUp ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
>

             <div className=""></div> <div className=" pt-6 border-b border-white flex justify-center"></div>
            <div className="bg-black/95">  {children}
</div>
               </div>
)

}
export default DeployableMenu