import { auth } from "@/utils/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Login = () => {
  if (cookies().get("session")) {
    redirect("/dashboard");
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white border-2 text-center p-8 rounded-xl flex flex-col gap-4 min-w-96">
        <div className="font-bold text-3xl">
          <h1>Login</h1>
        </div>
        <form action={auth} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-start">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-start">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-2 rounded-lg p-2"
            />
          </div>
          <button type="submit" className="px-4 py-2 rounded-full border border-[#4D6181] text-[#4D6181] mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
