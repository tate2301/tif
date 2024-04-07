import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import CustomInput from "@/components/inputs/CustomInput";
import { velocityPaymentsAPIClient } from "@/lib/client";
import { ApiKey } from "../types";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const router = useRouter();

  const login_user = async () => {
    setLoading(true);
    try {
      await velocityPaymentsAPIClient
        .post(`/auth/login`, {
          email,
          password,
        })
        .then(({ data }) => {
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          setCookie(null, "access_token", data.access_token, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
        })
        .then(async () => {
          await velocityPaymentsAPIClient.get(`/auth/profile`);

          const { data: api_key }: { data: ApiKey } =
            await velocityPaymentsAPIClient.get(`/auth/keys`);
          localStorage.setItem("api_key", JSON.stringify(api_key));
          setPassword("");
          setEmail("");
          router.push("/payments");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setErr("login fail");
    }
  };
  return (
    <>
      <Head>
        <title>Dashboard - Login</title>
      </Head>
      <div className="overflow-hidden relative min-h-screen grid pt-40 w-full px-4">
        <div className="max-w-sm mx-auto w-full flex flex-col space-y-8">
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
            <p className="text-2xl heading-text text-center font-semibold mb-8">
              Sign in to your account
            </p>
          </div>
          <form onSubmit={login_user} className="flex flex-col space-y-4">
            <CustomInput
              heading="Email Address"
              value={email}
              setValue={setEmail}
              placeholder="Enter email address"
              type="email"
            />
            <div className="flex flex-col space-y-2">
              <CustomInput
                heading="Password"
                value={password}
                setValue={setPassword}
                placeholder="Password"
                type="password"
              />
              <Link
                href={"/login"}
                className="text-xs font-medium  main-link-text text-right"
              >
                Forgot password?
              </Link>
            </div>
            <PrimaryButton
              type="submit"
              loading={loading}
              text="Sign in to account"
              onClick={login_user}
            />
          </form>
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
