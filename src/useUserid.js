import { useState } from 'react';

export default function useUserid() {
  const getUserid = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.user_id
  };

  const [userid, setUserid] = useState(getUserid());

  const saveUserid = userToken => {
    if(userToken){
        setUserid(userToken.user_id);
    }
    else{
        setUserid();
    }
    
  };

  return {
    setUserid: saveUserid,
    userid
  }
}