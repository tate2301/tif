import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import CustomInput from "@/components/inputs/CustomInput";

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
      <div className="overflow-hidden relative min-h-screen grid pt-40 w-full px-4">
        <div className="max-w-sm mx-auto w-full flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row self-center">
              <div className="w-16 h-12 relative rounded-lg">
                <Image
                  src={"/images/velocity.svg"}
                  alt="logo icon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            {/* <BorderedHeading text="Welcome Back" /> */}
            <p className="text-2xl heading-text text-center font-semibold">
              Sign in to your account
            </p>
          </div>
          <CustomInput
            heading="Email Address"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
          />
          <div className="flex flex-col space-y-2">
            <CustomInput
              heading="Password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
            />
            <Link
              href={"/login"}
              className="text-xs font-medium  main-link-text text-right"
            >
              Forgot password?
            </Link>
          </div>
          <PrimaryButton text="Sign in to account" onClick={login_user} />
          <Link
            href={"/register"}
            className="text-xs font-medium main-link-text text-center"
          >
            Don't have an account?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Index;
