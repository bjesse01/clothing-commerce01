import React from "react";

const Header = ({ image, title }) => {
  return (
    <div>
      <div
        className="sm:h-[140px] h-[100px] rounded-md flex items-center justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "none",
        }}
      >
        <h1 className="text-center text-white font-black sm:text-5xl text-4xl tracking-wider">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
