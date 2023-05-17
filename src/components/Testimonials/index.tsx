import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import kamal from "../../../public/kamal.png";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <div className="bg-[#212121] px-4 lg:px-16 py-14 lg:py-20 text-[#fff] lg:grid grid-cols-3">
      <aside>
        <h1 className="mb-12 lg:mb-0">TESTIMONIALS</h1>
      </aside>

      <aside className="col-span-2 flex flex-col gap-6 lg:gap-10">
        <div className="flex items-center gap-4">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>

        <p className="opacity-50 pr-[2rem] lg:pr-20">
          The Agency Creative team did a brochure for one of our development
          projects in Manchester. The team listened to the brief and came up
          with some great ideas, one of which we liked and picked. They also
          helped us arrange a videographer for the show apartment.
        </p>

        <div className="flex items-center gap-4">
          <Image src={kamal} alt="kamal" className="rounded-full w-[50px]" />
          <p>KAMALDEEN KEHINDE</p>
        </div>
      </aside>
    </div>
  );
};
export default Testimonials;
