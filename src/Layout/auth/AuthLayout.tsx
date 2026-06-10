import useIsLogin from '@/hooks/authHook';
import Login from '@/pages/auth/Login';
import { Navigate, Route, Routes } from 'react-router-dom';


  const [loading, login] = useIsLogin();


const AuthLayout = () => {
    return (

<div>
       {loading ? (
        <h1>please waite</h1>
      ) : !login ? (
          <Navigate to={"/auth/login"} />
      ) : (
         <div>
            <Routes>
                <Route path='/auth/login' element={<Login/>}/>
            </Routes>
        </div>
      )}
</div>

        
       
    );
};

export default AuthLayout;