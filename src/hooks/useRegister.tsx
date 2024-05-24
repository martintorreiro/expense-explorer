import { useState } from "react";
import { registerService } from "@/service/registerService";

export const useRegister = () => {
 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const register = async (userName:string, email:string, password:string, onSubmitOk:()=>void) => {
    
    setError("");
    setLoading(true);

    try {

      await registerService(userName, email, password);
      onSubmitOk()
    } catch (error:any) {

      setLoading(false);
      setError(error.message);
      onSubmitOk()

    } finally {

      setLoading(false);

    }

  };

  return { register, error, loading };
};