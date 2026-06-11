import axios from "axios";
import { useEffect, useState } from "react";

type loginTokenType = {
token: string;
};
const useIsLogin = () =>{

  const [login, setLogin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const raw = localStorage.getItem("loginToken");
    const loginToken: loginTokenType | null = raw ? JSON.parse(raw) : null;

    if (loginToken) {
      axios.get('https://ecomadminapi.azhadev.ir/api/auth/user', {
        headers: {
          "Authorization": `Bearer ${loginToken.token}`
        }
      })
      .then(res => {
        setLogin(res.status === 200);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem('loginToken');
        setLoading(false);
        setLogin(false);
      });
    } else {
      setLoading(false);
      setLogin(false);
    }
  }, []);

return [loading, login] as [boolean, boolean]

}

export default useIsLogin