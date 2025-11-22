import React from "react";

const Mainbody = () => {
  return (
    <div className="flex flex-col">
      <div className=" relative  lg:p-20 p-10  overflow-x-hidden flex flex-col gap-20">
        <img
          src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66dffac5762f720dbb16b9dc_vector-1.avif"
          alt=""
          className="absolute md:bottom-20 bottom-120 right-0 md:-right-70 -z-50 "
        />
        <img
          src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e00867860c0c853dadd03c_bg-pattern.png"
          alt=""
          className="w-full h-screen absolute -z-70 top-0 left-0"
        />
        <div className="flex flex-col gap-10 justify-center min-h-[calc(100vh-160px)] z-100  pt-20">
          <span className="text-[clamp(50px,9vw,8rem)] text-gradient leading-tight">
            Secure, scalable, decentralized
          </span>
          <span className="text-lg md:max-w-[60%]">
            Innovative blockchain solutions to transform your digital ecosystem.
            Discover the potential of blockchain technology and decentralized
            applications with our cutting-edge solutions.
          </span>
          <span className="w-fit py-3 px-10 text-black cursor-pointer hover:scale-105 bg-[#ffdf56] rounded-lg">
            Explore our solutions →
          </span>
        </div>
        <div className="min-h-100 bg-white/2 border border-white/10  backdrop-blur-xs rounded-xl flex md:flex-row flex-col lg:p-10 p-5 items-center">
          <div className="flex flex-col gap-5 md:w-1/3 md:p-10 p-5">
            <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 w-fit text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-globe-central-south-asia"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">50 Million</span>
            <span>Number of non-fungible tokens (NFTs) sold in 2025.</span>
          </div>
          <div className="flex flex-col gap-5 md:w-1/3 md:p-10 p-5">
            <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 w-fit text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-currency-dollar"
                viewBox="0 0 16 16"
              >
                <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">50 Million</span>
            <span>Number of non-fungible tokens (NFTs) sold in 2025.</span>
          </div>
          <div className="flex flex-col gap-5 md:w-1/3 md:p-10 p-5">
            <div className="p-2 rounded-full backdrop-blur-lg bg-white/10 w-fit text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </div>
            <span className="text-lg font-semibold">50 Million</span>
            <span>Number of non-fungible tokens (NFTs) sold in 2025.</span>
          </div>
        </div>
      </div>

      {/* 2nd div */}
      <div className="flex flex-col gap-10 lg:px-20 px-5 py-20">
        <span className="text-6xl max-w-[1000px]">
          Reimagine your digital strategy with the <span className="text-gradient"> next evolution of Web 3</span>
        </span>
        <span className="max-w-[700px]">
          By harnessing the power of blockchain, decentralized applications, and
          smart contracts, Web 3 delivers unprecedented levels of transparency,
          security, and control.
        </span>
        <button className="w-fit button py-2 px-10 rounded-md text-xl">
          About us →
        </button>
      </div>

      {/* 3rd div */}
      <div className="flex flex-col gap-20 py-20 lg:px-20 px-5 bg-[#111]">
        <center className="text-6xl font-bold">
          Powefull <span className="text-gradient">Tools</span> &{" "}
          <span className="text-gradient">Solutions</span>
        </center>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex bg-black flex-col gap-5 rounded-xl items-center p-5">
            <center className="text-xl font-semibold">Decentralization</center>
            <center className="text-sm text-light">
              Empower users with peer-to-peer interactions without
              intermediaries.
            </center>
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e02a8a7630dc7f89b1dc74_vector-2.avif"
              alt=""
              className="h-50 w-50 p-2 flex items-center"
            />
          </div>
          <div className="flex bg-black flex-col gap-5 rounded-xl items-center p-5">
            <center className="text-xl font-semibold">Decentralization</center>
            <center className="text-sm text-light">
              Empower users with peer-to-peer interactions without
              intermediaries.
            </center>
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e02a8acb4d3565ec774331_vector-3.avif"
              alt=""
              className="h-50 w-50 p-2 flex items-center"
            />
          </div>
          <div className="flex bg-black flex-col gap-5 rounded-xl items-center p-5">
            <center className="text-xl font-semibold">Decentralization</center>
            <center className="text-sm text-light">
              Empower users with peer-to-peer interactions without
              intermediaries.
            </center>
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e02a8ac882a0d45d55ff37_vector-4.avif"
              alt=""
              className="h-50 w-50 p-2 flex items-center"
            />
          </div>
          <div className="flex bg-black flex-col gap-5 rounded-xl items-center p-5">
            <center className="text-xl font-semibold">Decentralization</center>
            <center className="text-sm text-light">
              Empower users with peer-to-peer interactions without
              intermediaries.
            </center>
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e02a8ada5d8267f0d0bbf7_vector-5.avif"
              alt=""
              className="h-50 w-50 p-2 flex items-center"
            />
          </div>
        </div>
      </div>

      {/* 4th div */}
      <div className="flex flex-col gap-10 lg:px-20 px-5 py-20 items-center">
        <center className="text-6xl">
          <span className="text-gradient">Pertners</span> & Contributors
        </center>
        <center className="max-w-[700px]">
          Our success is driven by a vibrant ecosystem and strategic
          partnerships that enhance our Web 3 solutions. By collaborating with
          industry leaders, innovators, and like-minded organizations, we create
          a powerful network that delivers value to our users and drives the
          future of decentralized technology.
        </center>
        <div className="flex gap-2 flex-wrap">
          <span className="w-fit  py-2 px-10 rounded-md text-xl font-semibold hover:scale-105 bg-[#FFDF56] text-black cursor-pointer">
            Get Started →
          </span>
          <button className="text-xl button py-2 px-10 rounded-md">
            Became a partner →
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-15 gap-5 p-5">
        <div className="h-40 rounded-2xl border-gradient flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e0317e29b1f5d37731e0ac_client-logo-1.svg"
            alt=""
            className="h-[40px]"
          />
        </div>
        <div className="h-40 rounded-2xl border-gradient flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e032f8a0e9f855df43954c_client-logo-2.svg"
            alt=""
            className="h-[40px]"
          />
        </div>
        <div className="h-40 rounded-2xl border-gradient flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e033009e7034d8b6ae8b43_client-logo-3.svg"
            alt=""
            className="h-[40px]"
          />
        </div>
        <div className="h-40 rounded-2xl border-gradient flex items-center justify-center">
          <img
            src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e03309fdde4550e8daa30d_client-logo-4.svg"
            alt=""
            className="h-[40px]"
          />
        </div>
      </div>

      {/* 6th div */}

      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-20 py-20 lg:px-20 px-5 items-center justify-center ">
        <div className="flex flex-col gap-10 items-center">
          <span className="text-4xl">
            Advance with <span className="text-gradient">Web 3 Solutions</span>
          </span>
          <span className="text-sm text-light">
            By integrating cutting-edge technology with user-friendly design, we
            help you navigate the complex landscape of Web 3 with confidence.
          </span>
        </div>
        <div className="flex w-full items-center justify-center">
            <img
          src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e035e832d718796d054308_vector-6.avif"
          alt=""
          className="md:w-70 w-full items-center"
        />
        </div>
        

        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-3  items-center">
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e03664633f5ebf4af74a8c_icon-4.svg"
              alt=""
              className="w-4"
            />
            <span className="font-bold text-lg">Etherium</span>
          </div>
          <div className="flex gap-3 font-semibold text-lg items-center">
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e03664633f5ebf4af74a8c_icon-4.svg"
              alt=""
              className="w-4"
            />
            <span>Binance Smart Chain (BSC)</span>
          </div>
          <div className="flex gap-3 font-semibold text-lg items-center">
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e03664633f5ebf4af74a8c_icon-4.svg"
              alt=""
              className="w-4"
            />
            <span>Polygon</span>
          </div>
          <div className="flex gap-3 font-semibold text-lg items-center">
            <img
              src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e03664633f5ebf4af74a8c_icon-4.svg"
              alt=""
              className="w-4"
            />
            <span>File Coin</span>
          </div>
        </div>
      </div>

      {/* 7th div */}

      <div className="flex flex-col gap-10 py-20 lg:px-20 px-5">
        <span className="text-6xl font-semibold">
          <span className="text-gradient">Case Study</span> Highlight
        </span>

        <div className="flex lg:flex-row flex-col gap-5">
          <div className="flex flex-col gap-10 lg:w-1/2 w-full md:p-10 p-5 rounded-2xl border-gradient">
            <img
              src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/66e12751675b6fa204c92e25_case-1.jpg"
              alt=""
              className="w-full rounded-2xl"
            />

            <div className="flex gap-5">
              <img
                src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/672dc4f21889edcd50f6f5a2_icon-18.svg"
                alt=""
                className="w-20"
              />

              <div className="flex flex-col gap-3">
                <span className="text-4xl font-semibold">
                  Tokenizing Real Estate - Revolutionizing Property Investment
                </span>
                <span className="text-md">
                  Transforming real estate with tokenization, making property
                  investment.
                </span>
                <span className="w-fit py-2 px-10 text-lg font-semibold  border-gradient rounded-full">
                  View Details →
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 lg:w-1/2 w-full md:p-10 p-5 rounded-2xl border-gradient">
            <img
              src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/66e127593ce5e024a67c2b67_case-2.jpg"
              alt=""
              className="w-full rounded-2xl"
            />

            <div className="flex gap-5">
              <img
                src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/672dc4f21889edcd50f6f5a2_icon-18.svg"
                alt=""
                className="w-20"
              />

              <div className="flex flex-col gap-3">
                <span className="text-4xl font-semibold">
                  Tokenizing Real Estate - Revolutionizing Property Investment
                </span>
                <span className="text-md">
                  Transforming real estate with tokenization, making property
                  investment.
                </span>
                <span className="w-fit py-2 px-10 text-lg font-semibold border-gradient rounded-full">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 8th div */}
      <div className="flex flex-col gap-10 py-20 lg:px-20 px-5">
        <span className="text-6xl font-bold">
          What our client <spant className="text-gradient">Clients</spant> says
        </span>

        <div className="flex flex-wrap w-full gap-5 justify-around items-center">
          
          <div className="w-70 h-64 flex flex-col gap-2 bg-white/2 border border-white/10  rounded-xl p-5">
            <div className="flex gap-3">
              <img
                src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7c45c3d7856003f7112a4_team-1.avif"
                alt=""
                className="rounded-full w-17 h-17"
              />
              <div className="flex flex-col ">
                <span className="text-sm font-semibold">Alex Johnson</span>
                <span className="text-sm">CEO, CryptoInnovate</span>
              </div>
            </div>
            <span className="text-lg cursive">
              Webee3 transformed our business operations with its seamless
              blockchain integration.
            </span>
          </div>
          <div className="w-70 h-64 flex flex-col gap-2 bg-white/2 border border-white/10  rounded-xl p-5">
            <div className="flex gap-3">
              <img
                src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7c35d1fa851a6f7725a2a_team-2.avif"
                alt=""
                className="rounded-full w-17 h-17"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Alex Johnson</span>
                <span className="text-sm">CEO, CryptoInnovate</span>
              </div>
            </div>
            <span className="text-lg cursive">
              Webee3 transformed our business operations with its seamless
              blockchain integration.
            </span>
          </div>
          <div className="w-70 h-64 flex flex-col gap-2 bg-white/2 border border-white/10  rounded-xl p-5">
            <div className="flex gap-3">
              <img
                src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7c35d8eeeadb3d67d74f4_team-3.avif"
                alt=""
                className="rounded-full w-17 h-17"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Alex Johnson</span>
                <span className="text-sm">CEO, CryptoInnovate</span>
              </div>
            </div>
            <span className="text-lg cursive">
              Webee3 transformed our business operations with its seamless
              blockchain integration.
            </span>
          </div>
          <div className="w-70 h-64 flex flex-col gap-2 bg-white/2 border border-white/10  rounded-xl p-5">
            <div className="flex gap-3">
              <img
                src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e12e8ead42c9a08ad71c18_about.avif"
                alt=""
                className="rounded-xl w-full"
              />
            </div>
            <span className="text-lg cursive">
              Webee3 transformed our business operations with its seamless
              blockchain integration.
            </span>
          </div>
          <div className="w-70 h-64 flex flex-col gap-2 bg-white/2 border border-white/10  rounded-xl p-5">
            <div className="flex gap-3">
              <img
                src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7c45c3d7856003f7112a4_team-1.avif"
                alt=""
                className="rounded-full w-17 h-17"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Alex Johnson</span>
                <span className="text-sm">CEO, CryptoInnovate</span>
              </div>
            </div>
            <span className="text-lg cursive">
              Webee3 transformed our business operations with its seamless
              blockchain integration.
            </span>
          </div>
        </div>
      </div>

      {/* 9th div */}
      <div className="flex lg:flex-row flex-col gap-10 py-20 lg:px-20 px-5 items-center">
        <center className="text-6xl font-bold">Are you ready for <span className="text-gradient">Next Generation of Web ?</span></center>

        <div className="flex flex-col gap-5 lg:w-1/2 w-full">
        <span className="text-lg">Unlock the potential of decentralized technology and take your business to the next level with our innovative Web 3 solutions. Whether you’re looking to enhance security, streamline operations, or explore new revenue streams, our team of experts is here to help you navigate the Web 3 landscape.</span>
        <button className="py-3 px-10 button rounded-xl">View Pricing</button>
        </div>
      </div>

      {/* 10th div */}
      <div className="flex flex-wrap items-center md:justify-center gap-10 py-20 lg:px-20 px-5">
        <img src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66d2ed2937b0c44d925aebbd_webee3.svg" alt="" className="w-70 h-full" />

        <div className="flex flex-col gap-3 items-center justify-center ">
            <span className="text-3xl font-semibold">Get the latest blockchain news delivered weekly</span>
            <div className="flex gap-2 w-full">
                <input type="email" className="py-3 px-5 rounded-xl bg-white/3 w-full border border-white/10 outline-0" placeholder="Enter Email " />
                <button className="py-3 px-5 button rounded-xl">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
