import React from "react";

const Footer = () => {
  return (
    <footer class="bg-white dark:bg-gray-900 m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="w-12  object-top object-cover"
              src={require("../imgs/logo.png")}
              alt="클럽 이미지"
            />
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              {/* <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a> */}
            </li>
            <li>
              <a
                href="https://sites.google.com/view/woori-terms-and-conditions/home"
                class="hover:underline me-4 md:me-6"
                target="_blank"
              >
                우리 이용약관
              </a>
            </li>
            <li>
              <a
                href="https://sites.google.com/view/woori-privacy-policy/home"
                class="hover:underline me-4 md:me-6"
                target="_blank"
              >
                개인정보 처리방침
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {/* © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved. */}
          대표자 박진 | 사업자등록번호 203-45-68390 | 대표메일
          <a href="mailto:woorigue@gmail.com" className="underline ml-1">
            woorigue@gmail.com
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
