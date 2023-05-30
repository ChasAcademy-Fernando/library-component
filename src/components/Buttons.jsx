const Buttons = ({size, color, disabled,children}) => {
    return ( 
        <>
        {disabled?(
            <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md cursor-default `}>
             {children}
         </button>
        ):(
        <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md hover:bg-slate-400`}>
            {children}
        </button>
        )}

        </>
       
     );
}
 
export default Buttons;