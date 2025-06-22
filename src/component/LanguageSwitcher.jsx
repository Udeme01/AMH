import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LanguageSwitcher = () => {
  return (
    <main className="flex items-center justify-center gap-2 border border-white px-3 py-1 cursor-pointer">
      <h1 className="text-white text-[10px]">English</h1>
      <FontAwesomeIcon icon={faChevronDown} color="#fff" size="xs" />
    </main>
  );
};

export default LanguageSwitcher;
