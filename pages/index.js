import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="container">
      <Intro />
      <Feed />
    </div>
  );
}
