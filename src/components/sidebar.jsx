import React from 'react';

function Sidebar() {
  return (
    <div className="flex flex-no-wrap h-screen">
      <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between sm:flex">
        <div className="px-8">
          <div className="h-16 w-full flex items-center">
            <svg
              width="192"
              height="36"
              viewBox="0 0 192 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5195 14.3633H10.5273V12.957C10.5273 11.7591 10.4557 11.0039 10.3125 10.6914C10.1823 10.3659 9.84375 10.2031 9.29688 10.2031C8.85417 10.2031 8.52214 10.3529 8.30078 10.6523C8.07943 10.9388 7.96875 11.375 7.96875 11.9609C7.96875 12.7552 8.02083 13.3411 8.125 13.7188C8.24219 14.0833 8.57422 14.487 9.12109 14.9297C9.68099 15.3724 10.8203 16.0169 12.5391 16.8633C14.8307 17.9831 16.3346 19.0378 17.0508 20.0273C17.7669 21.0169 18.125 22.4557 18.125 24.3438C18.125 26.4531 17.8516 28.0482 17.3047 29.1289C16.7578 30.1966 15.8398 31.0234 14.5508 31.6094C13.2747 32.1823 11.7318 32.4688 9.92188 32.4688C7.91667 32.4688 6.19792 32.1562 4.76562 31.5312C3.34635 30.9062 2.36979 30.0599 1.83594 28.9922C1.30208 27.9245 1.03516 26.3099 1.03516 24.1484V22.8984H8.02734V24.5391C8.02734 25.9323 8.11198 26.8372 8.28125 27.2539C8.46354 27.6706 8.8151 27.8789 9.33594 27.8789C9.89583 27.8789 10.2865 27.7422 10.5078 27.4688C10.7292 27.1823 10.8398 26.5898 10.8398 25.6914C10.8398 24.4544 10.6966 23.6797 10.4102 23.3672C10.1107 23.0547 8.58073 22.1302 5.82031 20.5938C3.5026 19.2917 2.08984 18.1133 1.58203 17.0586C1.07422 15.9909 0.820312 14.7279 0.820312 13.2695C0.820312 11.1992 1.09375 9.67578 1.64062 8.69922C2.1875 7.70964 3.11198 6.94792 4.41406 6.41406C5.72917 5.88021 7.2526 5.61328 8.98438 5.61328C10.7031 5.61328 12.1615 5.83464 13.3594 6.27734C14.5703 6.70703 15.4948 7.27995 16.1328 7.99609C16.7839 8.71224 17.1745 9.3763 17.3047 9.98828C17.4479 10.6003 17.5195 11.5573 17.5195 12.8594V14.3633ZM45.7227 6.08203L42.5781 32H34.0039C33.5352 28.8359 32.9948 24.6693 32.3828 19.5C32.1745 21.7656 31.8815 24.0573 31.5039 26.375L30.625 32H22.0508L18.7109 6.08203H25.5078C25.5599 6.75911 26.1328 11.7005 27.2266 20.9062C27.3047 19.9688 27.8906 15.0273 28.9844 6.08203H35.5273L37.1289 20.9062C37.3763 16.5833 37.9753 11.6419 38.9258 6.08203H45.7227ZM54.082 16.1211H46.6797V14.3828C46.6797 12.3776 46.9076 10.8346 47.3633 9.75391C47.832 8.66016 48.763 7.69661 50.1562 6.86328C51.5495 6.02995 53.3594 5.61328 55.5859 5.61328C58.2552 5.61328 60.2669 6.08854 61.6211 7.03906C62.9753 7.97656 63.7891 9.13542 64.0625 10.5156C64.3359 11.8828 64.4727 14.7083 64.4727 18.9922V32H56.7969V29.6953C56.3151 30.6198 55.6901 31.3164 54.9219 31.7852C54.1667 32.2409 53.2617 32.4688 52.207 32.4688C50.8268 32.4688 49.5573 32.0846 48.3984 31.3164C47.2526 30.5352 46.6797 28.8359 46.6797 26.2188V24.0898C46.6797 22.1497 46.9857 20.8281 47.5977 20.125C48.2096 19.4219 49.7266 18.6016 52.1484 17.6641C54.7396 16.6484 56.1263 15.9648 56.3086 15.6133C56.4909 15.2617 56.582 14.5456 56.582 13.4648C56.582 12.1107 56.4779 11.2318 56.2695 10.8281C56.0742 10.4115 55.7422 10.2031 55.2734 10.2031C54.7396 10.2031 54.4076 10.3789 54.2773 10.7305C54.1471 11.069 54.082 11.9609 54.082 13.4062V16.1211ZM56.582 19.6758C55.319 20.6003 54.5833 21.375 54.375 22C54.1797 22.625 54.082 23.5234 54.082 24.6953C54.082 26.0365 54.1667 26.9023 54.3359 27.293C54.5182 27.6836 54.8698 27.8789 55.3906 27.8789C55.8854 27.8789 56.2044 27.7292 56.3477 27.4297C56.5039 27.1172 56.582 26.3099 56.582 25.0078V19.6758ZM75.2148 6.08203L75.0781 8.36719C75.7812 7.44271 76.556 6.7526 77.4023 6.29688C78.2487 5.84115 79.1732 5.61328 80.1758 5.61328C81.3997 5.61328 82.4544 5.94531 83.3398 6.60938C84.2383 7.26042 84.7982 8.01562 85.0195 8.875C85.2409 9.73438 85.3516 11.1927 85.3516 13.25V24.168C85.3516 26.5247 85.2083 28.2044 84.9219 29.207C84.6484 30.1966 84.0755 30.9909 83.2031 31.5898C82.3438 32.1758 81.3021 32.4688 80.0781 32.4688C79.1016 32.4688 78.1966 32.2409 77.3633 31.7852C76.5299 31.3294 75.7682 30.6523 75.0781 29.7539V35.6914H67.1875V6.08203H75.2148ZM77.4609 13.6211C77.4609 12.0195 77.4023 11.0495 77.2852 10.7109C77.168 10.3724 76.8424 10.2031 76.3086 10.2031C75.7878 10.2031 75.4492 10.3984 75.293 10.7891C75.1497 11.1797 75.0781 12.1237 75.0781 13.6211V24.3633C75.0781 25.9258 75.1562 26.9023 75.3125 27.293C75.4688 27.6836 75.8073 27.8789 76.3281 27.8789C76.8359 27.8789 77.1484 27.7031 77.2656 27.3516C77.3958 26.987 77.4609 26.1146 77.4609 24.7344V13.6211Z"
                fill="#E9DAC1"
              />
              <path
                d="M95.8594 0.378906V7.85938C96.5104 7.10417 97.2331 6.54427 98.0273 6.17969C98.8346 5.80208 99.707 5.61328 100.645 5.61328C101.725 5.61328 102.663 5.78255 103.457 6.12109C104.251 6.45964 104.857 6.9349 105.273 7.54688C105.69 8.15885 105.938 8.75781 106.016 9.34375C106.107 9.92969 106.152 11.1797 106.152 13.0938V24.7734C106.152 26.6745 106.022 28.0938 105.762 29.0312C105.514 29.9557 104.922 30.763 103.984 31.4531C103.047 32.1302 101.934 32.4688 100.645 32.4688C99.7201 32.4688 98.8542 32.2669 98.0469 31.8633C97.2526 31.4596 96.5234 30.8542 95.8594 30.0469L95.3516 32H87.9688V0.378906H95.8594ZM98.2617 13.4453C98.2617 12.1042 98.1771 11.2318 98.0078 10.8281C97.8385 10.4115 97.5065 10.2031 97.0117 10.2031C96.5299 10.2031 96.2174 10.3854 96.0742 10.75C95.931 11.1016 95.8594 12 95.8594 13.4453V24.6172C95.8594 26.0104 95.9375 26.9023 96.0938 27.293C96.263 27.6836 96.5885 27.8789 97.0703 27.8789C97.5651 27.8789 97.8841 27.6771 98.0273 27.2734C98.1836 26.8698 98.2617 25.8997 98.2617 24.3633V13.4453ZM126.602 15.1836V21.5312C126.602 23.862 126.484 25.5742 126.25 26.668C126.016 27.7487 125.514 28.7643 124.746 29.7148C123.978 30.6523 122.988 31.349 121.777 31.8047C120.579 32.2474 119.199 32.4688 117.637 32.4688C115.892 32.4688 114.414 32.2799 113.203 31.9023C111.992 31.5117 111.048 30.9323 110.371 30.1641C109.707 29.3828 109.232 28.4453 108.945 27.3516C108.659 26.2448 108.516 24.5911 108.516 22.3906V15.75C108.516 13.3411 108.776 11.4596 109.297 10.1055C109.818 8.7513 110.755 7.66406 112.109 6.84375C113.464 6.02344 115.195 5.61328 117.305 5.61328C119.076 5.61328 120.592 5.88021 121.855 6.41406C123.132 6.9349 124.115 7.61849 124.805 8.46484C125.495 9.3112 125.964 10.1836 126.211 11.082C126.471 11.9805 126.602 13.3477 126.602 15.1836ZM118.711 13.2305C118.711 11.9023 118.639 11.069 118.496 10.7305C118.353 10.3789 118.047 10.2031 117.578 10.2031C117.109 10.2031 116.797 10.3789 116.641 10.7305C116.484 11.069 116.406 11.9023 116.406 13.2305V24.9297C116.406 26.1536 116.484 26.9544 116.641 27.332C116.797 27.6966 117.103 27.8789 117.559 27.8789C118.027 27.8789 118.333 27.7096 118.477 27.3711C118.633 27.0326 118.711 26.3034 118.711 25.1836V13.2305ZM147.07 15.1836V21.5312C147.07 23.862 146.953 25.5742 146.719 26.668C146.484 27.7487 145.983 28.7643 145.215 29.7148C144.447 30.6523 143.457 31.349 142.246 31.8047C141.048 32.2474 139.668 32.4688 138.105 32.4688C136.361 32.4688 134.883 32.2799 133.672 31.9023C132.461 31.5117 131.517 30.9323 130.84 30.1641C130.176 29.3828 129.701 28.4453 129.414 27.3516C129.128 26.2448 128.984 24.5911 128.984 22.3906V15.75C128.984 13.3411 129.245 11.4596 129.766 10.1055C130.286 8.7513 131.224 7.66406 132.578 6.84375C133.932 6.02344 135.664 5.61328 137.773 5.61328C139.544 5.61328 141.061 5.88021 142.324 6.41406C143.6 6.9349 144.583 7.61849 145.273 8.46484C145.964 9.3112 146.432 10.1836 146.68 11.082C146.94 11.9805 147.07 13.3477 147.07 15.1836ZM139.18 13.2305C139.18 11.9023 139.108 11.069 138.965 10.7305C138.822 10.3789 138.516 10.2031 138.047 10.2031C137.578 10.2031 137.266 10.3789 137.109 10.7305C136.953 11.069 136.875 11.9023 136.875 13.2305V24.9297C136.875 26.1536 136.953 26.9544 137.109 27.332C137.266 27.6966 137.572 27.8789 138.027 27.8789C138.496 27.8789 138.802 27.7096 138.945 27.3711C139.102 27.0326 139.18 26.3034 139.18 25.1836V13.2305ZM166.68 6.08203L163.477 16.4141L167.637 32H160.039L157.578 20.7109V32H149.688V0.378906H157.578V13.6602L160.039 6.08203H166.68ZM184.453 6.08203L181.309 18.4648L185.117 32H177.441C176.686 28.5885 176.113 25.6523 175.723 23.1914C175.202 26.2643 174.635 29.2005 174.023 32H167.422L170.82 18.4648L167.422 6.08203H174.023C175.078 11.3685 175.645 14.3698 175.723 15.0859C176.478 10.6719 177.051 7.67057 177.441 6.08203H184.453Z"
                fill="#FDF6EC"
              />
              <path
                d="M191.426 25.5547V32H185.469V25.5547H191.426Z"
                fill="#886F6F"
              />
            </svg>
          </div>
          <ul className="mt-12">
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 7H17V17"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-md  ml-2">Lender Dashboard</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 7L7 17"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 17H7V7"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-md  ml-2">Borrower Dashboard</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22V15.5"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 8.5L12 15.5L2 8.5"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 15.5L12 8.5L22 15.5"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 2V8.5"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-md  ml-2">Requests</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6H21"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12H21"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 18H21"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H3.01"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 12H3.01"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 18H3.01"
                    stroke="#667080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-md  ml-2">Transactions</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
