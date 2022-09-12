import React from 'react';




const PreBtn =({bgcolor,active})=>{

//    if(corlor === "secondary_light_bg" ) {return "secondary_light_bg"} else { return "primary_bg" }
    return(            
    <button className={`w-44 h-14 rounded-xl 
    ${bgcolor==="secondary_light"?"bg-secondary_light": "bg-primary"}  
    ${active==="secondary"?"active:bg-secondary":"active:bg-primary_active"} font-bold`
    } >
        <h3 className="text-white"> PRE-ORDER NOW</h3>
    </button>
    );  
    
}

 export default PreBtn;