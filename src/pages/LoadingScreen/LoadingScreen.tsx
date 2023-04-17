import { spinner } from "../../assets";

export default function LoadingScreen() {
  return (
    <div className="Spinner bg-[#fff] w-[100vw] h-[100vh] flex justify-center items-center">
      <img src={spinner} alt="" className="w-[140px]" />
    </div>
  );
}
