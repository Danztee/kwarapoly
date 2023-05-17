import Link from "next/link";

type NavLinksProps = {};

const NavLinks: React.FC<NavLinksProps> = () => {
  return (
    <div className="gap-8 text-[#505050] flex flex-col items-start lg:flex-row lg:items-center">
      <Link href="/" className="hover:text-[#18753D]">
        Home
      </Link>
      <Link href="/" className="hover:text-[#18753D]">
        For students
      </Link>
      <Link href="/" className="hover:text-[#18753D]">
        For lectures
      </Link>
      <Link href="/" className="hover:text-[#18753D]">
        Testimonial
      </Link>
    </div>
  );
};
export default NavLinks;
