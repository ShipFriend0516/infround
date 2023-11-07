import { useEffect, useState, useRef } from "react";
import SideBar from "./SideBar";
import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
const { kakao } = window;
const KakaoMap = () => {
  const [latlng, setLatLng] = useState();

  const mapRef = useRef < kakao.maps.Map > null;
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

  return (
    <Map center={{ lat: 36.815129, lng: 127.1138939 }} style={{ width: "100%", height: "100vh" }}>
      <MapMarker onClick={getInfo} position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: "#000" }}>Hello World!</div>
      </MapMarker>
      <ZoomControl position={"RIGHT"} />
    </Map>
  );
};

export default KakaoMap;
