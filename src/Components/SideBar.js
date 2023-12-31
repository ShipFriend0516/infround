import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/sidebar.module.css";
import propTypes from "prop-types";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { IconContext } from "react-icons";

// 아이콘 목록
import { MdLocalConvenienceStore } from "react-icons/md";
import { MdLocalGasStation } from "react-icons/md";
import { MdMic, MdMovie } from "react-icons/md";
import { GiBusStop } from "react-icons/gi";
import { MdPark } from "react-icons/md";
import { TbMoodKidFilled } from "react-icons/tb";
import { IoBook } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { MdDryCleaning } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { FaTrain } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { BsCapsule } from "react-icons/bs";

import InfraElement from "./InfraElement";

// 이미지
import mc1 from "../img/mc1.jpg";
import mc2 from "../img/mc2.jpg";
import doojeong from "../img/두정역.JPG";

const SideBar = ({ width = 480, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState(width);
  const side = useRef();

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (xPosition > 0) {
      setXPosition(0);
      setIsOpen(true);
    } else {
      setXPosition(width);
      setIsOpen(false);
    }
  };

  const handleClose = (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      setXPosition(width);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={`${styles.container} navbar z-2 py-0`}>
      <div
        style={{
          transition: "transform 0.4s",
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        {!isOpen ? (
          <IconContext.Provider value={{ size: "2em" }}>
            <BsFillCaretRightFill
              onClick={(e) => toggleMenu(e)}
              className={`${styles.button} z-3`}
            />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "2em" }}>
            <BsFillCaretLeftFill
              onClick={(e) => toggleMenu(e)}
              className={`${styles.button} z-3`}
            />
          </IconContext.Provider>
        )}
      </div>
      <div
        ref={side}
        className={styles.sidebar}
        style={{ width: `${width}px`, height: "100%", transform: `translatex(${-xPosition}px)` }}
      >
        <div className={styles.content + "container py-5 mt-4 px-3 jamsil-light"}>
          <div>
            <div className="fs-4 jamsil-bold">충청남도 천안시 서북구 두정동</div>
            <div className="fs-5 jamsil-light">두정역 1호선</div>
            <hr className="mt-1" />
            <div className="container text-cente mb-3">
              <div className="row">
                <div className="col">
                  <img className="img-thumbnail" src={doojeong}></img>
                </div>
              </div>
            </div>
            <div className="mx-1 mb-3">
              <div className="jamsil-bold mb-1">이 지역의 근방 2km 인프라 점수는 80점입니다.</div>
              <div
                className="progress position-relative"
                role="progressbar"
                style={{ height: "30px" }}
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  className="position-absolute fs-6"
                >
                  80%
                </span>
                <div
                  className="progress-bar bg-success fs-6"
                  style={{ fontWeight: "bold", width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="jamsil-bold">주요 인프라 시설</p>
              <div className="border border-black p-2">
                <small>교육 시설</small>
                <hr className="mt-1" />
                <InfraElement
                  infraName="어린이집"
                  infraScore={16}
                  infraIcon={<TbMoodKidFilled />}
                />
                <InfraElement infraName="도서관" infraScore={1} infraIcon={<IoBook />} />
                <InfraElement infraName="학원" infraScore={6} infraIcon={<FaPen />} />
                <small>의료 시설</small>
                <hr className="mt-1" />
                <InfraElement infraName="병원" infraScore={8} infraIcon={<FaHospitalAlt />} />
                <InfraElement infraName="약국" infraScore={5} infraIcon={<BsCapsule />} />
                <InfraElement
                  infraName="소아과가 부족합니다."
                  infraScore={5}
                  infraIcon={<IoIosWarning color="orange" />}
                  infraType="warn"
                />

                <small>조경 시설</small>
                <hr className="mt-1" />
                <InfraElement infraName="공원" infraScore={4} infraIcon={<MdPark />} />
                <small>생활 필수 시설</small>
                <hr className="mt-1" />
                <InfraElement
                  infraName="편의점"
                  infraScore={10}
                  infraIcon={<MdLocalConvenienceStore />}
                />
                <InfraElement infraName="주유소" infraScore={6} infraIcon={<MdLocalGasStation />} />
                <InfraElement infraName="세탁소" infraScore={2} infraIcon={<MdDryCleaning />} />
                <small>교통 시설</small>
                <hr className="mt-1" />
                <InfraElement infraName="수도권 지하철역" infraScore={11} infraIcon={<FaTrain />} />
                <InfraElement infraName="버스 정류장" infraScore={11} infraIcon={<GiBusStop />} />

                <small>유흥 시설</small>
                <hr className="mt-1" />
                <InfraElement infraName="코인 노래방" infraScore={4} infraIcon={<MdMic />} />
                <InfraElement infraName="영화관" infraScore={1} infraIcon={<MdMovie />} />
              </div>
            </div>
            <div className="d-flex container-fluid my-3 justify-content-between align-items-center">
              <div className="fs-5">연락처 010-0000-0000</div>
              <button className="btn btn-secondary">구매 상담</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.prototype = {
  width: propTypes.number,
};

export default SideBar;
