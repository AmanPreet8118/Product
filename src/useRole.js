import { useState } from 'react';

export default function useRole() {
  const getRole = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.role
  };

  const [role, setRole] = useState(getRole());

  const saveRole = userToken => {
    if(userToken){
        setRole(userToken.role);
    }
    else{
        setRole();
    }
    
  };

  return {
    setRole: saveRole,
    role
  }
}