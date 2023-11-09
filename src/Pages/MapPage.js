import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import KakaoMap from "../Components/KakaoMap";

import { useState, useEffect } from "react";

const MapPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    // 리사이즈 이벤트에 핸들러 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <SideBar width={isMobile ? 320 : 480} />
      <KakaoMap />
    </div>
  );
};

export default MapPage;
