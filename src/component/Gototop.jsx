import { FaArrowUp } from "react-icons/fa";

function Gototop() {
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="p-4 float-right">
      <button
        onClick={gotobtn}
        className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 sticky"
      >
        <FaArrowUp className="top-btn--icon" />
      </button>
    </div>
  );
}

export default Gototop;
