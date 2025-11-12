import "./Garant.css";
import garantImg from "../../assets/garant-img.svg";

const Garant = () => {
  return (
    <div className="Garant">
      <img src={garantImg} alt="garantIMG" loading="lazy" />
      <h2>Guarantee</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua minim veniam.
      </p>
    </div>
  );
};

export default Garant;
