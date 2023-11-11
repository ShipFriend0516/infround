import { useEffect, useState, useRef } from "react";
import SideBar from "./SideBar";
import { Circle, CustomOverlayMap, Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
const { kakao } = window;
const KakaoMap = () => {
  const [position, setPosition] = useState();
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

  const [location, setLoacation] = useState(null); // 현재 위치를 저장할 상태

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
  }, []);

  const successHandler = (response) => {
    console.log(response); // coords: GeolocationCoordinates {latitude: 위도, longitude: 경도, …} timestamp: 1673446873903
    const { latitude, longitude } = response.coords;
    setLoacation({ latitude, longitude });
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  return (
    <Map
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
              <h4 style={{ fontWeight: "bold" }}>인프라 점수</h4>
              <p>
                이곳의 인프라 점수는{" "}
                <span style={{ color: "forestgreen", fontWeight: "bold" }}>80</span>점입니다.
                <br />
                사이드바를 열어 세부 점수를 확인해보세요!
              </p>
            </div>
          </div>
        </CustomOverlayMap>
      )}
      {position && (
        <CustomOverlayMap className="customOverlay" position={position}>
          <Circle
            center={position}
            radius={200}
            fillColor={"#FF8080"}
            fillOpacity={0.4}
            strokeWeight={0}
          ></Circle>
        </CustomOverlayMap>
      )}
    </Map>
  );
};

export default KakaoMap;
