export const validateService = async (email:string, registrationCode:string) => {
    const response = await fetch(`http://192.168.1.14:3100/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, registrationCode }),
    });
  
    const json = await response.json();
  
    if (!response.ok) {
      throw new Error(json.message);
    }
  
    return json;
  };