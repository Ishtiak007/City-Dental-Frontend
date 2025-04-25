"use client";

const CnCProgramming = () => {
  return (
    <div
      className="relative w-full flex justify-center align-middle items-center mx-auto
     h-[60vh] overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/dentalVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className="text-4xl font-sans
          text-cyan-500
          font-chewy"
        >
          CnC Programming
        </h1>
        <p className="mt-4 text-xs md:text-sm">
          Inspired by London’s Gresham College — an institution providing free
          public lectures since 1597 — our mission is to foster the advancement
          of culture and knowledge. Bloom Programming events seek to entertain
          our sense of curiosity, inspire new areas of interest, and ultimately
          contribute to Tampa’s emergence as a cultural destination.
        </p>
        <p className="text-xl md:text-2xl">Find The Best Books Here</p>
      </div>
    </div>
  );
};

export default CnCProgramming;
