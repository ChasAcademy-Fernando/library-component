const Buttons = ({size, color, disabled}) => {
    return ( 
        <>
        {disabled?(
             <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md cursor-default `}>
             disabled button
         </button>
        ):(
        <button className={`${size} ${color} rounded-full p-3 min-w-[100px] m-auto shadow-md hover:bg-slate-400`}>
            not disabled button
        </button>
        )}

        </>
       
     );
}
 
export default Buttons;