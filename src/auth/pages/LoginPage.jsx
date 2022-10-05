import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const { login } = useContext( AuthContext )

  const navigation = useNavigate();
  const lastPath = localStorage.getItem('lastPath');

  const onLogin = () =>{

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    login('juan el macho')

    navigation(lastPath, {
      replace: true,
    });

  }
  
  return (
    <>
    
        <h2> Login</h2>
        <hr/>

        <button
          className="btn btn-primary"
          onClick={ () =>  onLogin() }
        >
          Login
        </button>
    
    </>
  )
}       
