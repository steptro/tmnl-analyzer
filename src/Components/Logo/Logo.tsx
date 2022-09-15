import React, { FC } from "react";

type LogoProps = {};

const Logo: FC<LogoProps> = () => {
  return (
    <>
      <svg
        className="cursor-pointer inline-block"
        width="150"
        height="40"
        viewBox="0 0 150 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.3546 0.0791245H64.6371C64.6371 1.49427 64.6371 2.08396 64.5956 2.55568C64.554 3.06678 64.4297 3.5385 64.0571 3.89203C63.5597 4.36395 62.5655 4.44254 60.5769 4.44254H57.3867V24.2144C52.2078 24.2144 51.8764 24.0572 51.8764 20.4407V4.44254H44.5015C44.5015 0.393864 44.7499 0.0791245 48.3546 0.0791245Z"
          fill="#21527A"
        />
        <path
          d="M96.0836 24.175C93.5981 23.9786 93.6804 22.5635 93.6804 20.4801V7.66575L87.5074 21.2271C87.2174 21.9346 86.6788 23.2317 86.016 23.7429C85.5188 24.1358 84.8972 24.2144 83.5301 24.2144H80.9613L73.4624 7.66575V24.2144C68.2833 24.2144 67.8276 24.0572 67.8276 20.4801V0.00053978H70.8524C74.8295 0.00053978 75.2438 -0.117245 76.8183 3.26315C78.8072 7.58717 83.2817 17.9643 83.5301 18.4756C83.7372 17.9643 88.2951 7.50838 90.2833 3.26315C91.692 0.354471 91.7753 0.00053978 95.7108 0.00053978H99.3156V24.2144C97.5751 24.2144 96.7051 24.2144 96.0836 24.175Z"
          fill="#21527A"
        />
        <path
          d="M125.882 24.2144C122.319 24.2144 122.236 23.8214 120.413 21.3843L110.18 6.99748V24.2144C104.96 24.2144 104.504 24.0572 104.504 20.4407V0.00053978H107.445C110.635 0.00053978 111.091 -0.117243 113.038 2.59487L123.272 17.0999V3.38113C123.272 0.118515 123.811 0.00053978 128.948 0.00053978V24.2144H125.882Z"
          fill="#5A84B4"
        />
        <path
          d="M139.201 24.2144C135.131 24.2144 134.417 24.2144 134.417 20.4407V0.0791225C135.551 0.0791225 138.362 -0.117245 139.327 0.590229C139.956 1.06194 140.082 2.00557 140.082 3.89203V19.8904H145.873C147.887 19.8904 148.852 20.0085 149.356 20.4801C150.153 21.1875 149.985 23.3104 149.985 24.2144H139.201Z"
          fill="#5A84B4"
        />
        <path
          d="M2.35902 37.998C2.2923 37.998 2.24781 37.9559 2.24781 37.8931V31.8029C2.24781 31.7608 2.22568 31.7399 2.18117 31.7399H0.111133C0.0445007 31.7399 0 31.6979 0 31.6352V30.9747C0 30.9119 0.0445007 30.8698 0.111133 30.8698H5.37537C5.4416 30.8698 5.48609 30.9119 5.48609 30.9747V31.6352C5.48609 31.6979 5.4416 31.7399 5.37537 31.7399H3.30492C3.26041 31.7399 3.23852 31.7608 3.23852 31.8029V37.8931C3.23852 37.9559 3.19379 37.998 3.12701 37.998H2.35902Z"
          fill="#21527A"
        />
        <path
          d="M6.51262 37.998C6.44703 37.998 6.40332 37.9559 6.40332 37.8931V33.0818C6.40332 33.0189 6.44703 32.9769 6.51262 32.9769H7.21047C7.27606 32.9769 7.31977 33.0189 7.31977 33.0818V33.5954H7.33067C7.55986 33.1655 8.0181 32.8616 8.71632 32.8616C9.13093 32.8616 9.52356 33.0082 9.78587 33.239C9.84016 33.2911 9.85145 33.3333 9.80767 33.3855L9.40375 33.8992C9.35995 33.9517 9.30574 33.9622 9.25113 33.9204C9.01112 33.7735 8.74922 33.6791 8.44352 33.6791C7.64719 33.6791 7.31977 34.2765 7.31977 35.1467V37.8931C7.31977 37.9559 7.27606 37.998 7.21047 37.998H6.51262Z"
          fill="#21527A"
        />
        <path
          d="M13.4308 36.3733V35.8177C13.4308 35.7762 13.409 35.7549 13.3652 35.7549H12.318C11.4124 35.7549 11.0198 36.0064 11.0198 36.5727C11.0198 37.0863 11.4124 37.3588 12.1108 37.3588C12.9289 37.3588 13.4308 36.9916 13.4308 36.3733ZM13.562 37.9983C13.4964 37.9983 13.4527 37.9561 13.4527 37.8933V37.4531H13.4418C13.2018 37.8305 12.6892 38.1133 11.8926 38.1133C10.8996 38.1133 10.1357 37.6209 10.1357 36.6042C10.1357 35.5454 10.8996 35.0526 12.176 35.0526H13.3652C13.409 35.0526 13.4308 35.0317 13.4308 34.9896V34.623C13.4308 33.9309 13.1475 33.6376 12.176 33.6376C11.587 33.6376 11.2157 33.7841 10.9105 33.9937C10.8559 34.0359 10.7907 34.0359 10.7575 33.9835L10.4632 33.5013C10.4304 33.4383 10.4414 33.3964 10.485 33.3544C10.8778 33.0611 11.4886 32.8618 12.2633 32.8618C13.7473 32.8618 14.3149 33.3335 14.3149 34.5702V37.8933C14.3149 37.9561 14.2711 37.9983 14.2056 37.9983H13.562Z"
          fill="#21527A"
        />
        <path
          d="M19.2363 37.998C19.1707 37.998 19.1271 37.9559 19.1271 37.8931V34.9581C19.1271 34.1507 18.745 33.6791 17.9595 33.6791C17.2502 33.6791 16.7593 34.1613 16.7593 34.9058V37.8931C16.7593 37.9559 16.7159 37.998 16.6503 37.998H15.9517C15.8865 37.998 15.8428 37.9559 15.8428 37.8931V33.0818C15.8428 33.0189 15.8865 32.9769 15.9517 32.9769H16.6503C16.7159 32.9769 16.7593 33.0189 16.7593 33.0818V33.5426H16.7702C17.0212 33.1553 17.5231 32.8616 18.2324 32.8616C19.367 32.8616 20.0435 33.6057 20.0435 34.7485V37.8931C20.0435 37.9559 19.9997 37.998 19.9341 37.998H19.2363Z"
          fill="#21527A"
        />
        <path
          d="M21.2012 37.3588C21.1576 37.3168 21.1576 37.2538 21.2012 37.2122L21.6489 36.7507C21.6923 36.7086 21.7579 36.7086 21.8011 36.7507C22.1943 37.0757 22.7832 37.3275 23.4162 37.3275C24.1798 37.3275 24.562 37.0129 24.562 36.5621C24.562 36.1636 24.3653 35.9436 23.5471 35.8597L22.9905 35.8075C21.965 35.7025 21.4304 35.2098 21.4304 34.3924C21.4304 33.4383 22.1396 32.8618 23.3726 32.8618C24.136 32.8618 24.791 33.1027 25.2276 33.4172C25.2818 33.4488 25.2818 33.5115 25.2494 33.5642L24.8785 34.015C24.8346 34.0672 24.78 34.0672 24.7254 34.0359C24.3871 33.8263 23.8528 33.627 23.318 33.627C22.6634 33.627 22.3249 33.91 22.3249 34.3187C22.3249 34.7174 22.576 34.9267 23.3508 35.0003L23.8964 35.0526C24.9547 35.1469 25.4674 35.6606 25.4674 36.4677C25.4674 37.4531 24.7254 38.1133 23.3616 38.1133C22.3469 38.1133 21.6271 37.7152 21.2012 37.3588Z"
          fill="#21527A"
        />
        <path
          d="M29.7235 36.3733V35.8177C29.7235 35.7762 29.7017 35.7549 29.6583 35.7549H28.6108C27.7051 35.7549 27.3122 36.0064 27.3122 36.5727C27.3122 37.0863 27.7051 37.3588 28.4035 37.3588C29.2219 37.3588 29.7235 36.9916 29.7235 36.3733ZM29.8543 37.9983C29.7891 37.9983 29.7455 37.9561 29.7455 37.8933V37.4531H29.7345C29.4944 37.8305 28.9817 38.1133 28.1848 38.1133C27.1923 38.1133 26.4287 37.6209 26.4287 36.6042C26.4287 35.5454 27.1923 35.0526 28.4689 35.0526H29.6583C29.7017 35.0526 29.7235 35.0317 29.7235 34.9896V34.623C29.7235 33.9309 29.4398 33.6376 28.4689 33.6376C27.8795 33.6376 27.5088 33.7841 27.2031 33.9937C27.1485 34.0359 27.0831 34.0359 27.0505 33.9835L26.756 33.5013C26.7232 33.4383 26.734 33.3964 26.7778 33.3544C27.1703 33.0611 27.7817 32.8618 28.5561 32.8618C30.04 32.8618 30.6073 33.3335 30.6073 34.5702V37.8933C30.6073 37.9561 30.5635 37.9983 30.4983 37.9983H29.8543Z"
          fill="#21527A"
        />
        <path
          d="M31.9834 34.2137C32.2777 33.344 33.0419 32.8618 34.0454 32.8618C34.8416 32.8618 35.4528 33.1869 35.8349 33.7107C35.8675 33.7635 35.8675 33.8051 35.8019 33.8578L35.3218 34.235C35.2676 34.2767 35.2129 34.2767 35.1691 34.2246C34.8634 33.8578 34.569 33.6793 34.0454 33.6793C33.4782 33.6793 33.0525 33.9415 32.8779 34.4659C32.7908 34.7276 32.7576 35.0423 32.7576 35.4825C32.7576 35.9332 32.7908 36.2477 32.8779 36.5098C33.0525 37.0338 33.4782 37.2959 34.0454 37.2959C34.569 37.2959 34.8634 37.1179 35.1691 36.7507C35.2129 36.6986 35.2676 36.6986 35.3218 36.7401L35.8019 37.1179C35.8675 37.17 35.8675 37.2122 35.8349 37.2644C35.4528 37.7887 34.8416 38.1133 34.0454 38.1133C33.0419 38.1133 32.2777 37.6311 31.9834 36.7614C31.885 36.4573 31.8193 36.0484 31.8193 35.4825C31.8193 34.9267 31.885 34.518 31.9834 34.2137Z"
          fill="#21527A"
        />
        <path
          d="M38.5848 38.0503C37.5701 38.0503 37.177 37.6101 37.177 36.6249V33.7526C37.177 33.7105 37.1554 33.6898 37.1118 33.6898H36.6754C36.6098 33.6898 36.5664 33.6477 36.5664 33.5848V33.0818C36.5664 33.0189 36.6098 32.9769 36.6754 32.9769H37.1118C37.1554 32.9769 37.177 32.9559 37.177 32.914V31.4987C37.177 31.4358 37.2206 31.394 37.2862 31.394H37.9846C38.0502 31.394 38.0934 31.4358 38.0934 31.4987V32.914C38.0934 32.9559 38.1153 32.9769 38.1591 32.9769H38.9885C39.0535 32.9769 39.0973 33.0189 39.0973 33.0818V33.5848C39.0973 33.6477 39.0535 33.6898 38.9885 33.6898H38.1591C38.1153 33.6898 38.0934 33.7105 38.0934 33.7526V36.5933C38.0934 37.0964 38.2901 37.2329 38.7595 37.2329H38.9885C39.0535 37.2329 39.0973 37.2749 39.0973 37.3376V37.9457C39.0973 38.0087 39.0535 38.0503 38.9885 38.0503H38.5848Z"
          fill="#21527A"
        />
        <path
          d="M40.4071 37.998C40.3421 37.998 40.2983 37.9559 40.2983 37.8931V33.0818C40.2983 33.0189 40.3421 32.9769 40.4071 32.9769H41.1059C41.1713 32.9769 41.2147 33.0189 41.2147 33.0818V37.8931C41.2147 37.9559 41.1713 37.998 41.1059 37.998H40.4071ZM40.3857 31.8449C40.3201 31.8449 40.2769 31.8029 40.2769 31.7399V30.9747C40.2769 30.9119 40.3201 30.8698 40.3857 30.8698H41.1277C41.1933 30.8698 41.2365 30.9119 41.2365 30.9747V31.7399C41.2365 31.8029 41.1933 31.8449 41.1277 31.8449H40.3857Z"
          fill="#21527A"
        />
        <path
          d="M45.896 35.0526C45.9394 35.0526 45.9612 35.0317 45.9612 34.9896C45.9612 34.7591 45.9394 34.5809 45.885 34.4237C45.7102 33.9206 45.2738 33.6376 44.6849 33.6376C44.0959 33.6376 43.6596 33.9206 43.4847 34.4237C43.4303 34.5809 43.4085 34.7591 43.4085 34.9896C43.4085 35.0317 43.4303 35.0526 43.4737 35.0526H45.896ZM42.6447 36.7507C42.5352 36.4258 42.4702 36.059 42.4702 35.4825C42.4702 34.906 42.5244 34.518 42.6337 34.2137C42.9283 33.344 43.692 32.8618 44.6849 32.8618C45.6884 32.8618 46.4414 33.3544 46.7361 34.2137C46.8453 34.5389 46.8995 34.8848 46.8995 35.6499C46.8995 35.7132 46.8559 35.7549 46.7797 35.7549H43.4737C43.4303 35.7549 43.4085 35.7762 43.4085 35.8177C43.4085 36.0905 43.4409 36.258 43.4955 36.4258C43.7028 37.0022 44.1719 37.2959 44.8157 37.2959C45.4379 37.2959 45.8742 37.055 46.1579 36.7401C46.2121 36.6879 46.2667 36.6773 46.3216 36.7194L46.7689 37.1073C46.8235 37.1492 46.8235 37.2016 46.7797 37.2538C46.3652 37.7572 45.656 38.1133 44.7395 38.1133C43.6814 38.1133 42.9283 37.6209 42.6447 36.7507Z"
          fill="#21527A"
        />
        <path
          d="M51.8384 30.9747C51.8384 30.9119 51.8824 30.8698 51.9486 30.8698H52.6646C52.7524 30.8698 52.8074 30.9013 52.8404 30.9747L55.0759 35.776H55.1089L57.3005 30.9747C57.3337 30.9013 57.3884 30.8698 57.4766 30.8698H58.1925C58.2586 30.8698 58.3028 30.9119 58.3028 30.9747V37.8931C58.3028 37.9559 58.2586 37.998 58.1925 37.998H57.4988C57.4326 37.998 57.3884 37.9559 57.3884 37.8931V32.9347H57.3557L55.4943 36.8556C55.4501 36.9499 55.3954 36.9812 55.2966 36.9812H54.8556C54.7457 36.9812 54.6905 36.9499 54.6465 36.8556L52.7854 32.9347H52.7524V37.8931C52.7524 37.9559 52.7086 37.998 52.6424 37.998H51.9486C51.8824 37.998 51.8384 37.9559 51.8384 37.8931V30.9747Z"
          fill="#21527A"
        />
        <path
          d="M63.0398 36.5098C63.1276 36.2371 63.1608 35.9647 63.1608 35.4825C63.1608 35.0003 63.1276 34.7382 63.0398 34.4659C62.8633 33.9624 62.4339 33.6793 61.85 33.6793C61.2668 33.6793 60.837 33.9624 60.6611 34.4659C60.5728 34.7382 60.5398 35.0003 60.5398 35.4825C60.5398 35.9647 60.5728 36.2371 60.6611 36.5098C60.837 37.0129 61.2668 37.2959 61.85 37.2959C62.4339 37.2959 62.8633 37.0129 63.0398 36.5098ZM59.7689 36.7614C59.6478 36.4155 59.5928 36.0692 59.5928 35.4825C59.5928 34.906 59.6478 34.56 59.7689 34.2137C60.0552 33.3544 60.8261 32.8618 61.85 32.8618C62.8745 32.8618 63.6453 33.3544 63.9314 34.2137C64.0526 34.56 64.1079 34.906 64.1079 35.4825C64.1079 36.0692 64.0526 36.4155 63.9314 36.7614C63.6453 37.6103 62.8745 38.1133 61.85 38.1133C60.8261 38.1133 60.0552 37.6103 59.7689 36.7614Z"
          fill="#21527A"
        />
        <path
          d="M68.8001 37.998C68.7338 37.998 68.6898 37.9559 68.6898 37.8931V34.9581C68.6898 34.1507 68.3044 33.6791 67.5115 33.6791C66.7955 33.6791 66.3005 34.1613 66.3005 34.9058V37.8931C66.3005 37.9559 66.2563 37.998 66.1901 37.998H65.4853C65.4195 37.998 65.3755 37.9559 65.3755 37.8931V33.0818C65.3755 33.0189 65.4195 32.9769 65.4853 32.9769H66.1901C66.2563 32.9769 66.3005 33.0189 66.3005 33.0818V33.5426H66.3111C66.5644 33.1553 67.0711 32.8616 67.7868 32.8616C68.9325 32.8616 69.6149 33.6057 69.6149 34.7485V37.8931C69.6149 37.9559 69.571 37.998 69.5048 37.998H68.8001Z"
          fill="#21527A"
        />
        <path
          d="M71.2568 37.998C71.1907 37.998 71.1465 37.9559 71.1465 37.8931V33.0818C71.1465 33.0189 71.1907 32.9769 71.2568 32.9769H71.9613C72.0275 32.9769 72.0718 33.0189 72.0718 33.0818V37.8931C72.0718 37.9559 72.0275 37.998 71.9613 37.998H71.2568ZM71.235 31.8449C71.1685 31.8449 71.1245 31.8029 71.1245 31.7399V30.9747C71.1245 30.9119 71.1685 30.8698 71.235 30.8698H71.9833C72.0495 30.8698 72.0936 30.9119 72.0936 30.9747V31.7399C72.0936 31.8029 72.0495 31.8449 71.9833 31.8449H71.235Z"
          fill="#21527A"
        />
        <path
          d="M75.1885 38.0503C74.1642 38.0503 73.7679 37.6101 73.7679 36.6249V33.7526C73.7679 33.7105 73.7458 33.6898 73.7018 33.6898H73.2612C73.195 33.6898 73.1514 33.6477 73.1514 33.5848V33.0818C73.1514 33.0189 73.195 32.9769 73.2612 32.9769H73.7018C73.7458 32.9769 73.7679 32.9559 73.7679 32.914V31.4987C73.7679 31.4358 73.8121 31.394 73.8781 31.394H74.5826C74.6489 31.394 74.6929 31.4358 74.6929 31.4987V32.914C74.6929 32.9559 74.7149 32.9769 74.7591 32.9769H75.5959C75.6621 32.9769 75.7062 33.0189 75.7062 33.0818V33.5848C75.7062 33.6477 75.6621 33.6898 75.5959 33.6898H74.7591C74.7149 33.6898 74.6929 33.7105 74.6929 33.7526V36.5933C74.6929 37.0964 74.8914 37.2329 75.3646 37.2329H75.5959C75.6621 37.2329 75.7062 37.2749 75.7062 37.3376V37.9457C75.7062 38.0087 75.6621 38.0503 75.5959 38.0503H75.1885Z"
          fill="#21527A"
        />
        <path
          d="M80.0458 36.5098C80.1339 36.2371 80.1673 35.9647 80.1673 35.4825C80.1673 35.0003 80.1339 34.7382 80.0458 34.4659C79.8698 33.9624 79.44 33.6793 78.8565 33.6793C78.273 33.6793 77.8432 33.9624 77.6671 34.4659C77.5793 34.7382 77.5457 35.0003 77.5457 35.4825C77.5457 35.9647 77.5793 36.2371 77.6671 36.5098C77.8432 37.0129 78.273 37.2959 78.8565 37.2959C79.44 37.2959 79.8698 37.0129 80.0458 36.5098ZM76.7753 36.7614C76.6543 36.4155 76.5986 36.0692 76.5986 35.4825C76.5986 34.906 76.6543 34.56 76.7753 34.2137C77.0612 33.3544 77.8326 32.8618 78.8565 32.8618C79.8804 32.8618 80.6517 33.3544 80.9379 34.2137C81.0587 34.56 81.1141 34.906 81.1141 35.4825C81.1141 36.0692 81.0587 36.4155 80.9379 36.7614C80.6517 37.6103 79.8804 38.1133 78.8565 38.1133C77.8326 38.1133 77.0612 37.6103 76.7753 36.7614Z"
          fill="#21527A"
        />
        <path
          d="M82.4914 37.998C82.4256 37.998 82.3813 37.9559 82.3813 37.8931V33.0818C82.3813 33.0189 82.4256 32.9769 82.4914 32.9769H83.1961C83.2622 32.9769 83.3064 33.0189 83.3064 33.0818V33.5954H83.3172C83.5483 33.1655 84.0109 32.8616 84.716 32.8616C85.1344 32.8616 85.5306 33.0082 85.7951 33.239C85.8502 33.2911 85.8612 33.3333 85.8171 33.3855L85.4098 33.8992C85.3655 33.9517 85.3105 33.9622 85.2553 33.9204C85.0134 33.7735 84.7486 33.6791 84.4405 33.6791C83.6365 33.6791 83.3064 34.2765 83.3064 35.1467V37.8931C83.3064 37.9559 83.2622 37.998 83.1961 37.998H82.4914Z"
          fill="#21527A"
        />
        <path
          d="M86.7866 37.998C86.7203 37.998 86.6763 37.9559 86.6763 37.8931V33.0818C86.6763 33.0189 86.7203 32.9769 86.7866 32.9769H87.4913C87.5575 32.9769 87.6013 33.0189 87.6013 33.0818V37.8931C87.6013 37.9559 87.5575 37.998 87.4913 37.998H86.7866ZM86.7646 31.8449C86.6985 31.8449 86.6543 31.8029 86.6543 31.7399V30.9747C86.6543 30.9119 86.6985 30.8698 86.7646 30.8698H87.5135C87.5797 30.8698 87.6233 30.9119 87.6233 30.9747V31.7399C87.6233 31.8029 87.5797 31.8449 87.5135 31.8449H86.7646Z"
          fill="#21527A"
        />
        <path
          d="M92.6132 37.998C92.547 37.998 92.5027 37.9559 92.5027 37.8931V34.9581C92.5027 34.1507 92.1171 33.6791 91.3246 33.6791C90.6086 33.6791 90.113 34.1613 90.113 34.9058V37.8931C90.113 37.9559 90.0694 37.998 90.003 37.998H89.2978C89.2322 37.998 89.188 37.9559 89.188 37.8931V33.0818C89.188 33.0189 89.2322 32.9769 89.2978 32.9769H90.003C90.0694 32.9769 90.113 33.0189 90.113 33.0818V33.5426H90.124C90.3773 33.1553 90.8842 32.8616 91.5997 32.8616C92.745 32.8616 93.4278 33.6057 93.4278 34.7485V37.8931C93.4278 37.9559 93.3837 37.998 93.3175 37.998H92.6132Z"
          fill="#21527A"
        />
        <path
          d="M97.9329 36.3732C98.0208 36.1217 98.0542 35.8282 98.0542 35.3983C98.0542 34.9687 98.0208 34.6857 97.9329 34.4235C97.7458 33.9098 97.3605 33.6792 96.8098 33.6792C96.2369 33.6792 95.8738 33.9414 95.6977 34.4235C95.6094 34.6857 95.5652 34.9894 95.5652 35.3983C95.5652 35.8073 95.6094 36.1217 95.6977 36.3732C95.8738 36.8658 96.2369 37.128 96.8098 37.128C97.3605 37.128 97.7458 36.8871 97.9329 36.3732ZM94.8495 39.2561C94.8053 39.2035 94.8053 39.1618 94.8605 39.1091L95.3119 38.6796C95.3671 38.6268 95.4222 38.6268 95.477 38.6796C95.8406 38.994 96.2149 39.1826 96.7216 39.1826C97.5918 39.1826 98.0542 38.7526 98.0542 37.8303V37.2434H98.043C97.8009 37.6629 97.3491 37.9351 96.5785 37.9351C95.6863 37.9351 95.0698 37.5051 94.8053 36.7193C94.6732 36.3419 94.6294 35.9747 94.6294 35.3983C94.6294 34.8215 94.6732 34.455 94.8053 34.0776C95.0698 33.2912 95.6863 32.8616 96.5785 32.8616C97.3491 32.8616 97.8009 33.134 98.043 33.5534H98.0542V33.0818C98.0542 33.019 98.0984 32.9769 98.1642 32.9769H98.869C98.935 32.9769 98.9792 33.019 98.9792 33.0818V37.7779C98.9792 39.2035 98.1642 40 96.6773 40C95.9394 40 95.2017 39.6963 94.8495 39.2561Z"
          fill="#21527A"
        />
        <path
          d="M104.205 30.9747C104.205 30.9119 104.25 30.8698 104.316 30.8698H105.028C105.117 30.8698 105.173 30.8906 105.218 30.9747L108.645 36.321H108.69V30.9747C108.69 30.9119 108.734 30.8698 108.801 30.8698H109.502C109.569 30.8698 109.614 30.9119 109.614 30.9747V37.8931C109.614 37.9559 109.569 37.998 109.502 37.998H108.79C108.712 37.998 108.645 37.9772 108.601 37.8931L105.162 32.5679H105.129V37.8931C105.129 37.9559 105.084 37.998 105.017 37.998H104.316C104.25 37.998 104.205 37.9559 104.205 37.8931V30.9747Z"
          fill="#5A84B4"
        />
        <path
          d="M114.33 35.0526C114.374 35.0526 114.396 35.0317 114.396 34.9896C114.396 34.7591 114.374 34.5809 114.32 34.4237C114.145 33.9206 113.709 33.6376 113.119 33.6376C112.53 33.6376 112.094 33.9206 111.919 34.4237C111.864 34.5809 111.843 34.7591 111.843 34.9896C111.843 35.0317 111.864 35.0526 111.908 35.0526H114.33ZM111.079 36.7507C110.97 36.4258 110.904 36.059 110.904 35.4825C110.904 34.906 110.959 34.518 111.068 34.2137C111.362 33.344 112.127 32.8618 113.119 32.8618C114.123 32.8618 114.876 33.3544 115.171 34.2137C115.279 34.5389 115.334 34.8848 115.334 35.6499C115.334 35.7132 115.291 35.7549 115.214 35.7549H111.908C111.864 35.7549 111.843 35.7762 111.843 35.8177C111.843 36.0905 111.876 36.258 111.93 36.4258C112.137 37.0022 112.606 37.2959 113.251 37.2959C113.872 37.2959 114.309 37.055 114.592 36.7401C114.647 36.6879 114.701 36.6773 114.756 36.7194L115.203 37.1073C115.258 37.1492 115.258 37.2016 115.214 37.2538C114.8 37.7572 114.09 38.1133 113.174 38.1133C112.115 38.1133 111.362 37.6209 111.079 36.7507Z"
          fill="#5A84B4"
        />
        <path
          d="M119.634 36.5308C119.721 36.2895 119.754 35.9855 119.754 35.4825C119.754 34.9795 119.721 34.6858 119.634 34.4343C119.459 33.9309 119.056 33.6793 118.477 33.6793C117.899 33.6793 117.506 33.9415 117.332 34.4343C117.245 34.7067 117.212 35.0317 117.212 35.4825C117.212 35.9436 117.245 36.2686 117.332 36.5308C117.506 37.0235 117.899 37.2959 118.477 37.2959C119.056 37.2959 119.459 37.0338 119.634 36.5308ZM119.863 37.9983C119.798 37.9983 119.754 37.9561 119.754 37.8933V37.4109H119.743C119.492 37.8096 119.045 38.1133 118.259 38.1133C117.353 38.1133 116.721 37.7046 116.459 36.9079C116.317 36.5098 116.273 36.1114 116.273 35.4825C116.273 34.8639 116.317 34.4659 116.459 34.0672C116.721 33.2705 117.353 32.8618 118.259 32.8618C119.045 32.8618 119.492 33.1555 119.743 33.5535H119.754V30.9749C119.754 30.9121 119.798 30.87 119.863 30.87H120.561C120.627 30.87 120.671 30.9121 120.671 30.9749V37.8933C120.671 37.9561 120.627 37.9983 120.561 37.9983H119.863Z"
          fill="#5A84B4"
        />
        <path
          d="M125.352 35.0526C125.395 35.0526 125.417 35.0317 125.417 34.9896C125.417 34.7591 125.395 34.5809 125.341 34.4237C125.166 33.9206 124.73 33.6376 124.141 33.6376C123.551 33.6376 123.115 33.9206 122.94 34.4237C122.886 34.5809 122.864 34.7591 122.864 34.9896C122.864 35.0317 122.886 35.0526 122.93 35.0526H125.352ZM122.1 36.7507C121.991 36.4258 121.926 36.059 121.926 35.4825C121.926 34.906 121.98 34.518 122.089 34.2137C122.384 33.344 123.148 32.8618 124.141 32.8618C125.144 32.8618 125.897 33.3544 126.192 34.2137C126.301 34.5389 126.355 34.8848 126.355 35.6499C126.355 35.7132 126.312 35.7549 126.235 35.7549H122.93C122.886 35.7549 122.864 35.7762 122.864 35.8177C122.864 36.0905 122.897 36.258 122.951 36.4258C123.159 37.0022 123.628 37.2959 124.272 37.2959C124.894 37.2959 125.33 37.055 125.614 36.7401C125.668 36.6879 125.723 36.6773 125.777 36.7194L126.225 37.1073C126.279 37.1492 126.279 37.2016 126.235 37.2538C125.821 37.7572 125.112 38.1133 124.195 38.1133C123.137 38.1133 122.384 37.6209 122.1 36.7507Z"
          fill="#5A84B4"
        />
        <path
          d="M127.72 37.998C127.655 37.998 127.611 37.9559 127.611 37.8931V33.0818C127.611 33.0189 127.655 32.9769 127.72 32.9769H128.419C128.485 32.9769 128.528 33.0189 128.528 33.0818V33.5954H128.539C128.768 33.1655 129.226 32.8616 129.924 32.8616C130.339 32.8616 130.732 33.0082 130.994 33.239C131.049 33.2911 131.059 33.3333 131.016 33.3855L130.612 33.8992C130.568 33.9517 130.514 33.9622 130.459 33.9204C130.219 33.7735 129.957 33.6791 129.652 33.6791C128.855 33.6791 128.528 34.2765 128.528 35.1467V37.8931C128.528 37.9559 128.485 37.998 128.419 37.998H127.72Z"
          fill="#5A84B4"
        />
        <path
          d="M133.122 38.0503C132.206 38.0503 131.845 37.6309 131.845 36.7297V30.9747C131.845 30.9119 131.889 30.8698 131.955 30.8698H132.653C132.718 30.8698 132.762 30.9119 132.762 30.9747V36.677C132.762 37.0964 132.926 37.2329 133.285 37.2329H133.493C133.558 37.2329 133.602 37.2749 133.602 37.3376V37.9457C133.602 38.0087 133.558 38.0503 133.493 38.0503H133.122Z"
          fill="#5A84B4"
        />
        <path
          d="M137.705 36.3733V35.8177C137.705 35.7762 137.683 35.7549 137.64 35.7549H136.592C135.687 35.7549 135.294 36.0064 135.294 36.5727C135.294 37.0863 135.687 37.3588 136.385 37.3588C137.203 37.3588 137.705 36.9916 137.705 36.3733ZM137.836 37.9983C137.771 37.9983 137.727 37.9561 137.727 37.8933V37.4531H137.716C137.476 37.8305 136.963 38.1133 136.166 38.1133C135.174 38.1133 134.41 37.6209 134.41 36.6042C134.41 35.5454 135.174 35.0526 136.45 35.0526H137.64C137.683 35.0526 137.705 35.0317 137.705 34.9896V34.623C137.705 33.9309 137.421 33.6376 136.45 33.6376C135.861 33.6376 135.49 33.7841 135.185 33.9937C135.13 34.0359 135.065 34.0359 135.032 33.9835L134.737 33.5013C134.705 33.4383 134.715 33.3964 134.759 33.3544C135.152 33.0611 135.763 32.8618 136.538 32.8618C138.022 32.8618 138.589 33.3335 138.589 34.5702V37.8933C138.589 37.9561 138.545 37.9983 138.48 37.9983H137.836Z"
          fill="#5A84B4"
        />
        <path
          d="M143.511 37.998C143.445 37.998 143.402 37.9559 143.402 37.8931V34.9581C143.402 34.1507 143.02 33.6791 142.234 33.6791C141.525 33.6791 141.034 34.1613 141.034 34.9058V37.8931C141.034 37.9559 140.991 37.998 140.925 37.998H140.227C140.161 37.998 140.118 37.9559 140.118 37.8931V33.0818C140.118 33.0189 140.161 32.9769 140.227 32.9769H140.925C140.991 32.9769 141.034 33.0189 141.034 33.0818V33.5426H141.045C141.296 33.1553 141.798 32.8616 142.507 32.8616C143.642 32.8616 144.318 33.6057 144.318 34.7485V37.8931C144.318 37.9559 144.275 37.998 144.209 37.998H143.511Z"
          fill="#5A84B4"
        />
        <path
          d="M148.88 36.5308C148.967 36.2895 149 35.9855 149 35.4825C149 34.9795 148.967 34.6858 148.88 34.4343C148.705 33.9309 148.302 33.6793 147.723 33.6793C147.145 33.6793 146.753 33.9415 146.578 34.4343C146.491 34.7067 146.458 35.0317 146.458 35.4825C146.458 35.9436 146.491 36.2686 146.578 36.5308C146.753 37.0235 147.145 37.2959 147.723 37.2959C148.302 37.2959 148.705 37.0338 148.88 36.5308ZM149.109 37.9983C149.044 37.9983 149 37.9561 149 37.8933V37.4109H148.989C148.738 37.8096 148.291 38.1133 147.506 38.1133C146.6 38.1133 145.967 37.7046 145.705 36.9079C145.563 36.5098 145.52 36.1114 145.52 35.4825C145.52 34.8639 145.563 34.4659 145.705 34.0672C145.967 33.2705 146.6 32.8618 147.506 32.8618C148.291 32.8618 148.738 33.1555 148.989 33.5535H149V30.9749C149 30.9121 149.044 30.87 149.109 30.87H149.807C149.873 30.87 149.917 30.9121 149.917 30.9749V37.8933C149.917 37.9561 149.873 37.9983 149.807 37.9983H149.109Z"
          fill="#5A84B4"
        />
      </svg>
    </>
  );
};

export default Logo;
