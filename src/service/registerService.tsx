export const registerService = async (userName:string, email:string, password:string) => {
    const response = await fetch(`http://192.168.1.14:3100/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password }),
    });
  
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message);
    }
    return json;
  };