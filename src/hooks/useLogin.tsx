import { AuthContext } from "@/context/AuthContext/AuthContext";
import { useContext, useState } from "react";
import { loginService } from "@/service/loginService";

export interface User {
  name:string , 
  token:string ,
  id:number 
}

export const useLogin = () => {
  
  const { loginStorage } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (email:string, password:string) => {
    
      try {
        const res = await loginService(email,password)
        
        loginStorage(res.token)
      } catch (err:any) {
        console.log('err',err)
        setError(err.message)
      
      }finally{
        setLoading(false)
      }
    
  }



  return { login, error, loading };
};

export default useLogin