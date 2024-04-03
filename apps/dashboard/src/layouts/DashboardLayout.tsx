/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode, useContext, useEffect } from "react";
import Navbar from "../components/navigation/Navbar";
import Head from "next/head";
import { Store } from "@/context/Store";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
};

const DashboardLayout = (props: Props) => {
  const { state } = useContext<any>(Store);
  const { access_token } = state;
  const router = useRouter();

  console.log("user Info: ----- ", access_token);

  useEffect(() => {
    if (!access_token) {
      router.push("/");
    }
  }, [access_token]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <div className="nav">
          <Navbar />
        </div>
        {props.children}
      </div>
    </>
  );
};

export default DashboardLayout;
