import Articles from "../../components/articles/Articles";
import Clients from "../../components/clients/Clients";
import Footer from "../../components/footer/Footer";
import Help from "../../components/help/Help";
import Hero from "../../components/hero/Hero";
import Notified from "../../components/notified/Notified";
import Potential from "../../components/potential/Potential";
import Session from "../../components/session/Session";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Help />
      <Clients />
      <Articles />
      <Potential />
      <Session />
      <Notified />
    </div>
  );
};

export default Home;
