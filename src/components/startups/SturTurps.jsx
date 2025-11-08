import "./SturTups.css";
import sturTupImg_1 from "../../assets/sturtup-img-1.svg";
import sturTupImg_2 from "../../assets/sturtup-img-2.svg";
import sturTupImg_3 from "../../assets/sturtup-img-3.svg";
import sturTupImg_4 from "../../assets/sturtup-img-4.svg";
import sturTupImg_5 from "../../assets/sturtup-img-5.svg";

const SturTurps = () => {
  return (
    <div className="SturTups">
      <div className="sturtups-inside container">
        <div className="sturtups-top">
          <p>From startups to the world’s largest companies</p>
        </div>
        <div className="sturtups-bottom">
          <img src={sturTupImg_1} alt="sturtups img" />
          <img src={sturTupImg_2} alt="sturtups img" />
          <img src={sturTupImg_3} alt="sturtups img" />
          <img src={sturTupImg_4} alt="sturtups img" />
          <img src={sturTupImg_5} alt="sturtups img" />
        </div>
      </div>
    </div>
  );
};

export default SturTurps;
