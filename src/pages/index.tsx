import Image from "next/image";
import { Inter } from "next/font/google";
import CustomLink from "@/components/CustomLink";
import Navbar from "@/components/Navbar";

import dashboard from "../../public/dashboard.png";
import For from "@/components/For";

import Assignment from "../../public/Assignments.png";
import Lecturer from "../../public/Lecturer.png";
import Trusted from "@/components/Trusted";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={inter.className}>
        <div className="px-4 lg:px-16 py-4 lg:py-8">
          <section className="hero lg:mt-10">
            <div className="flex flex-col items-center">
              <h1 className="text-[2rem] lg:text-[2.5rem] font-bold mb-5 text-center">
                Create and Submit Assignments <br /> with Ease
              </h1>

              <p className="text-[#505050] mb-8 text-center">
                Our platform makes it easy for lecturers to create and manage
                assignments, <br /> and for students to view and submit them.
              </p>

              <div>
                <CustomLink value="Request a Demo" />
              </div>
            </div>

            <div className="flex flex-col items-center mt-10">
              <Image src={dashboard} alt="dashboard" />
            </div>
          </section>

          <section className="mt-20">
            <Trusted />
          </section>

          <section className="mt-20">
            <For
              title="For Students"
              text="View assignments and submit completed work directly through our
            platform. Track your progress and see how you're doing on each
            assignment. Accessible from any device, our platform is intuitive and
            easy to use."
              img={Assignment}
            />
          </section>

          <section className="mt-20">
            <For
              title="For Lecturers"
              text="Create individual or series of assignments, set due dates and 
            grading criteria, and manage submissions with ease. Our 
            user-friendly platform allows you to create assignments with 
            various details such as name, category, level, and lessons."
              img={Lecturer}
            />
          </section>
        </div>

        <div className="mt-20">
          <Testimonials />
        </div>

        <div className="mt-20">
          <Footer />
        </div>
      </main>
    </>
  );
}
