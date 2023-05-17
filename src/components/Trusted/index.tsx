import Image from "next/image";
import havard from "../../../public/havard.png";
import oxford from "../../../public/oxford.png";
import microsoft from "../../../public/microsoft.png";
import google from "../../../public/google.png";

type TrustedProps = {};

const Trusted: React.FC<TrustedProps> = () => {
  return (
    <div className="flex items-center lg:gap-20 justify-center flex-col gap-4 lg:flex-row">
      <h1 className="text-[#182524] font-bold text-[1.5rem]">Trusted by:</h1>

      <div className="flex items-center gap-4 lg:gap-10">
        <Image src={havard} alt="havard" />
        <Image src={oxford} alt="oxford" />
        <Image src={microsoft} alt="microsoft" />
        <Image src={google} alt="google" />
      </div>
    </div>
  );
};
export default Trusted;
