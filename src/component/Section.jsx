const Section = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-3xl leading-snug font-[GmarketSansBold] tracking-tight text-gray-950 sm:text-4xl sm:leading-snug">
          팀 관리부터 경기 매칭까지,
          <br /> 손쉽게 해결하세요.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-[WantedSans-SemiBold] tracking-tight text-gray-950 max-lg:text-center">
                  팀 만들기 및 관리
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  손쉽게 팀을 만들고 멤버를 관리할 수 있습니다.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-[#2A2C2E] bg-[#16181A] shadow-2xl">
                  <img
                    className="size-full object-top object-cover"
                    src={require("../imgs/club.png")}
                    alt="클럽 이미지"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-[WantedSans-SemiBold] tracking-tight text-gray-950 max-lg:text-center">
                  경기 매칭 시스템
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  수준에 맞는 상대팀을 쉽게 찾고 매칭할 수 있습니다.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  src={require("../imgs/match.png")}
                  alt="클럽 이미지"
                  className="w-full max-lg:max-w-xs shadow-xl  shadow-gray-100 border-gray-200 border rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-[WantedSans-SemiBold] tracking-tight text-gray-950 max-lg:text-center">
                  용병 찾기 및 모집
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  부족한 인원을 빠르고 쉽게 채울 수 있습니다.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  src={require("../imgs/guest.png")}
                  alt="클럽 이미지"
                  className="w-full max-lg:max-w-xs shadow-xl  shadow-gray-100 border-gray-200 border rounded-lg overflow-hidden"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-[WantedSans-SemiBold] tracking-tight text-gray-950 max-lg:text-center">
                  {/* 개인 및 팀 프로필 */}
                  실시간 채팅
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  다른 사용자와 빠르게 소통하며 경기 일정과 용병 모집을
                  효율적으로 조율할 수 있습니다.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-[#A2A4A6] bg-[#202224] shadow-2xl">
                  <img
                    className="size-full object-top object-cover"
                    src={require("../imgs/chat.png")}
                    alt="클럽 이미지"
                  />
                </div>
              </div>

              {/* <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden shadow-2xl">
                  <img
                    src={require("../imgs/match_info.png")}
                    alt="클럽 이미지"
                    className="size-full object-center"
                  />
                </div>
              </div> */}
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
