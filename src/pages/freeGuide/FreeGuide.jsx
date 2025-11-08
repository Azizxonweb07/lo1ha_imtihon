import Life from "../../components/life/Life";
import Miss from "../../components/miss/Miss";
import Notified from "../../components/notified/Notified";
import Program from "../../components/program/Program";
import Results from "../../components/results/Results";
import Testimonials from "../../components/testimonials/Testimonials";
import "./FreeGuide.css";

const FreeGuide = () => {
  return (
    <div>
      <Results />
      <Testimonials />
      <Program />
      <Life />
      <Miss />
      <Notified />
    </div>
  );
};

export default FreeGuide;
