import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import axios from "axios";
import { getMessage } from "@/helpers/getMessage";
import Image from "next/image";
import CustomInput from "@/components/inputs/CustomInput";
import { Checkbox } from "@/components/ui/checkbox";
import { velocityPaymentsAPIClient } from "@/lib/client";

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
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState<boolean>()

  const login_user = async () => {
    setLoading(true)
    try {
      const { data } = await velocityPaymentsAPIClient.post(`/auth/register`, {
        username: email,
        password: password,
      });
      console.log("mnessage from refitsre", getMessage(data));
      router.push("/payments");
      setPassword("");
      setEmail("");
      setLoading(false)
      // console.log(data);
    } catch (error) {
      setLoading(false)
      setErr("login fail");
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - Register</title>
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
              Register your account
            </p>
          </div>
          <CustomInput
            heading="Email"
            value={email}
            setValue={setEmail}
            placeholder="Enter email address"
          />
          <div className="grid grid-cols-2 gap-4">
            <CustomInput
              heading="First name"
              value={first_name}
              setValue={setFirstName}
              placeholder="First name"
            />
            <CustomInput
              heading="Last name"
              value={last_name}
              setValue={setLastName}
              placeholder="Last name"
            />
          </div>
          <CustomInput
            heading="Home address"
            value={address}
            setValue={setAddress}
            placeholder="Enter your physical home address"
          />
           <div className="grid grid-cols-2 gap-4">
            <CustomInput
              heading="City"
              value={city}
              setValue={setCity}
              placeholder="City"
            />
            <CustomInput
              heading="Country"
              value={country}
              setValue={setCountry}
              placeholder="Country"
            />
          </div>
          <CustomInput
            heading="Password"
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
          <PrimaryButton text="Sign in to account" onClick={login_user} />
          <Link
            href={"/"}
            className="text-xs font-medium main-link-text text-center"
          >
            Already registered?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
