import styles from "./styles/pages/Home.module.css";

import Header from "./components/Header";

import BarChart from "./charts/BarChart";
import ScatterChart from "./charts/ScatterChart";

const App = () => {

  return (

    <>

      <Header />

      <div className={styles.container}>

        <BarChart />
        <ScatterChart />

      </div>

    </>

  );

}

export default App;