import { loginRequest } from "../api/auth";

export const LoginPage = () => {

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        const email = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        await loginRequest(email,password)
        console.log(email,password)
    }


  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="email@email.com" />
      <input type="password" placeholder="*****" />
      <button>Login</button>
    </form>
  );
};
