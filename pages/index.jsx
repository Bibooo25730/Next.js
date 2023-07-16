import { decremented, incremented } from "@/src/store/features/counterSlice";
import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header"
export default function Home() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>

        <Header></Header>
        <title>Boilerplate</title>



      <main>
        <h1 className="text-xl lg:text-6xl text-center my-10 uppercase tracking-[2px]">
          Hello {value}
        </h1>

      </main>
    </>
  );
}
