import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {  
  return (
    <main style={{height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1>Brainstorm</h1>
    </main>
  );
}
