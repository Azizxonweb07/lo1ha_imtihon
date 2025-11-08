import Discover from "../../components/discover/Discover";
import Good from "../../components/good/Good";
import Notified from "../../components/notified/Notified";
import Particular from "../../components/particular/Particular";
import Ready from "../../components/ready/Ready";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Discover />
      <Particular />
      <Ready />
      <Good />
      <Notified />
    </div>
  );
};

export default Services;
