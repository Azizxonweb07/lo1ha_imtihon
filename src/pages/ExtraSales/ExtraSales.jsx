import Garant from "../../components/garant/Garant";
import Good from "../../components/good/Good";
import Life from "../../components/life/Life";
import Notified from "../../components/notified/Notified";
import Program from "../../components/program/Program";
import Self from "../../components/self/Self";
import Session from "../../components/session/Session";
import Testimonials from "../../components/testimonials/Testimonials";
import Work from "../../components/work/Work";
import "./ExtraSales.css";

const ExtraSales = () => {
  return (
    <div className="ExtraSales">
      <Self />
      <Work />
      <Life />
      <Testimonials />
      <Program />
      <Garant />
      <Session />
      <Good />
      <Notified />
    </div>
  );
};

export default ExtraSales;
