import React, { useEffect, useState, useRef } from "react";
import "./BottomSheet.css";

const BottomSheet = ({
  sendDataToParent,
  isOpen = false,
  children,
  overlayOpacity = 1,
  overlayBlur = 2,
  backgroundColor = "lightGray",
}) => {
  var [touchStart, setTouchStart] = useState(0);
  var [touchMove, setTouchMove] = useState(0);
  var [touchEnd, setTouchEnd] = useState(0);
  var bottomSheetElement = useRef(null);
  var containerElement = useRef(null);

  const vh = Math.round(window.innerHeight / (100 / 100));
  useEffect(() => {
    const bottomSheetChild = bottomSheetElement.current.childNodes[1];
    //amount of the add room modal move to hide
    if (touchMove - touchStart > 0.15 * vh) {
      touchStart >= touchEnd ? BottomSheetShow() : BottomSheetHide();
    } else {
      bottomSheetChild.style.bottom = `0`;
    }

    setTouchStart(0);
    setTouchMove(0);
  }, [touchEnd]);
  function scrollBottomSheet() {
    const bottomSheet = bottomSheetElement.current.childNodes[1];
    bottomSheet.style.transition = "0.05s";
    if (touchStart < touchMove) {
      // finger moving down
      touchMove > vh * 0.39
        ? (bottomSheet.style.bottom = `-${touchMove - touchStart}px`)
        : (bottomSheet.style.bottom = `0`);
    }
    if (touchStart > touchMove) {
      // finger moving up
    }
  }

  useEffect(() => {
    if (
      touchStart != 0 &&
      document.getElementById("dragable").getBoundingClientRect().top >
        touchStart
    ) {
      bottomSheetElement.current.style.webkitBackdropFilter = `blur(${
        overlayBlur -
        (document.getElementById("dragable").getBoundingClientRect().top *
          overlayBlur) /
          2 /
          touchStart -
        overlayBlur
      }px)`;
      bottomSheetElement.current.style.backdropFilter = `blur(${
        overlayBlur -
        (document.getElementById("dragable").getBoundingClientRect().top *
          overlayBlur) /
          2 /
          touchStart
      }px)`;
    }
  }, [touchMove]);
  function BottomSheetHide() {
    bottomSheetElement.current.style.webkitBackdropFilter = "blur(0px)";
    bottomSheetElement.current.style.backdropFilter = "blur(0px)";
    bottomSheetElement.current.style.transform = "translateY(0vh)";
    bottomSheetElement.current.style.opacity = "0";
    bottomSheetElement.current.childNodes[1].style.transition = `0.5s`;
    bottomSheetElement.current.childNodes[1].style.bottom = `-30vh`;
    setTimeout(() => {
      bottomSheetElement.current.style.display = "none";
      sendDataToParent(false);
    }, 500);
  }
  function BottomSheetShow() {
    bottomSheetElement.current.style.display = "flex";
    bottomSheetElement.current.childNodes[1].style.transition = `0.5s`;
    setTimeout(() => {
      bottomSheetElement.current.childNodes[1].style.bottom = `0`;
      bottomSheetElement.current.style.webkitBackdropFilter = `blur(${overlayBlur}px)`;
      bottomSheetElement.current.style.backdropFilter = `blur(${overlayBlur}px)`;
      bottomSheetElement.current.style.opacity = "1";
      bottomSheetElement.current.style.transform = "translateY(0vh)";
    }, 200);
  }
  useEffect(() => {
    if (isOpen != false) {
      BottomSheetShow();
    }
  }, [isOpen]);

  return (
    <div ref={bottomSheetElement} className='bottomSheet'>
      <div
        style={{
          filter: `brightness(${overlayOpacity})`,
        }}
        className='emptiness'
        onClick={() => {
          BottomSheetHide();
        }}
      ></div>
      <div
        className='container'
        style={{
          backgroundColor: `${backgroundColor}`,
        }}
        onTouchEnd={(e) => {
          e.target.localName == "section" &&
            setTouchEnd(e.changedTouches[0].clientY);
        }}
        onTouchStart={(e) => {
          {
            e.target.localName == "section" &&
              setTouchStart(e.changedTouches[0].clientY);
          }
        }}
        onTouchMove={(e) => {
          e.target.localName == "section" &&
            setTouchMove(e.changedTouches[0].clientY);
          e.target.localName == "section" && scrollBottomSheet();
        }}
      >
        <section id='dragable' className='dragable'>
          <section></section>
        </section>

        <div ref={containerElement} className='content-area'>
          <div className='content'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
