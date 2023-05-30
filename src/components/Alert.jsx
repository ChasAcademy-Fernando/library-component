import { useState } from "react";

const Alert = ({icon, color,onDismiss}) => {
    const [hideAlert, setHideAlert] = useState(false)
    function onClick() {
        setHideAlert(true)
    }
    return (
        <>
        
        
        {!onDismiss & !hideAlert ? (
        <div className={` flex items-center justify-center text-left space-x-3 ${color} rounded-2xl w-fit mx-auto p-4`}>
          <div className="h-7 w-7">
            {icon}
            </div>
            <p className="font-medium">
              Info alert!
            </p>
          <p>        
            THIS IS AN ALERT!
          </p>
          
        </div>)
        :
        onDismiss & !hideAlert ? (
           <div className={` flex items-center justify-center text-left space-x-3 ${color} rounded-2xl w-fit mx-auto p-4`}>
           <div className="h-7 w-7">
             {icon}
             </div>
             <p className="font-medium">
               Info alert!
             </p>
           <p>        
             
             THIS IS AN ALERT!
           </p>
           <button className=" text-base" onClick={onClick }>
            X
           </button>
         </div>
        )
        : setHideAlert &&(
            <p>Alert dismissed</p>
        )
        }
        </>
     );
}
 
export default Alert;