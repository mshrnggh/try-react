import 'src/styles/globals.css'
import {Header} from 'src/components/Header'
import { useAddList } from "src/components/AddList";
import { useDisplayList } from "src/components/DisplayList";

function MyApp({ Component, pageProps }) {
  const addlist = useAddList();
  const displayList = useDisplayList();
  
  return (
  <>
    <Header>
      <link rel="icon" href="/favicon.ico" />
    </Header>
    <Component {...pageProps } addlist={addlist} displayList={displayList}/>
  </>
  )
}

export default MyApp

