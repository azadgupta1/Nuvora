import { useNavigation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

export default function LoaderSpinner() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="text-[#0DCEDA] text-5xl animate-spin">
        <FaSpinner />
      </div>
    </div>
  );
}
