const Hero = () => {
  const handleClick = (type) => {
    if (type === "ios") {
      window.open(
        "https://apps.apple.com/kr/app/%EC%9A%B0%EB%A6%AC/id6670238036",
        "_blank"
      );
    } else {
      alert("앱이 곧 출시됩니다! 잠시만 기다려 주세요.");
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <img
        src={require("../imgs/bg.png")}
        alt="배경이미지"
        className="absolute w-full h-full inset-0 object-cover -z-10"
      />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 text-white">
            {/* <p>WOORI</p> */}
            <img
              className="w-36  object-top object-cover"
              src={require("../imgs/web_logo.png")}
              alt="클럽 이미지"
            />
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            {/* <h1 className="text-balance text-4xl leading-snug font-[WantedSans-Bold] tracking-tight text-white sm:text-5xl sm:leading-snug"> */}
            <h1 className="text-balance text-4xl leading-snug font-[GmarketSansBold] tracking-tight text-white sm:text-5xl sm:leading-snug">
              {/* 당신의 축구 이야기가 시작되는 곳 */}
              축구로 연결되는 우리,
              <br />
              우리만의 이야기
            </h1>
          </div>
          <div className="flex flex-row gap-x-5 mt-5 justify-center flex-wrap">
            <button
              type="button"
              class="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black h-14 rounded-xl bg-white"
              onClick={() => handleClick("ios")}
            >
              <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30">
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-2xl font-semibold">
                  App Store
                </div>
              </div>
            </button>
            <button
              type="button"
              class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
              onClick={() => handleClick("aos")}
            >
              <div class="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                  <path
                    fill="#FFD400"
                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                  ></path>
                  <path
                    fill="#FF3333"
                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#48FF48"
                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                  ></path>
                  <path
                    fill="#3BCCFF"
                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                  ></path>
                </svg>
              </div>
              <div>
                <div class="text-xs">GET IT ON</div>
                <div class="-mt-1 font-sans text-xl font-semibold">
                  Google Play
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
