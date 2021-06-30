import Link from "next/link";
import { HeaderNav } from "../constants/nav_constants";
import { padLeadingZeros } from "../helpers/arrayHelper";

const Header = ({ locale }) => {
  return (
    <header className="_mainElement">
      <Link href="/">
        <a
          className="main-logo zero-font _show _curTL2"
          style={{ visibility: "hidden" }}
        >
          <svg
            width="101"
            height="47"
            viewBox="0 0 101 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="svg-fill">
              <path d="M94.2035 30.3228C93.0832 29.812 91.3144 29.5588 88.9081 29.6087C87.172 29.645 85.1132 29.8405 82.7357 30.2118C80.6456 30.5378 78.2766 31.0103 75.6967 31.6293C75.6356 32.2272 75.5815 32.7538 75.5475 33.0622C75.4714 33.7063 75.394 34.3215 75.3147 34.9069H75.3124C77.3801 35.4331 79.7533 35.6523 82.4223 35.733C85.3398 35.8202 88.1739 35.5226 90.459 35.0049C91.7431 34.7152 92.8579 34.3519 93.7208 33.9521C94.9223 33.3924 95.6318 32.7566 95.6318 32.1204C95.6318 31.362 95.1509 30.751 94.2035 30.3228ZM74.5031 16.1408C74.2755 10.5659 73.4485 5.88848 71.3299 5.31662C70.8579 5.19255 70.3262 5.26765 69.7254 5.5769C67.7626 6.58907 66.4972 8.16469 65.7541 10.0957C65.5065 10.7478 65.311 11.4344 65.172 12.1574C64.93 13.4009 64.8418 14.7442 64.8726 16.1408C64.9309 18.9207 65.4608 21.933 66.1833 24.8622C66.1781 24.8617 66.1744 24.8599 66.1697 24.858C71.7031 27.2616 72.3589 30.5038 68.2197 30.0313C68.5938 30.6246 69.0038 31.1586 69.4469 31.6391C69.4833 31.6754 69.5183 31.7128 69.5556 31.7501C71.1317 31.3196 72.6784 30.9259 74.1789 30.5695C74.2302 29.7267 74.2708 29.0079 74.2988 28.5405C74.5087 24.761 74.6673 20.2095 74.5031 16.1408ZM62.5259 26.3315C62.2713 26.6426 62.1075 27.1123 62.0875 27.7998C63.2424 27.9654 64.4491 28.1688 65.7145 28.4192C65.7145 28.4192 65.7154 28.4202 65.7159 28.4202C65.3773 27.6562 65.0694 26.8343 64.7858 25.9485C63.9742 25.7358 63.0544 25.6878 62.5259 26.3315ZM52.1486 29.1175C50.1406 29.5667 49.1868 30.327 49.1868 31.1027C49.1882 31.8019 49.9555 32.5099 51.4303 33.0258C52.8418 33.523 54.8955 33.8378 57.5369 33.7949C58.4665 33.7809 59.4717 33.7203 60.5464 33.6046C60.1378 32.0141 59.9134 30.6768 59.8374 29.5616C59.8197 29.3045 59.8089 29.0606 59.8057 28.8278C58.9801 28.763 58.2053 28.7248 57.4814 28.7089C55.236 28.6581 53.4649 28.8223 52.1486 29.1175ZM67.5322 28.7924C71.3612 29.5382 68.3042 27.519 66.6982 26.7102C66.945 27.464 67.2225 28.1571 67.5322 28.7924ZM63.4145 33.1998C64.8404 32.9502 66.3642 32.6153 67.98 32.1801C67.9529 32.1461 67.9245 32.1144 67.8974 32.0817C67.3251 31.3709 66.8064 30.5793 66.3367 29.6992C66.3381 29.701 66.3367 29.701 66.3381 29.701C64.8511 29.43 63.4695 29.2206 62.1845 29.0639C62.2181 29.2747 62.261 29.4977 62.3123 29.7327C62.5185 30.6665 62.8739 31.8088 63.4145 33.1998ZM67.355 40.3764C69.1097 42.5257 71.1802 43.6008 72.6192 39.8857C73.0413 38.8021 73.317 37.7377 73.5931 36.1551C73.5954 36.1551 73.6001 36.1551 73.6038 36.1532C71.8621 35.4774 70.3751 34.5767 69.1074 33.3863C67.3181 33.905 65.6207 34.3299 64.0157 34.669C64.4654 35.6943 65.7905 38.4612 67.355 40.3764ZM73.8375 34.4577C73.907 33.9321 73.9676 33.3723 74.0315 32.7823C74.0502 32.5276 74.0684 32.2734 74.0852 32.0248C73.0474 32.2911 71.9606 32.5789 70.8495 32.8868C70.8481 32.8886 70.8462 32.8886 70.843 32.89C71.7357 33.5491 72.7344 34.0617 73.8375 34.4577ZM100.92 32.675C100.7 33.6998 99.5484 34.6826 97.7681 35.5156C96.4947 36.1145 94.9013 36.6365 93.1065 37.0353C89.9151 37.7513 86.0735 38.0899 82.2623 37.8208C79.5014 37.6272 77.1054 37.262 75.0325 36.6421C75.0381 36.6444 75.0428 36.6481 75.0498 36.6491C74.657 38.9677 74.1869 40.7957 73.664 42.2053C71.5739 47.837 68.5738 46.8235 65.9995 43.9726C63.6356 41.3638 61.6304 37.206 61.0007 35.2269C58.7459 35.5814 56.709 35.7582 54.8932 35.7885C51.3604 35.8435 48.6709 35.3566 46.8387 34.5874C44.9235 33.7833 43.9473 32.675 43.9464 31.5574C43.945 30.2836 45.2174 29.0018 47.8024 28.1739C49.497 27.631 51.7643 27.2788 54.6114 27.2504C56.1871 27.235 57.9413 27.3185 59.8738 27.5218C60.0058 26.4873 60.3192 25.7508 60.7386 25.2391C61.6882 24.0739 63.1803 24.0459 64.3077 24.253C64.3021 24.2512 64.2961 24.2493 64.2905 24.247C63.7382 22.2306 63.0045 19.3051 62.7447 16.1408C62.6113 14.4807 62.6085 12.7502 62.8305 11.051C62.963 10.0645 63.1692 9.0873 63.4695 8.14323C64.3642 5.31896 66.1044 2.75262 69.1815 0.938181C70.3831 0.23013 71.4116 -0.0562627 72.2838 0.00903844C76.2247 0.313155 77.0606 7.81673 76.8525 16.1408C76.7485 20.2739 76.3889 24.6057 76.0284 28.3675C75.9868 28.7691 75.9183 29.4519 75.8441 30.187C78.257 29.6502 80.5822 29.2099 82.7357 28.8722C85.9905 28.3675 88.9333 28.096 91.4492 28.062C94.9433 28.0176 97.6328 28.4388 99.2546 29.3395C100.625 30.104 101.232 31.2118 100.92 32.675Z"></path>
              <path d="M18.4164 24.745V16.344C18.6659 16.3118 18.894 16.3006 19.0675 16.3006C20.055 16.3006 20.8367 16.6808 20.8367 18.0591V22.2813H26.6546C28.5539 22.2813 28.977 20.4249 28.977 18.9383V16.2568C29.2377 16.2246 29.4658 16.2139 29.6393 16.2139C30.6272 16.2139 31.4085 16.594 31.4085 17.9616V19.0036C31.4085 21.9557 30.0078 24.4413 26.5786 24.4413H20.8041V24.647C20.8041 27.4914 18.8068 29.1081 16.2885 29.1081C14.7255 29.1081 12.4679 28.7932 12.8369 27.7078L13.2273 26.482C13.7921 26.6984 14.9428 26.7964 16.0063 26.7964C17.8301 26.7964 18.4164 25.8304 18.4164 24.745Z"></path>
              <path d="M14.4758 12.0685V24.4422C14.389 24.4524 14.1176 24.4524 14.0093 24.4524C12.305 24.4524 12.0443 23.4762 12.0443 21.9449V10.353C12.2943 10.3096 12.5443 10.2998 12.7066 10.2998C13.694 10.2998 14.4758 10.6902 14.4758 12.0685Z"></path>
              <path d="M32.4502 13.6415C32.4502 14.3906 31.842 14.9979 31.0933 14.9979C30.3228 14.9979 29.715 14.3906 29.715 13.6415C29.715 12.8709 30.3228 12.2627 31.0933 12.2627C31.842 12.2627 32.4502 12.8709 32.4502 13.6415Z"></path>
              <path d="M30.8765 10.7655C30.8765 11.5141 30.2682 12.1224 29.5201 12.1224C28.7491 12.1224 28.1413 11.5141 28.1413 10.7655C28.1413 9.99495 28.7491 9.38672 29.5201 9.38672C30.2682 9.38672 30.8765 9.99495 30.8765 10.7655Z"></path>
              <path d="M29.3023 13.6415C29.3023 14.3906 28.6946 14.9979 27.9459 14.9979C27.1749 14.9979 26.5671 14.3906 26.5671 13.6415C26.5671 12.8709 27.1749 12.2627 27.9459 12.2627C28.6946 12.2627 29.3023 12.8709 29.3023 13.6415Z"></path>
              <path d="M3.24487 24.4415C1.79052 24.4415 -0.282794 24.1589 0.0320508 23.1388L0.390274 21.9988C0.835722 22.1625 1.62773 22.26 2.46312 22.2815C2.35537 21.6406 2.27888 21.0328 2.27888 20.5552C2.27888 18.3522 2.9846 16.5723 5.828 16.5723C7.39103 16.5723 9.62666 16.8764 9.2801 17.9716L8.92187 19.1008C8.37848 18.8951 7.27162 18.7435 6.24033 18.7533C4.79717 18.765 4.37411 19.4376 4.37411 20.6531C4.37411 21.12 4.43848 21.6737 4.54716 22.2815H6.57709C7.56501 22.2815 8.62802 22.2054 9.1495 21.9988L9.50772 23.15C9.8221 24.1589 7.76045 24.4415 6.31682 24.4415H3.24487Z"></path>
              <path d="M34.6116 21.9448V10.3524C34.8616 10.3086 35.1111 10.2979 35.2734 10.2979C36.2618 10.2979 37.0431 10.6892 37.0431 12.0675V24.4412C36.9559 24.4514 36.6849 24.4514 36.5762 24.4514C34.8718 24.4514 34.6116 23.4747 34.6116 21.9448Z"></path>
              <path d="M34.948 29.1086C34.2754 29.1086 33.2982 28.9136 33.4722 28.4145L33.6783 27.8068C33.8845 27.8823 34.2427 27.9584 34.4923 27.9691C34.4596 27.7415 34.4274 27.5134 34.4274 27.3399C34.4274 26.33 34.7633 25.5156 36.0553 25.5156C36.8044 25.5156 37.8026 25.6574 37.6403 26.2652L37.477 26.8622C37.1617 26.7535 36.6412 26.6561 36.2396 26.6561C35.7078 26.6668 35.5446 26.928 35.5446 27.3716C35.5446 27.5456 35.5562 27.7298 35.5996 27.9793H36.3916C36.7932 27.9793 37.2601 27.9154 37.5316 27.8068L37.7485 28.4145C37.922 28.9136 36.956 29.1086 36.2829 29.1086H34.948Z"></path>
              <path d="M19.0178 40.5237C19.0178 38.6952 18.2529 38.1406 16.7789 38.1406C16.2467 38.1406 15.5933 38.219 14.8838 38.3412V46.0542C14.7952 46.0654 14.5181 46.0654 14.4071 46.0654C12.6673 46.0654 12.4014 45.0677 12.4014 43.5056V31.6693C12.6561 31.625 12.9112 31.6143 13.0773 31.6143C14.0857 31.6143 14.8838 32.0126 14.8838 33.4203V35.9255C15.6264 35.8033 16.3358 35.7142 16.89 35.7142C19.4386 35.7142 21.4997 36.5347 21.4997 39.8142V46.0542C21.4121 46.0654 21.1341 46.0654 21.0235 46.0654C19.2837 46.0654 19.0178 45.0677 19.0178 43.5056V40.5237Z"></path>
              <path d="M7.55438 46.0445C5.5375 46.0445 4.58411 44.9358 4.58411 42.8853V32.4129C4.83925 32.3681 5.09439 32.3564 5.26044 32.3564C6.26841 32.3564 7.06695 32.7557 7.06695 34.1639V36.0697H10.8572V38.3753H7.06695V41.9996C7.06695 42.9194 7.08934 43.6839 7.84264 43.6839C8.9285 43.6839 10.1035 43.5841 10.68 43.362L11.0788 44.6144C11.4552 45.7227 9.15052 46.0445 7.55438 46.0445Z"></path>
              <path d="M23.0513 43.5058V36.3348C24.2925 36.0913 25.9436 35.9141 26.9745 35.9141H28.8477V38.2854H27.4288C27.0412 38.2854 25.8326 38.3629 25.5332 38.4627V46.0544C25.4455 46.0661 25.1675 46.0661 25.0574 46.0661C23.3171 46.0661 23.0513 45.0688 23.0513 43.5058Z"></path>
              <path d="M2.84832 37.8212V46.0552C2.7597 46.0668 2.4831 46.0668 2.37209 46.0668C0.631348 46.0668 0.365479 45.0696 0.365479 43.5066V36.0702C0.621086 36.0254 0.875761 36.0146 1.04181 36.0146C2.05025 36.0146 2.84832 36.413 2.84832 37.8212Z"></path>
              <path d="M2.79317 33.2324C2.79317 33.9969 2.17234 34.6182 1.40785 34.6182C0.620505 34.6182 0.000610352 33.9969 0.000610352 33.2324C0.000610352 32.4456 0.620505 31.8252 1.40785 31.8252C2.17234 31.8252 2.79317 32.4456 2.79317 33.2324Z"></path>
              <path d="M35.6724 43.7492C35.1407 43.9274 34.4643 44.0379 33.844 44.0379C32.6247 44.0379 31.6606 43.7161 31.6606 42.7968C31.6606 41.8322 32.7245 41.5225 33.9876 41.5225C34.531 41.5225 35.2064 41.6106 35.6724 41.7323V43.7492ZM33.5002 35.7148C31.9045 35.7148 29.5989 36.0362 29.9758 37.144L30.3751 38.3969C30.9516 38.1753 32.1256 38.0755 33.2124 38.0755C35.074 38.0755 35.6724 38.4631 35.6724 39.5713V39.7043C34.9303 39.6045 34.254 39.5713 33.7218 39.5713C31.0071 39.5713 29.0672 40.7239 29.0672 42.9516C29.0672 45.4013 31.3056 46.2764 33.8104 46.2764C35.2843 46.2764 36.8917 45.9886 38.1548 45.4895V39.6716C38.1548 36.7671 36.0712 35.7148 33.5002 35.7148Z"></path>
            </g>
          </svg>
          Home
        </a>
      </Link>

      <div
        className="toggle zero-font mg _mainElement _curTL2"
        data-dist="2"
        style={{ visibility: "hidden" }}
      >
        <i>-</i>
        <i>-</i>
        <i>-</i>
      </div>

      <nav>
        <ul className="flex _mainElement" style={{ visibility: "hidden" }}>
          {HeaderNav.map((link, key) => (
            <li key={`header_link-${key}`}>
              <Link href={link.href}>
                <a className="_curTL2">{link.name}</a>
              </Link>

              <span>{padLeadingZeros(key + 1, 2)}.</span>
            </li>
          ))}
        </ul>
        <i className="full_bg"></i>
        <div className="inner_modes_set flex">
          <div className="in_mode flex active _curTL2" data-id="dark">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="M18.7,12.1c-0.2,0-0.3,0-0.5,0.1c-0.5,0.5-1.2,0.8-1.8,1.1c-0.6,0.3-1.4,0.4-2.1,0.4c-1.7,0-3.2-0.7-4.3-1.8c-1.1-1.1-1.8-2.6-1.8-4.3c0-0.7,0.1-1.4,0.3-2c0.2-0.7,0.6-1.3,1-1.8C9.7,3.5,9.7,3.2,9.5,3C9.3,2.9,9.1,2.8,9,2.9c-1.8,0.5-3.3,1.5-4.4,3c-1.1,1.4-1.7,3.1-1.7,5c0,2.3,0.9,4.3,2.4,5.8c1.5,1.5,3.6,2.4,5.8,2.4c1.9,0,3.7-0.7,5.1-1.8c1.4-1.1,2.5-2.7,2.9-4.6C19.2,12.5,19,12.2,18.7,12.1z M15.6,16.5c-1.2,1-2.7,1.5-4.4,1.5c-2,0-3.8-0.8-5.1-2.1C4.8,14.6,4,12.8,4,10.9c0-1.6,0.5-3.1,1.5-4.4c0.6-0.8,1.5-1.5,2.4-2C7.8,4.7,7.6,4.9,7.6,5.2C7.3,5.9,7.2,6.7,7.2,7.6c0,2,0.8,3.8,2.1,5.1c1.3,1.3,3.1,2.1,5.1,2.1c0.9,0,1.7-0.1,2.5-0.4c0.3-0.1,0.5-0.2,0.8-0.3C17.1,15,16.4,15.8,15.6,16.5z"></path>
              </g>
            </svg>
            <span>Dark Mode</span>
          </div>

          <div className="in_mode flex _curTL2" data-id="light">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="currentColor">
                <path d="M15.1705 7.22956C14.1631 6.22216 12.7409 5.57031 11.2002 5.57031C9.65943 5.57031 8.23721 6.19253 7.22981 7.22956C6.22241 8.23697 5.57056 9.65918 5.57056 11.1999C5.57056 12.7407 6.22241 14.1629 7.22981 15.1703C8.23721 16.1777 9.65943 16.8295 11.2002 16.8295C12.7409 16.8295 14.1631 16.2073 15.1705 15.1703C16.1779 14.1629 16.8298 12.7407 16.8298 11.1999C16.8298 9.65918 16.2075 8.23697 15.1705 7.22956ZM14.1039 14.1036C13.3631 14.8443 12.3261 15.2888 11.2002 15.2888C10.0742 15.2888 9.03721 14.8443 8.29647 14.1036C7.55573 13.3629 7.11129 12.3258 7.11129 11.1999C7.11129 10.074 7.55573 9.03696 8.29647 8.29623C9.03721 7.55549 10.0742 7.11105 11.2002 7.11105C12.3261 7.11105 13.3631 7.55549 14.1039 8.29623C14.8446 9.03696 15.289 10.074 15.289 11.1999C15.289 12.3258 14.8446 13.3629 14.1039 14.1036Z"></path>
                <path d="M21.6297 10.4297H19.3482C18.9334 10.4297 18.5778 10.7852 18.5778 11.2001C18.5778 11.6149 18.9334 11.9704 19.3482 11.9704H21.6297C22.0445 11.9704 22.4 11.6149 22.4 11.2001C22.4 10.7852 22.0445 10.4297 21.6297 10.4297Z"></path>
                <path d="M11.2001 18.5776C10.7853 18.5776 10.4297 18.9332 10.4297 19.348V21.6295C10.4297 22.0443 10.7853 22.3998 11.2001 22.3998C11.6149 22.3998 11.9705 22.0443 11.9705 21.6295V19.348C11.9705 18.9332 11.6149 18.5776 11.2001 18.5776Z"></path>
                <path d="M19.1111 18.0447L17.4814 16.4151C17.2148 16.1188 16.7111 16.1188 16.4148 16.4151C16.1185 16.7114 16.1185 17.1855 16.4148 17.4818L18.0444 19.1114C18.3407 19.4077 18.8148 19.4077 19.1111 19.1114C19.4074 18.8151 19.4074 18.341 19.1111 18.0447Z"></path>
                <path d="M11.2001 0C10.7853 0 10.4297 0.355554 10.4297 0.770367V3.05184C10.4297 3.46665 10.7853 3.82221 11.2001 3.82221C11.6149 3.82221 11.9705 3.46665 11.9705 3.05184V0.770367C11.9705 0.355554 11.6149 0 11.2001 0Z"></path>
                <path d="M19.1407 3.28863C18.8444 2.99233 18.3703 2.99233 18.074 3.28863L16.4444 4.91825C16.1481 5.21454 16.1481 5.68862 16.4444 5.98491C16.7111 6.28121 17.2148 6.28121 17.5111 5.98491L19.1407 4.35529C19.437 4.05899 19.437 3.58492 19.1407 3.28863Z"></path>
                <path d="M3.0519 10.4297H0.770428C0.355615 10.4297 6.10352e-05 10.7852 6.10352e-05 11.2001C6.10352e-05 11.6149 0.325986 11.9704 0.770428 11.9704H3.0519C3.46671 11.9704 3.82227 11.6149 3.82227 11.2001C3.82227 10.7852 3.46671 10.4297 3.0519 10.4297Z"></path>
                <path d="M5.95561 16.4151C5.68895 16.1188 5.18525 16.1188 4.88895 16.4151L3.25933 18.0447C2.96304 18.341 2.96304 18.8151 3.25933 19.1114C3.55563 19.4077 4.0297 19.4077 4.32599 19.1114L5.95561 17.4818C6.25191 17.1855 6.25191 16.7114 5.95561 16.4151Z"></path>
                <path d="M5.95561 4.91825L4.32599 3.28863C4.0297 2.99233 3.55563 2.99233 3.25933 3.28863C2.96304 3.58492 2.96304 4.05899 3.25933 4.35529L4.88895 5.98491C5.18525 6.28121 5.65932 6.28121 5.95561 5.98491C6.25191 5.68862 6.25191 5.21454 5.95561 4.91825Z"></path>
              </g>
            </svg>
            <span>Light Mode</span>
          </div>
        </div>
      </nav>

      <a
        href="#"
        rel="noopener"
        className="search-btn zero-font _mainElement _curTL2"
        style={{ visibility: "hidden" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="svg-fill"
            d="M28.1273 26.2417L21.2656 19.38C22.4799 17.7721 23.2 15.7702 23.2 13.6C23.2 8.29807 18.9019 4 13.6 4C8.29807 4 4 8.29807 4 13.6C4 18.9019 8.29807 23.2 13.6 23.2C15.7702 23.2 17.7721 22.4799 19.38 21.2656L26.2417 28.1273L28.1273 26.2417ZM20.5333 13.6C20.5333 17.4292 17.4292 20.5333 13.6 20.5333C9.77083 20.5333 6.66667 17.4292 6.66667 13.6C6.66667 9.77083 9.77083 6.66667 13.6 6.66667C17.4292 6.66667 20.5333 9.77083 20.5333 13.6Z"
          ></path>
        </svg>
        Search
      </a>
    </header>
  );
};

export default Header;
