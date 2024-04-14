//import "../styles/globals.css";//_app.jsにてMyApp設定済み
import { Main } from "../components/Main";
import { Header } from "../components/Header";

export default function Page() {
  return (
    <div>
      <Header/>
      <Main page="index"/>
    </div>
  );
}