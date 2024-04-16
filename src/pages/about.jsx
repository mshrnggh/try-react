import styles_Main from "src/components/Main/Main.module.css";
//import "../styles/globals.css";//_app.jsにてMyApp設定済み
import { Vercel_links } from "src/components/Vercel_links";
import { Vercel_footer } from "src/components/Vercel_footer";
import { Headline } from "src/components/Headline";

export default function About() {
  return (
    <main className={styles_Main.main}>
      <Headline 
        page="about" 
        num = {111} 
        arry={[1,2,3]}
        obj ={{name: 'John', age: 25}}
        boolean
        // compDOM = {<></></>} 
        // onClick={()=>alert("Button clicked!!")}
      >
        <code className={styles_Main.code}> src/app/about.js</code>
      </Headline>
      <Vercel_links/>   
      <p style = {{marginTop: '2rem'}}></p>
      <Vercel_footer/>
    </main>
  );
}
