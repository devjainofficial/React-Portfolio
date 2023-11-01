import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function BottomUpScroller() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-2 bg-black flex items-center justify-center"
        style={{ width: "40px", height: "40px" }}
      >
        <FontAwesomeIcon icon={faChevronUp} style={{ color: "#d95e0d" }} />
      </button>
    )
  );
}

export default BottomUpScroller;
