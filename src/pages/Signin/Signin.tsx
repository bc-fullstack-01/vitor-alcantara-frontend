import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import server from "../../api/server";
import { AuthForm } from "../../components/AuthForm/AuthForm";

interface TokenUser {
  user: string;
  profile: string;
}

export function Signin() {
  const navigate = useNavigate();

  async function handleLogin(user: string, password: string) {
    try {
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
    } catch (err) {
      alert("ta fazendo errado");
    }
  }
  return (
    <AuthForm
      onSubmitForm={handleLogin}
      onRouteLink={"register"}
      onRouteText={"Ainda não têm cadastro? Cadastrar agora"}
      onSubmitButtonText={"Login"}
    />
  );
}
