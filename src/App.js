import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import { router } from "../src/Router/router";
import "./index.css";

// components
import Header from "./components/header";
import Navbar from "./components/navbar";

// sections
import SubscribeSection from "./Sections/subscribe";
import Footer from "./Sections/footer";
import Footer2 from "./Sections/Footer2";

function App() {
  const routes = useRoutes(router);

  return (
    <div className="App">
      <Header />
      <HR />
      <Navbar />
      <div className="container">{routes}</div>
      <SubscribeSection/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;

const HR = styled.hr`
  border: 1px solid #e0e0e0;
`;
