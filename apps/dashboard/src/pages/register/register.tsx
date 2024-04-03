import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PrimaryButton from "@/components/buttons/PrimaryButton";

type Props = {};

function Register({}: Props) {
 
  const [err, setErr] = useState("");
  const router = useRouter();
    // form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address_line_2, setAddresLine2] = useState("");
  const [city, setCity] = useState("");
  const [profile_picture, setProfilePicture] = useState("");

  const register_Users = async () => {
    try {
    //   const { data } = await axios.post(
    //     `http://localhost:3333/api/auth/login`,
    //     {
    //       username: email,
    //       password: password,
    //     }
    //   );
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
      <div className="z-0 absolute top-40 left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
      <div className="z-0 absolute top-52 right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
      <div className="z-0 absolute bottom-8 left-80 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
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
          <label
            htmlFor="password"
            className="z-10 text-slate-700 text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white z-10 border border-slate-400 rounded p-2"
          />
        </div>
        <PrimaryButton text="Sign in to account" onClick={register_Users} />

        <Link href={'/login'} className="text-sm text-slate-700 text-center">
          Forgot password?
        </Link>
      </div>
    </div>
  </>
  )
}

export default Register;
