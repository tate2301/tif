import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Head from "next/head";
import { useRouter } from "next/router";

export function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const router = useRouter();

  const login_user = async () => {
    try {
      // const { data } = await axios.post(
      //   `http://localhost:3333/api/auth/login`,
      //   {
      //     username: email,
      //     password: password,
      //   }
      // );
      router.push("/payments");
      setPassword("");
      setEmail("");
      // console.log(data);
    } catch (error) {
      setErr("login fail");
    }
  };
  return (
    <>
      <Head>
        <title>Dashboard - Login</title>
      </Head>
      <div className="overflow-hidden relative min-h-screen grid items-center  w-full px-4">
        
        <div className="max-w-sm mx-auto w-full flex flex-col space-y-6">
          <p className="text-slate-900 text-lg font-semibold text-center">
            Welcome Back
          </p>
          <div className="flex flex-col w-full space-y-2">
            <label
              htmlFor="email"
              className="z-10 text-slate-700 text-sm font-semibold"
            >
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white z-10 border border-slate-400 rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex flex-row items-center justify-between">
              <label
                htmlFor="password"
                className="z-10 text-slate-700 text-sm font-semibold"
              >
                Password
              </label>
              <Link
                href={"/login"}
                className="text-xs font-medium text-slate-700 text-center"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white z-10 border border-slate-400 rounded p-2"
            />
          </div>
          <PrimaryButton text="Sign in to account" onClick={login_user} />
          <Link
            href={"/login"}
            className="text-xs font-medium text-slate-700 text-center"
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
