import { useEffect } from "react";

const ShowModal = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Stay Tuned</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quod
          cumque nihil praesentium maiores vitae magnam possimus sequi minima.
        </p>
        <button className="modal-btn" onClick={closeModal}>
          Accept It
        </button>
      </div>
    </>
  );
};

export default ShowModal;
