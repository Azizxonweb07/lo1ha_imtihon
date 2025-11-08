import Aboutme from "../../components/aboutme/Aboutme";
import Good from "../../components/good/Good";
import Hear from "../../components/hear/Hear";
import Notified from "../../components/notified/Notified";
import SturTurps from "../../components/startups/SturTurps";
import Work from "../../components/work/Work";
import "./About.css";

const About = () => {
  return (
    <div>
      <Aboutme />
      <SturTurps />
      <Hear />
      <Work />
      <Good />
      <Notified />
    </div>
  );
};

export default About;
