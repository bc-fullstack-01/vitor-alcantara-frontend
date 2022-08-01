import { useNavigate } from "react-router-dom";
import server from "../../api/server";
import { AuthForm } from "../../components/AuthForm/AuthForm";

export function Signup() {
  const navigate = useNavigate();

  async function handleRegister(user: string, password: string) {
    try {
      const response = await server.post("/security/register", {
        user,
        password,
      });
      console.log(response.data)
      navigate("/");
    } catch (err) {
      alert("não deu");
    }
  }
  return (
    <AuthForm
      onSubmitForm={handleRegister}
      onRouteLink={"/"}
      onRouteText={"Já têm uma conta? Faça o login"}
      onSubmitButtonText={"Cadastro"}
    />
  );
}
