import { useEffect, useState, useRef } from "react";
import SideBar from "./SideBar";
import { Circle, CustomOverlayMap, Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
const { kakao } = window;
const KakaoMap = () => {
  const [position, setPosition] = useState({ lnt: 36, lng: 127 });
  const mapRef = useRef(null);

  const [info, setInfo] = useState("");

  const getInfo = () => {
    const map = mapRef.current;
    if (!map) return;

    const center = map.getCenter();

    // 지도의 현재 레벨을 얻어옵니다
    const level = map.getLevel();

    // 지도타입을 얻어옵니다
    const mapTypeId = map.getMapTypeId();

    // 지도의 현재 영역을 얻어옵니다
    const bounds = map.getBounds();

    // 영역의 남서쪽 좌표를 얻어옵니다
    const swLatLng = bounds.getSouthWest();

    // 영역의 북동쪽 좌표를 얻어옵니다
    const neLatLng = bounds.getNorthEast();

    // 영역정보를 문자열로 얻어옵니다. ((남,서), (북,동)) 형식입니다
    // const boundsStr = bounds.toString()

    let message = "지도 중심좌표는 위도 " + center.getLat() + ", <br>";
    message += "경도 " + center.getLng() + " 이고 <br>";
    message += "지도 레벨은 " + level + " 입니다 <br> <br>";
    message += "지도 타입은 " + mapTypeId + " 이고 <br> ";
    message +=
      "지도의 남서쪽 좌표는 " + swLatLng.getLat() + ", " + swLatLng.getLng() + " 이고 <br>";
    message += "북동쪽 좌표는 " + neLatLng.getLat() + ", " + neLatLng.getLng() + " 입니다";
    setInfo(message);
  };

  function isWithin200mRadius(centerLat, centerLon, lat1, lon1) {
    // 지구의 반지름 (미터)
    const earthRadius = 6371000;

    // 중심 좌표와 주어진 좌표 사이의 차이를 라디안으로 계산
    const lat1Rad = (lat1 - centerLat) * (Math.PI / 180);
    const lon1Rad = (lon1 - centerLon) * (Math.PI / 180);

    // 위도 차이의 제곱 + 경도 차이의 제곱
    const distance = Math.sqrt(lat1Rad * lat1Rad + lon1Rad * lon1Rad);

    // 결과값이 200 미터 이하인 경우 참을 반환, 그렇지 않으면 거짓 반환
    return distance * earthRadius <= 200;
  }

  // 예시 사용법
  const lat1 = 36.85075400414; // 테스트할 위도
  const lon1 = 127.1503721; // 테스트할 경도

  if (isWithin200mRadius(position.lat, position.lng, lat1, lon1)) {
    console.log("주어진 좌표는 200m 반경 내에 있습니다.");
  } else {
    console.log("주어진 좌표는 200m 반경 밖에 있습니다.");
  }

  return (
    <Map
      level={5}
      center={{ lat: 36.815129, lng: 127.1138939 }}
      style={{ width: "100%", height: "100vh" }}
      onClick={(_t, mouseEvent) => {
        setPosition({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        });
        console.log(position);
        console.log(mapRef.current.getLevel());
      }}
      ref={mapRef}
    >
      <MapMarker onClick={getInfo} position={{ lat: 36.85075400414, lng: 127.150372197 }}>
        <div style={{ color: "#000", display: "flex", alignItems: "center" }}>사무실</div>
      </MapMarker>
      <ZoomControl position={"RIGHT"} />
      {position && <MapMarker position={position}></MapMarker>}
      {position && (
        <CustomOverlayMap zIndex={3} position={position} xAnchor={-0.2} yAnchor={1.6}>
          <div className="d-flex flex-row bg-body-tertiary shadow-lg px-4 py-3 rounded">
            <div className="image"></div>
            <div className="d-flex flex-column">
              <h4>
                <b>인프라 점수</b>
              </h4>
              <p>
                이곳의 인프라 점수는{" "}
                <span style={{ color: "forestgreen", fontWeight: "bold" }}>80</span>점입니다.
                <br></br>
                점수의 세부를 확인하려면 왼쪽의 사이드바를 열어보세요!
              </p>
            </div>
          </div>
        </CustomOverlayMap>
      )}
      {position && (
        <div className="infraOverlay">
          <CustomOverlayMap className="customOverlay" position={position}>
            <Circle
              className={`infraCircle`}
              center={position}
              radius={200}
              fillColor={"#FF8080"}
              fillOpacity={0.4}
              strokeWeight={0}
            ></Circle>
          </CustomOverlayMap>
        </div>
      )}
    </Map>
  );
};

export default KakaoMap;
