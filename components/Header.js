import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky top-0 z-[1000] bg-[#040714] h-[72px] flex items-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Header;
