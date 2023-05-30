const Badges = ({size, color, icon, children}) => {
    return ( 
    <div className={`${size} ${color} flex w-fit p-2 items-center rounded-xl`}>
        <div className=" h-5 w-5 ">
            {icon}
        </div>
        {children}
    </div>
     );
}
 
export default Badges;