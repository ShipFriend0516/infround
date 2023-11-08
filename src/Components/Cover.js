import { useNavigate } from "react-router-dom";
import logoImage from "../img/infround-logo.jpg";
import transparentLogo from "../img/transparentLogo.png";
import transparentLogo2 from "../img/transparentLogo2.png";

const Cover = () => {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate("/map");
  };

  return (
    <div className=" d-flex container-fluid flex-column cover align-items-center">
      <div className="w-100 d-flex flex-row align-items-center justify-content-evenly tp">
        <div className=" d-flex  flex-column">
          <h1 className="mobileNone text-size-title jamsil-bold text-center text-white">
            내 주변{" "}
            <span className="bg-light">
              <span className="text-dark blinkAnimation">인프라</span>
            </span>
            를 점수로!
          </h1>
          <h1 className="mobileNone text-size-title jamsil-light text-left text-white">
            인프라운드
          </h1>
        </div>
        <img src={transparentLogo2} alt="인프라운드 로고" className="coverLogo" />
      </div>

      <button
        id="startButton"
        className="button-33 border-0 py-2 px-4 shadow-sm"
        onClick={handleStartButtonClick}
      >
        바로 시작하기
      </button>
      <div className="footer">@2023 All rights reserved.</div>
    </div>
  );
};

export default Cover;
