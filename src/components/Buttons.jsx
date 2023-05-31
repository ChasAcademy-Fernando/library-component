const Buttons = ({size, color, disabled,children, onClickfunc}) => {
    return ( 
        <>
        {disabled?(
            <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md cursor-default `}>
             {children}
         </button>
        ): !disabled & !onClickfunc ?(
        <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md hover:bg-slate-400`}>
            {children}
        </button>
        ): 
        <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md hover:bg-slate-400`} onClick={onClickfunc}>
        {children}
        </button>}

        </>
       
     );
}
 
export default Buttons;