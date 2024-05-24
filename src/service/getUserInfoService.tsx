export const getUserInfoService = async (token:string) => {
    
    const response = await fetch(`http://192.168.1.14:3100/getUserInfo`, {
      method: "GET",
      headers: {
        "Authorization":token,
        "Content-Type": "application/json",
      },
      
    });
    
    const json = await response.json()

    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json.message;
  };