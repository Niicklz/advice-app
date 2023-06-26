import React, { useEffect, useRef, useState } from "react";
import { getAdvice } from "../helpers/getPhrase";
import { copyAdvice } from "../helpers/copyAdvice";

export const AdviceGeneratorApp = () => {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState("")
  const h2Ref = useRef()
  const adviceInfo = async () => {
    try {
      if(isLoading) return
      setIsLoading(true)
      
      const getInfoAdvice = await getAdvice();
      
      setAdvice(getInfoAdvice);
      
    }
    catch {
      console.warn("error");
    }
    finally {
      setIsLoading(false)
    }
   
  };
 

  useEffect(() => {
    adviceInfo();
    
  }, []);

  return (
    
    <div className="main-container">
      {isLoading && (
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      )}     
      <div className="card">
      
        
     
        <p>ADVICE#{advice.id}</p>
        <h2 ref={h2Ref}>{advice.advice}</h2>
        <div className="separator"></div>
        <button className="reload" disabled={isLoading} style={isLoading?{opacity:0.5, }:{opacity:1,  }} onClick={adviceInfo}></button>
        <button className="copy-btn notranslate" onClick={()=> {copyAdvice(h2Ref.current.textContent)}}>
          <span className="material-symbols-outlined notranslate">file_copy</span>
        </button>
      </div> 
      
      
    </div>
  );
};
