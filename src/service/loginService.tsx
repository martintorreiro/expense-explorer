/* import 'dotenv/config'

const server = process.env.REACT_APP_SERVER_URL; */

export const loginService = async (email:string, password:string) => {
  
    const response = await fetch(`http://192.168.1.14:3100/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.message;
  };