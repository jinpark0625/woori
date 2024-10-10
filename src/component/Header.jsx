import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const Header = () => {
  return (
    <div className="bg-white py-24 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-3xl leading-snug font-[GmarketSansBold] tracking-tight text-gray-900 sm:text-4xl sm:leading-snug">
            우리들의 리그, 우리들의 이야기:
            <br />
            축구와 함께 성장하는 공간
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            우리는 단순한 축구 매칭 플랫폼을 넘어, 사용자들이 자신만의 리그를
            만들고 성장할 수 있는 공간이 되기를 바랍니다. 이곳에서 모든 사용자는
            주인공이며, 각자의 이야기가 존중받습니다.
            <br />
            우리는 축구를 통해 사람들을 연결하고, 이를 통해 삶의 가치를 높이며,
            커뮤니티를 통해 더 나은 사회를 만들어가길 희망합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
