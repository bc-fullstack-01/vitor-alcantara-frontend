import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import server from "../../api/server";
import { AuthForm } from "../../components/AuthForm/AuthForm";


import "./Signin.css";

interface TokenUser {
  user: string;
  profile: string;
}

export function Signin() {
  const navigate = useNavigate();

  async function handleLogin(user: string, password: string) {
    const response = await server.post("/security/login", {
      user,
      password,
    });

    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    const decoded = jwt_decode(accessToken) as TokenUser;
    localStorage.setItem("user", decoded.user);
    localStorage.setItem("profile", decoded.profile);
    navigate("/home");
  }
  return (
    
      <AuthForm onSubmitForm={handleLogin} onRouteLink={'#'} onRouteText={'Ainda não têm cadastro? Cadastrar agora'} onSubmitButtonText={'Registrar'} />
    
  );
}
