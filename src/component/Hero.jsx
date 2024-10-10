const Hero = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* <div className="bg-black absolute inset-0 w-full h-full z-0 opacity-20" /> */}
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
            <p>WOORI</p>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
