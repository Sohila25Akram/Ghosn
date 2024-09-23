import './App.css';
import 'remixicon/fonts/remixicon.css';
import { Routers } from "./routers/Routers";
import Layout from './Layout/Layout';
import { useEffect, useState } from 'react';
import Splash from './Components/Splash/Splash';


function App() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(splashTimeout);
  }, []);
  return (
    <div className="App">
      {showSplash? <Splash /> : <Layout />}
      {/* <Layout/> */}
      {/* <Routers /> */}
    </div>
  );
}

export default App;
