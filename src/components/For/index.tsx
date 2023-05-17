import Image, { StaticImageData } from "next/image";
import CustomLink from "../CustomLink";

type ForProps = {
  title: string;
  text: string;
  img: StaticImageData;
};

const For: React.FC<ForProps> = ({ title, text, img }) => {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-[2.5rem] lg:gap-[7rem]">
      <aside
        className={`flex flex-col gap-4 ${
          title.includes("Lecturers") ? "order-last" : ""
        }`}
      >
        <h1 className="text-[1.5rem] lg:text-[1.8rem] font-bold text-[#182524]">
          {title}
        </h1>
        <p className="text-[#505050]">{text}</p>
        <div className="mt-4">
          <CustomLink value="Request a Demo" />
        </div>
      </aside>
      <aside className="">
        <Image src={img} alt="pic" />
      </aside>
    </div>
  );
};
export default For;
