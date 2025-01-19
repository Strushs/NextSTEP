import { CiCircleQuestion } from "react-icons/ci";
import { useState } from "react";
export default function UserMenu() {
  const [openHints, setOpenHints] = useState(false);

  const useOpenHints = () => {
    setOpenHints(!openHints);
  };
  return (
    <div
      className="text-6xl text-primary cursor-pointer"
      onMouseEnter={() => setOpenHints(true)}
      onMouseLeave={() => setOpenHints(false)}
    >
      <div className="relative">
        <CiCircleQuestion
          onClick={() => {
            setOpenHints(!openHints);
          }}
        />
        {openHints && (
          <span className="absolute bg-primary text-secondary z-[99] top-12 left-[-190px] p-3 rounded-md text-center text-sm w-96">
            NextSTEP to innowacyjny projekt który umożliwi Ci wybrać odpowiedni
            kierunek dla Ciebie na podstawie różnorakich pytań
          </span>
        )}
      </div>
    </div>
  );
}
