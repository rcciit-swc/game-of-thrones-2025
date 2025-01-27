import React, { FC } from 'react';
import { IIconProps } from '../../interfaces';

const SponsorsLinesSVG: FC<IIconProps> = (props) => {
  const {
    className = '',
    width = '538',
    height = '678',
    fill = '#FF0000',
  } = props;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 1214 1308"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 429.847C50.5438 384.016 103.52 342.581 161.531 324.328C219.427 306.209 283.274 313.936 329.843 359.768C385.451 414.525 411.538 516.58 474.813 554.284C515.775 578.666 563.602 570.672 609.027 566.542C654.566 562.412 704.224 564.543 737.864 603.846C798.163 674.325 776.652 827.008 841.986 889.093C885.122 929.995 945.078 911.343 998.627 916.139C1066.36 922.268 1129.98 971.164 1167.17 1045.77C1204.35 1120.38 1214.31 1219.24 1193.71 1307.7"
        stroke="#1C2226"
        strokeMiterlimit="10"
      />
      <path
        d="M7.17871 418.522C56.4937 373.357 109.47 332.988 167.138 315.668C201.921 305.143 238.879 303.944 272.862 314.602C295.059 321.53 315.998 333.654 334.305 351.374C389.799 405.332 416.916 505.122 478.703 544.159C500.671 558.015 524.356 562.944 548.957 563.877C569.781 564.676 591.178 562.678 612.231 561.212C641.751 559.081 673.217 558.947 700.906 569.073C716.238 574.669 730.427 583.329 742.555 596.385C766.469 621.965 778.712 659.137 788.552 698.84C802.854 755.996 812.466 818.614 843.817 859.249C847.135 863.646 850.796 867.643 854.686 871.507C897.48 913.341 954.918 898.686 1005.38 906.147C1054.81 913.608 1101.26 945.849 1136.5 995.545C1146.69 1009.93 1155.84 1025.79 1163.96 1042.84C1178.49 1073.62 1189.14 1108.12 1195.66 1143.96C1205.5 1197.26 1206.3 1253.35 1196.8 1304.91"
        stroke="#23292E"
        strokeMiterlimit="10"
      />
      <path
        d="M13.2432 407.064C62.4437 362.699 115.306 323.395 172.744 306.742C207.414 296.616 244.028 295.683 277.782 306.342C299.865 313.27 320.689 325.127 338.996 342.714C394.376 395.74 422.294 493.398 482.708 533.634C504.448 548.023 527.56 554.284 551.932 556.283C572.642 558.015 594.153 556.683 615.32 555.483C645.07 553.885 676.764 553.751 704.797 563.078C720.243 568.274 734.546 576.267 747.132 588.658C771.618 612.639 785.119 647.546 796.218 685.25C812.351 739.475 824.48 799.962 856.289 841.13C859.721 845.527 863.268 849.657 867.158 853.521C909.723 896.155 964.415 885.496 1011.79 895.888C1058.13 906.014 1101.03 939.987 1134.1 991.015C1143.71 1005.8 1152.52 1022.06 1160.3 1039.51C1174.38 1070.95 1185.13 1105.99 1192.34 1142.1C1203.1 1195.79 1206.18 1251.48 1199.55 1301.71"
        stroke="#2A2F37"
        strokeMiterlimit="10"
      />
      <path
        d="M19.3071 395.74C68.2788 352.04 121.141 313.803 178.351 297.948C212.791 288.356 249.062 287.556 282.587 298.215C304.441 305.143 325.151 316.867 343.459 334.187C398.838 386.414 427.672 481.94 486.712 523.242C508.109 538.297 530.764 545.758 555.021 548.689C575.616 551.353 597.127 550.554 618.524 549.888C648.502 548.822 680.539 548.689 708.801 557.215C724.477 562.012 739.008 569.473 751.823 580.93C776.995 603.313 791.527 635.822 803.998 671.661C822.077 723.088 836.722 781.176 868.874 823.011C872.307 827.407 875.854 831.671 879.744 835.668C922.08 879.234 974.141 872.573 1018.31 885.629C1061.67 898.419 1100.8 934.125 1131.93 986.618C1140.96 1001.81 1149.32 1018.59 1156.87 1036.31C1170.49 1068.56 1181.35 1103.99 1189.14 1140.37C1200.92 1194.46 1206.18 1249.75 1202.41 1298.51"
        stroke="#31363F"
        strokeMiterlimit="10"
      />
      <path
        d="M25.3711 384.415C74.2284 341.515 126.976 304.343 183.843 289.155C218.054 279.962 254.096 279.429 287.393 290.088C309.132 297.016 329.728 308.607 347.921 325.527C403.3 376.954 432.935 470.349 490.602 512.849C511.77 528.437 533.853 537.097 557.881 541.228C578.362 544.692 599.988 544.692 621.613 544.425C651.82 543.892 684.086 543.626 712.806 551.486C728.595 555.75 743.356 562.811 756.514 573.336C782.373 594.12 797.934 624.497 811.779 658.071C831.688 706.567 848.851 762.524 881.575 804.891C885.007 809.421 888.669 813.685 892.445 817.681C934.437 862.047 983.981 859.383 1025.06 875.237C1065.33 890.692 1100.8 928.13 1129.87 982.088C1138.33 997.809 1146.23 1014.86 1153.55 1032.98C1166.71 1065.89 1177.69 1102 1186.16 1138.5C1198.98 1192.99 1206.3 1247.88 1205.5 1295.31"
        stroke="#383C47"
        strokeMiterlimit="10"
      />
      <path
        d="M31.4355 372.957C80.1784 330.723 132.812 294.617 189.449 280.228C223.432 271.435 259.131 271.302 292.313 281.827C313.938 288.755 334.419 300.213 352.498 316.867C407.762 367.495 438.427 458.758 494.607 502.324C515.546 518.578 537.057 528.437 560.971 533.5C581.337 537.897 603.077 538.563 624.817 538.563C655.138 538.563 687.862 538.296 716.81 545.358C732.829 549.221 747.704 555.616 761.091 565.342C787.636 584.527 804.342 612.639 819.445 644.215C841.185 689.913 860.979 743.605 894.047 786.505C897.594 791.035 901.141 795.432 904.917 799.562C946.68 844.727 993.592 846.193 1031.46 864.712C1068.77 882.964 1100.46 922.001 1127.58 977.292C1135.47 993.413 1142.91 1011 1150 1029.39C1162.7 1062.96 1173.8 1099.6 1182.84 1136.24C1196.57 1190.99 1206.18 1245.62 1208.24 1291.72"
        stroke="#3F4350"
        strokeMiterlimit="10"
      />
      <path
        d="M37.5 361.633C86.014 320.065 138.647 285.158 195.056 271.435C228.81 263.042 264.28 263.175 297.119 273.7C318.515 280.628 338.882 291.953 356.96 308.34C412.225 358.169 443.691 447.3 498.498 491.932C519.208 508.853 540.146 519.911 563.946 525.906C584.198 531.102 605.938 532.568 627.906 532.967C658.457 533.5 691.409 533.234 720.701 539.629C736.834 543.093 751.938 548.955 765.668 557.748C792.785 575.335 810.749 601.182 827.111 630.759C850.796 673.526 872.994 725.086 906.519 768.519C910.066 773.049 913.727 777.446 917.503 781.709C959.037 827.807 1003.32 833.27 1038.1 854.587C1072.31 875.504 1100.46 916.406 1125.4 973.029C1132.73 989.549 1139.82 1007.54 1146.57 1026.32C1158.81 1060.69 1170.03 1097.73 1179.75 1134.64C1194.51 1189.8 1206.3 1244.02 1211.22 1288.79"
        stroke="#464958"
        strokeMiterlimit="10"
      />
      <path
        d="M43.6782 350.175C92.0778 309.406 144.597 275.565 200.662 262.509C234.187 254.648 269.314 254.915 302.038 265.44C323.32 272.368 343.573 283.559 361.537 299.547C416.687 348.443 449.068 435.709 502.387 481.407C522.869 498.993 543.235 511.117 566.806 518.312C586.944 524.441 608.798 526.439 630.881 527.238C661.66 528.304 694.956 527.905 724.476 533.633C740.838 536.698 756.171 541.894 770.13 550.021C797.934 566.009 816.928 589.457 834.663 617.169C860.178 657.138 884.893 706.434 918.99 750.4C922.537 755.063 926.199 759.46 929.974 763.723C971.28 810.62 1012.93 820.213 1044.51 844.194C1075.75 867.909 1100.12 910.41 1123.12 968.499C1129.87 985.552 1136.5 1003.8 1143.02 1023.12C1154.81 1058.16 1166.02 1095.87 1176.43 1132.91C1192.11 1188.46 1206.18 1242.42 1213.96 1285.72"
        stroke="#4D5060"
        strokeMiterlimit="10"
      />
      <path
        d="M49.7432 338.85C98.0283 298.747 150.433 265.973 206.269 253.715C239.68 246.254 274.464 246.787 306.845 257.313C328.012 264.107 348.036 275.299 366.114 291.02C421.264 339.116 454.446 424.384 506.393 471.015C526.645 489.134 546.554 502.59 569.896 510.718C589.919 517.646 611.888 520.443 634.2 521.642C665.208 523.241 698.732 522.842 728.71 527.771C745.187 530.436 760.748 535.099 775.05 542.293C803.541 556.682 823.679 577.866 842.673 603.579C870.133 640.618 897.365 687.781 931.806 732.28C935.353 736.943 939.014 741.473 942.79 745.87C983.752 793.7 1023 807.422 1051.26 833.935C1079.64 860.448 1100.12 904.548 1121.17 963.969C1127.35 981.422 1133.53 1000.21 1139.82 1019.79C1151.15 1055.5 1162.48 1093.74 1173.57 1131.04C1190.28 1187 1206.53 1240.56 1217.17 1282.52"
        stroke="#545669"
        strokeMiterlimit="10"
      />
      <path
        d="M55.8071 327.525C103.863 288.222 156.382 256.513 211.876 244.922C245.058 237.861 279.612 238.66 311.764 249.186C332.703 255.981 352.727 266.905 370.691 282.493C425.841 329.79 459.824 412.926 510.397 460.756C530.421 479.542 549.758 494.197 572.985 503.39C592.894 511.251 614.862 514.715 637.403 516.313C668.64 518.445 702.394 518.045 732.715 522.176C749.42 524.441 765.21 528.437 779.627 534.833C808.804 547.623 830.086 566.541 850.338 590.257C879.63 624.497 909.379 669.396 944.277 714.428C947.939 719.091 951.6 723.754 955.261 728.15C995.995 776.78 1032.61 794.766 1057.78 823.81C1083.18 853.254 1099.89 898.952 1118.88 959.705C1124.49 977.558 1130.32 996.744 1136.27 1016.73C1147.14 1053.1 1158.59 1091.87 1170.26 1129.44C1187.99 1185.8 1206.41 1238.96 1219.91 1279.59"
        stroke="#5B5D71"
        strokeMiterlimit="10"
      />
      <path
        d="M61.8716 316.068C109.813 277.431 162.218 246.788 217.368 235.996C250.321 229.468 284.533 230.534 316.57 240.926C337.395 247.72 357.304 258.512 375.153 273.7C430.189 320.198 464.973 401.335 514.288 450.098C533.968 469.55 552.847 485.404 575.846 495.53C595.64 504.323 617.723 508.32 640.378 510.318C671.844 512.983 705.941 512.583 736.491 515.914C753.311 517.779 769.329 521.11 784.09 526.706C813.953 537.897 836.265 554.551 857.89 576.267C889.127 607.577 921.393 650.344 956.749 695.775C960.411 700.572 964.072 705.235 967.848 709.765C1008.35 759.327 1042.45 781.443 1064.3 813.152C1086.73 845.394 1099.66 892.691 1116.71 954.909C1121.74 973.295 1127.12 992.88 1132.84 1013.13C1143.25 1050.3 1154.81 1089.61 1167.17 1127.31C1185.82 1184.07 1206.53 1236.83 1222.89 1276.13"
        stroke="#626379"
        strokeMiterlimit="10"
      />
      <path
        d="M67.9355 304.743C115.763 266.905 168.053 237.328 222.974 227.203C255.699 221.074 289.681 222.406 321.375 232.798C342.085 239.593 361.766 250.252 379.615 265.173C434.651 310.872 470.236 390.144 518.178 439.706C537.629 459.824 555.936 476.877 578.82 488.068C598.5 497.661 620.698 502.457 643.467 504.856C675.047 508.053 709.488 507.52 740.381 510.185C757.43 511.65 773.563 514.448 788.666 519.111C819.216 528.704 842.672 543.093 865.556 562.811C898.738 591.322 933.407 631.691 969.221 677.789C972.882 682.585 976.658 687.248 980.319 691.912C1020.6 742.273 1052.06 768.786 1070.83 802.893C1090.16 838.199 1099.43 886.961 1114.42 950.379C1118.88 969.165 1123.8 989.149 1129.29 1009.8C1139.25 1047.64 1150.92 1087.47 1163.85 1125.44C1183.53 1182.6 1206.41 1234.96 1225.64 1272.93"
        stroke="#696A82"
        strokeMiterlimit="10"
      />
      <path
        d="M73.9995 293.285C121.598 256.114 173.888 227.603 228.581 218.276C261.076 212.548 294.715 214.146 326.295 224.538C346.891 231.333 366.457 241.858 384.192 256.514C439.113 301.279 475.613 378.686 522.182 429.314C541.405 450.098 559.14 468.351 581.909 480.475C601.475 491 623.672 496.462 646.785 499.127C678.594 502.857 713.378 502.324 744.614 504.19C761.892 505.256 778.254 507.387 793.586 511.251C824.937 519.245 849.423 531.369 873.566 549.088C908.692 574.669 945.879 612.906 982.036 659.537C985.811 664.333 989.473 669.129 993.134 673.926C1033.07 725.086 1061.9 755.996 1077.58 792.501C1093.94 830.738 1099.43 880.966 1112.47 945.85C1116.36 965.168 1120.94 985.553 1126.09 1006.47C1135.59 1044.97 1147.37 1085.34 1160.99 1123.58C1181.7 1181.14 1206.76 1233.1 1228.84 1269.73"
        stroke="#70708A"
        strokeMiterlimit="10"
      />
      <path
        d="M80.1787 281.961C127.663 245.589 179.838 218.143 234.188 209.483C266.454 204.287 299.865 206.019 331.101 216.411C351.468 223.206 370.92 233.598 388.655 247.854C443.576 291.82 480.763 367.228 526.073 418.789C545.067 440.372 562.23 459.557 584.77 472.88C604.222 484.338 626.533 490.467 649.761 493.531C681.798 497.794 716.811 497.261 748.391 498.327C765.782 498.993 782.373 500.592 797.934 503.657C829.972 509.918 855.602 519.911 881.003 535.632C917.961 558.414 957.664 594.387 994.393 641.55C998.169 646.48 1001.83 651.276 1005.49 656.073C1045.2 708.166 1071.4 743.339 1083.87 782.242C1097.14 823.544 1098.97 875.237 1110.07 941.453C1113.39 961.171 1117.51 981.955 1122.43 1003.27C1131.47 1042.57 1143.37 1083.48 1157.56 1121.71C1179.18 1179.67 1206.53 1231.23 1231.47 1266.4"
        stroke="#777792"
        strokeMiterlimit="10"
      />
      <path
        d="M86.2427 270.636C133.612 234.93 185.674 208.684 239.794 200.69C271.946 195.894 305.013 198.025 336.021 208.284C356.274 215.079 375.61 225.338 393.346 239.327C448.153 282.494 486.14 356.037 530.192 408.397C548.842 430.646 565.547 451.03 587.974 465.286C607.311 477.543 629.737 484.338 653.079 487.935C685.345 492.732 720.701 492.066 752.509 492.465C770.13 492.732 786.95 493.664 802.74 495.929C835.464 500.592 862.238 508.32 888.898 521.909C927.801 541.761 969.907 575.601 1007.09 623.298C1010.87 628.227 1014.65 633.157 1018.19 638.086C1057.67 690.979 1081.12 730.549 1090.62 771.983C1100.8 816.216 1098.97 869.375 1108.01 936.923C1110.76 957.041 1114.42 978.358 1119.11 999.941C1127.69 1039.91 1139.71 1081.35 1154.58 1119.85C1177.24 1178.2 1206.76 1229.36 1234.56 1263.21"
        stroke="#7E7E9B"
        strokeMiterlimit="10"
      />
      <path
        d="M92.3066 259.178C139.448 224.272 191.509 198.958 245.4 191.763C277.324 187.367 310.048 189.765 340.941 200.157C361.079 206.952 380.301 217.077 397.922 230.8C452.729 273.167 491.517 344.846 534.196 398.138C552.618 421.054 568.865 442.637 591.063 457.825C610.285 471.015 632.712 478.476 656.282 482.34C688.777 487.669 724.362 487.003 756.514 486.603C774.249 486.337 791.297 486.736 807.431 488.202C840.841 491.266 868.645 496.729 896.678 508.32C937.526 525.24 982.15 556.949 1019.68 605.179C1023.57 610.108 1027.23 615.171 1030.89 620.1C1070.02 673.926 1090.85 717.759 1097.26 761.591C1104.24 808.888 1098.86 863.513 1105.95 932.393C1108.13 953.044 1111.33 974.627 1115.79 996.744C1123.92 1037.51 1136.04 1079.35 1151.49 1118.12C1175.18 1176.87 1206.87 1227.63 1237.65 1260.14"
        stroke="#8584A3"
        strokeMiterlimit="10"
      />
      <path
        d="M98.3716 247.854C145.398 213.613 197.345 189.499 251.008 182.97C282.702 178.973 315.197 181.638 345.747 192.03C365.656 198.825 384.764 208.817 402.385 222.14C457.078 263.708 496.667 333.521 538.087 387.613C556.165 411.195 571.955 433.977 593.924 450.231C613.032 464.354 635.573 472.481 659.258 476.744C691.982 482.606 727.91 481.94 760.405 480.874C778.369 480.208 795.532 479.942 812.008 480.608C846.105 481.94 875.053 485.271 904.345 494.864C947.138 508.986 994.164 538.43 1032.27 587.192C1036.16 592.122 1039.93 597.185 1043.48 602.248C1082.38 656.872 1100.35 704.969 1103.89 751.333C1107.67 801.561 1098.63 857.651 1103.78 927.997C1105.38 949.047 1108.13 971.164 1112.36 993.546C1120.03 1034.98 1132.15 1077.48 1148.29 1116.39C1172.89 1175.54 1206.87 1225.9 1240.51 1257.08"
        stroke="#8C8BAC"
        strokeMiterlimit="10"
      />
      <path
        d="M104.436 236.529C151.348 203.088 203.18 179.906 256.5 174.177C287.965 170.713 320.117 173.511 350.553 183.903C370.347 190.564 389.341 200.423 406.847 213.613C461.54 254.249 501.816 322.33 541.977 377.354C559.826 401.735 575.044 425.583 596.899 442.77C615.892 457.825 638.547 466.485 662.461 471.282C695.3 477.677 731.571 477.011 764.409 475.145C782.488 474.079 799.994 473.68 816.585 473.014C851.368 471.815 881.461 473.813 912.011 481.407C956.635 492.599 1006.29 519.911 1044.74 569.206C1048.63 574.269 1052.4 579.332 1055.95 584.528C1094.62 640.085 1109.84 692.445 1110.3 741.207C1110.87 794.366 1098.29 852.055 1101.49 923.6C1102.41 945.05 1104.81 967.566 1108.81 990.349C1116.02 1032.45 1128.26 1075.48 1145.08 1114.65C1170.71 1174.21 1206.87 1224.17 1243.37 1254.01"
        stroke="#9391B4"
        strokeMiterlimit="10"
      />
      <path
        d="M110.5 225.071C157.183 192.297 209.015 170.313 262.106 165.251C293.343 162.186 325.266 165.384 355.358 175.643C375.039 182.304 393.918 192.03 411.31 204.82C466.002 244.656 506.85 310.872 545.867 366.696C563.374 391.743 578.134 416.79 599.874 435.043C618.753 450.897 641.408 460.357 665.551 465.42C698.618 472.348 735.232 471.548 768.3 469.017C786.607 467.551 804.227 466.086 821.162 465.153C856.632 463.155 887.868 461.956 919.677 467.685C966.246 475.945 1018.31 501.125 1057.21 550.954C1061.21 556.017 1064.88 561.213 1068.42 566.409C1106.87 622.765 1119.23 679.388 1116.71 730.815C1114.08 786.906 1097.94 846.06 1099.2 919.07C1099.55 941.054 1101.6 963.969 1105.27 987.018C1112.02 1029.92 1124.37 1073.35 1141.77 1112.79C1168.43 1172.61 1206.64 1222.3 1246.12 1250.82"
        stroke="#9A98BC"
        strokeMiterlimit="10"
      />
      <path
        d="M116.679 213.747C163.248 181.771 214.965 160.721 267.827 156.457C298.835 153.793 330.529 157.257 360.393 167.516C379.844 174.177 398.609 183.77 416.001 196.293C470.579 235.33 512.228 299.68 549.987 356.304C567.15 382.15 581.452 408.264 602.963 427.449C621.728 444.236 644.497 454.361 668.754 459.824C702.051 467.285 738.894 466.485 772.304 463.155C790.726 461.289 808.69 459.158 825.853 457.426C862.01 453.695 894.39 450.364 927.458 454.095C975.972 459.557 1030.44 482.34 1069.91 532.834C1073.92 537.897 1077.69 543.226 1081.24 548.556C1119.34 605.712 1128.95 666.598 1123.57 720.556C1117.62 779.578 1097.94 840.331 1097.26 914.674C1097.03 937.056 1098.63 960.372 1102.06 983.821C1108.36 1027.39 1120.83 1071.49 1138.91 1111.06C1166.48 1171.28 1206.99 1220.57 1249.32 1247.75"
        stroke="#A19EC5"
        strokeMiterlimit="10"
      />
      <path
        d="M122.743 202.289C169.197 170.979 220.8 151.128 273.319 147.531C304.213 145.399 335.449 148.996 365.198 159.255C384.535 165.917 403.186 175.376 420.578 187.633C475.156 225.87 517.377 288.356 553.991 345.911C570.811 372.424 584.656 399.737 606.052 419.988C624.702 437.707 647.586 448.499 671.958 454.228C705.483 462.089 742.669 461.422 776.309 457.292C794.959 455.027 813.038 452.229 830.544 449.698C867.387 444.369 900.798 438.773 935.238 440.505C985.583 443.037 1042.68 463.687 1082.5 514.715C1086.5 519.911 1090.28 525.24 1093.82 530.569C1131.7 588.658 1138.45 653.674 1130.09 710.164C1120.94 771.983 1097.71 834.335 1095.08 910.01C1094.28 932.926 1095.43 956.508 1098.63 980.356C1104.46 1024.59 1117.05 1069.22 1135.7 1109.06C1164.31 1169.68 1206.99 1218.57 1252.18 1244.42"
        stroke="#A8A5CD"
        strokeMiterlimit="10"
      />
      <path
        d="M128.807 190.964C175.033 160.321 226.636 141.668 278.926 138.737C309.59 137.005 340.598 140.869 370.004 151.128C389.227 157.789 407.648 167.115 425.04 178.973C479.504 216.278 522.526 277.031 557.882 335.386C574.358 362.698 587.745 391.076 609.027 412.26C627.563 430.912 650.447 442.237 675.162 448.499C708.916 456.892 746.331 456.093 780.428 451.297C799.307 448.632 817.5 445.168 835.235 441.837C872.765 434.776 907.32 426.915 943.019 426.782C995.309 426.249 1054.81 444.902 1095.08 496.462C1099.2 501.658 1102.86 506.987 1106.41 512.583C1144.05 571.471 1147.94 640.751 1136.73 699.772C1124.37 764.522 1097.6 828.473 1092.91 905.48C1091.54 928.796 1092.22 952.911 1095.2 977.025C1100.57 1022.06 1113.28 1067.09 1132.61 1107.19C1162.25 1168.21 1207.1 1216.71 1255.16 1241.22"
        stroke="#AFABD5"
        strokeMiterlimit="10"
      />
      <path
        d="M134.871 179.639C180.982 149.796 232.471 132.076 284.532 129.944C314.968 128.612 345.632 132.875 374.924 143.001C393.918 149.662 412.339 158.855 429.617 170.446C484.08 206.952 527.674 265.84 561.886 324.994C578.134 352.973 590.949 382.55 612.002 404.799C630.423 424.384 653.422 436.375 678.251 443.037C712.234 451.963 749.992 451.164 784.318 445.568C803.312 442.504 821.848 438.373 839.812 434.243C878.028 425.45 913.727 415.458 950.685 413.326C1004.92 409.862 1066.94 426.383 1107.67 478.476C1111.79 483.672 1115.56 489.134 1119 494.73C1156.41 554.551 1157.56 627.961 1143.25 689.647C1127.58 757.195 1097.26 822.744 1090.73 901.217C1088.79 924.932 1089.13 949.447 1091.76 973.961C1096.68 1019.66 1109.5 1065.36 1129.41 1105.46C1159.96 1166.88 1207.1 1214.98 1258.02 1238.16"
        stroke="#B6B2DE"
        strokeMiterlimit="10"
      />
      <path
        d="M140.935 168.181C186.817 139.004 238.306 122.483 290.024 121.018C320.231 120.085 350.667 124.615 379.615 134.741C398.494 141.402 416.801 150.462 433.964 161.786C488.314 197.492 532.594 254.515 565.662 314.602C581.451 343.38 593.923 374.023 614.862 397.205C633.169 417.589 656.168 430.38 681.226 437.308C715.323 446.767 753.425 445.968 788.094 439.573C807.316 436.109 825.967 431.312 844.274 426.516C883.177 415.991 919.905 403.867 958.236 399.737C1014.3 393.475 1078.83 407.73 1120.03 460.357C1124.14 465.686 1127.92 471.148 1131.47 476.877C1168.54 537.497 1166.94 615.171 1149.66 679.388C1130.78 749.867 1096.8 816.882 1088.45 896.687C1085.81 920.935 1085.81 945.849 1088.22 970.764C1092.68 1017.13 1105.61 1063.36 1126.2 1103.73C1157.78 1165.55 1207.1 1213.24 1260.88 1234.96"
        stroke="#BDB8E6"
        strokeMiterlimit="10"
      />
      <path
        d="M147 156.857C192.768 128.478 244.142 112.89 295.631 112.224C325.609 111.825 355.816 116.488 384.536 126.613C403.3 133.275 421.379 142.068 438.542 153.126C492.891 188.033 537.744 243.323 569.667 304.077C585.114 333.521 597.128 365.363 617.838 389.478C636.03 410.794 659.143 424.118 684.316 431.579C718.642 441.571 757.087 440.638 791.985 433.577C811.322 429.713 830.201 424.384 848.851 418.655C888.441 406.531 926.313 392.142 965.903 385.88C1023.91 376.687 1090.85 388.811 1132.5 441.971C1136.62 447.3 1140.51 452.895 1143.94 458.624C1180.78 520.177 1176.32 601.847 1156.18 668.729C1134.1 742.006 1096.57 810.753 1086.16 891.891C1082.95 916.539 1082.5 941.852 1084.67 967.166C1088.68 1014.33 1101.72 1060.96 1122.89 1101.6C1155.5 1163.81 1206.99 1211.11 1263.62 1231.5"
        stroke="#C4BFEE"
        strokeMiterlimit="10"
      />
      <path
        d="M153.178 145.399C198.832 117.687 250.092 103.298 301.352 103.298C331.101 103.298 360.965 108.228 389.57 118.353C408.22 124.881 426.184 133.675 443.233 144.466C497.468 178.573 542.892 231.999 573.786 293.685C588.889 323.928 600.445 356.703 621.041 382.017C639.119 404.266 662.347 418.256 687.748 426.116C722.303 436.641 760.976 435.709 796.332 427.981C815.898 423.718 834.892 417.723 853.771 411.194C893.932 397.205 933.064 380.818 973.912 372.557C1033.87 360.567 1103.32 370.426 1145.43 424.118C1149.66 429.447 1153.44 435.176 1156.87 440.905C1193.48 503.257 1186.16 589.191 1163.05 658.604C1137.65 734.545 1096.57 805.025 1084.33 887.628C1080.55 912.675 1079.75 938.522 1081.58 964.102C1085.13 1011.93 1098.29 1059.1 1120.14 1100C1153.67 1162.62 1207.44 1209.51 1266.94 1228.57"
        stroke="#CBC5F7"
        strokeMiterlimit="10"
      />
      <path
        d="M159.242 134.074C231.098 91.5738 317.256 82.7805 394.375 110.226C471.494 137.672 538.544 201.223 577.561 283.293C592.321 314.336 603.42 348.176 623.901 374.423C666.237 428.914 738.207 436.775 800.108 421.986C861.894 407.197 919.562 373.757 981.463 358.835C1043.25 343.913 1115.22 351.64 1157.78 405.865C1207.33 469.15 1197.95 569.473 1169.45 648.212C1140.85 727.085 1096.23 799.029 1081.92 882.965C1069.45 956.241 1082.15 1034.98 1116.71 1098C1151.26 1161.02 1207.21 1207.51 1269.57 1225.23"
        stroke="#D2CCFF"
        strokeMiterlimit="10"
      />
      <path
        d="M178.351 129.011C249.749 87.7099 334.877 79.9825 410.852 107.961C486.826 135.939 553.076 198.958 590.949 280.628C605.709 312.47 616.006 347.776 635.801 374.955C675.962 430.113 745.53 439.439 805.486 427.315C865.327 415.191 921.851 384.948 983.065 371.891C1045.08 358.568 1117.39 364.83 1161.1 417.589C1211.68 479.009 1205.15 578.665 1177.69 658.071C1150.23 737.476 1104.46 809.821 1088.56 891.624C1074.83 962.37 1086.39 1038.05 1118.42 1099.06C1150.46 1160.08 1203.21 1206.05 1263.28 1224.43"
        stroke="#CDC9FE"
        strokeMiterlimit="10"
      />
      <path
        d="M197.573 124.082C268.399 84.1128 352.612 77.318 427.557 105.696C502.502 134.074 567.836 196.826 604.45 278.097C619.21 310.872 628.593 347.377 647.701 375.488C685.574 431.179 752.853 442.104 810.749 432.644C868.76 423.318 924.139 396.139 984.667 384.815C1046.91 373.223 1119.68 377.753 1164.54 429.18C1216.25 488.601 1212.36 587.858 1186.16 667.663C1159.96 747.469 1113.05 820.346 1095.43 899.885C1080.32 967.966 1090.85 1040.84 1120.37 1099.86C1150 1158.89 1199.43 1204.32 1257.22 1223.37"
        stroke="#C7C6FE"
        strokeMiterlimit="10"
      />
      <path
        d="M216.682 119.019C287.05 80.3825 370.233 74.6536 444.148 103.298C518.064 131.943 582.367 194.561 617.838 275.432C632.598 309.14 641.065 346.844 659.601 376.022C695.3 432.245 760.061 444.635 816.127 437.974C872.193 431.312 926.428 407.198 986.384 397.738C1048.74 387.879 1122.09 390.677 1167.97 440.772C1220.83 498.327 1219.57 597.051 1194.63 677.256C1169.68 757.461 1121.51 830.738 1102.18 908.278C1085.93 973.562 1095.08 1043.64 1122.2 1100.8C1149.32 1157.82 1195.54 1202.59 1251.04 1222.44"
        stroke="#C2C3FD"
        strokeMiterlimit="10"
      />
      <path
        d="M235.904 113.957C305.7 76.5187 388.082 71.8556 460.853 101.033C533.624 130.211 597.013 192.563 631.339 272.901C646.099 307.541 653.651 346.311 671.615 376.688C705.14 433.311 767.498 447.433 821.619 443.569C875.74 439.706 928.83 418.655 988.214 410.928C1050.92 402.668 1124.49 404 1171.63 452.629C1225.64 508.32 1227.01 606.377 1203.32 687.115C1179.52 767.853 1130.32 841.263 1109.27 916.805C1091.76 979.424 1099.77 1046.71 1124.37 1101.86C1148.97 1157.02 1192 1201.12 1245.2 1221.77"
        stroke="#BDC0FD"
        strokeMiterlimit="10"
      />
      <path
        d="M255.012 109.027C324.351 72.9214 405.703 69.1909 477.33 98.7681C548.957 128.345 611.43 190.431 644.612 270.236C659.372 305.809 666.123 345.778 683.4 377.087C714.751 434.11 774.707 449.964 826.883 448.765C879.058 447.566 931.119 429.847 989.816 423.718C1052.75 417.19 1126.66 416.923 1174.95 464.087C1229.98 517.912 1234.22 615.437 1211.56 696.575C1189.02 777.712 1138.68 851.522 1115.79 925.065C1097.14 985.019 1103.89 1049.37 1125.98 1102.53C1148.06 1155.69 1187.88 1199.25 1238.68 1220.57"
        stroke="#B8BDFC"
        strokeMiterlimit="10"
      />
      <path
        d="M274.234 103.964C343.001 69.1912 423.438 66.3934 494.035 96.5035C564.632 126.614 625.961 188.433 658.113 267.705C672.873 304.21 678.708 345.245 695.299 377.754C724.591 435.043 781.915 452.629 832.26 454.228C882.49 455.827 933.407 441.172 991.532 436.775C1054.69 432.112 1128.95 429.98 1178.49 475.812C1234.67 527.772 1241.54 624.764 1220.14 706.434C1198.75 788.105 1147.49 862.048 1122.77 933.593C1103.09 990.749 1108.36 1052.43 1128.04 1103.59C1147.72 1154.76 1184.22 1197.66 1232.73 1219.77"
        stroke="#B2BAFC"
        strokeMiterlimit="10"
      />
      <path
        d="M293.343 98.9013C361.651 65.4603 441.059 63.5951 510.626 94.105C580.193 124.615 640.378 186.301 671.5 265.04C686.261 302.478 691.295 344.579 707.199 378.153C734.431 435.575 789.238 455.16 837.524 459.424C885.923 463.687 935.696 452.362 993.135 449.698C1056.52 446.767 1131.24 443.036 1181.81 487.402C1239.02 537.497 1248.63 633.823 1228.5 716.026C1208.36 798.23 1156.07 872.173 1129.52 941.986C1108.81 996.344 1112.7 1055.23 1129.87 1104.53C1147.03 1153.69 1180.21 1196.06 1226.55 1218.84"
        stroke="#ADB6FB"
        strokeMiterlimit="10"
      />
      <path
        d="M312.565 93.972C380.301 61.7302 458.794 60.9308 527.217 91.8403C595.64 122.75 654.795 184.303 684.887 262.509C699.647 300.879 703.766 343.913 719.099 378.819C744.385 436.375 796.561 457.959 842.901 464.887C889.355 471.948 938.098 460.09 994.851 462.755C1058.47 465.686 1133.53 456.227 1185.36 499.127C1243.6 547.356 1255.96 643.149 1236.96 725.752C1217.97 808.355 1164.88 882.565 1136.27 950.38C1114.53 1002.07 1117.05 1058.16 1131.7 1105.33C1146.34 1152.62 1176.32 1194.19 1220.37 1217.77"
        stroke="#A8B3FB"
        strokeMiterlimit="10"
      />
      <path
        d="M331.673 88.909C398.952 57.9995 476.529 58.1327 543.808 89.5752C611.201 120.884 669.212 182.304 698.275 259.844C713.035 299.147 716.353 343.247 730.999 379.219C754.34 436.908 803.77 460.356 848.279 470.215C892.788 479.941 940.616 471.148 996.567 475.678C1060.41 480.741 1135.82 469.283 1188.79 510.718C1248.18 557.082 1263.17 652.342 1245.43 735.345C1227.7 818.347 1173.69 892.69 1143.14 958.639C1120.48 1007.54 1121.4 1060.83 1133.64 1106.13C1145.88 1151.42 1172.54 1192.46 1214.31 1216.71"
        stroke="#A3B0FA"
        strokeMiterlimit="10"
      />
      <path
        d="M350.896 83.8463C417.717 54.2691 494.264 55.335 560.513 87.1771C626.762 119.019 683.628 180.172 711.776 257.18C726.421 297.415 729.053 342.447 742.898 379.752C764.294 437.441 811.092 463.021 853.656 475.545C896.22 488.068 942.904 486.47 998.283 488.601C1062.59 491.133 1138.1 482.206 1192.34 522.309C1252.75 566.808 1270.6 661.535 1254.01 744.937C1237.42 828.34 1182.73 902.816 1150 967.033C1126.55 1013.13 1125.86 1063.76 1135.59 1107.06C1145.31 1150.36 1168.77 1190.86 1208.24 1215.77"
        stroke="#9DADFA"
        strokeMiterlimit="10"
      />
      <path
        d="M370.004 78.9169C436.253 50.672 511.885 52.8037 577.104 84.9123C642.323 117.021 698.046 178.174 725.163 254.648C739.809 295.817 741.754 341.781 754.798 380.418C774.364 438.24 818.301 465.819 859.034 481.007C899.653 496.196 945.192 497.928 999.885 501.658C1064.42 506.055 1140.28 495.396 1195.66 533.9C1257.1 576.667 1277.7 670.595 1262.36 754.53C1247.03 838.466 1191.54 912.942 1156.75 975.294C1132.5 1018.73 1130.21 1066.42 1137.42 1107.73C1144.63 1149.03 1164.88 1188.86 1202.07 1214.58"
        stroke="#98AAF9"
        strokeMiterlimit="10"
      />
      <path
        d="M389.227 73.854C455.018 46.8081 529.62 50.0057 593.695 82.6472C657.77 115.289 712.348 176.308 738.55 252.117C753.082 294.218 754.34 341.115 766.698 380.951C784.547 438.64 825.624 468.35 864.298 486.336C902.972 504.323 947.481 509.385 1001.49 514.715C1066.36 521.11 1142.45 508.586 1198.98 545.624C1261.45 586.526 1284.79 679.921 1270.6 764.389C1256.41 848.857 1200.46 923.333 1163.28 983.953C1138.45 1024.59 1134.21 1069.62 1139.02 1108.92C1143.83 1148.23 1160.76 1187.53 1195.66 1213.91"
        stroke="#93A7F9"
        strokeMiterlimit="10"
      />
      <path
        d="M408.334 68.9245C473.554 43.2109 547.24 47.3411 610.285 80.3823C673.331 113.424 726.65 174.31 751.823 249.585C766.354 292.752 766.926 340.449 778.483 381.617C794.616 439.306 832.832 471.148 869.561 491.799C906.404 512.45 949.769 520.976 1003.09 527.771C1068.19 536.032 1144.51 521.776 1202.41 557.348C1265.91 596.385 1292 689.247 1279.07 774.115C1266.14 858.983 1209.62 933.592 1170.14 992.347C1144.63 1030.32 1138.68 1072.42 1140.96 1109.86C1143.25 1147.29 1156.98 1185.93 1189.59 1212.98"
        stroke="#8EA4F9"
        strokeMiterlimit="10"
      />
      <path
        d="M427.557 63.8618C492.319 39.4806 565.09 44.5433 626.991 77.9843C688.892 111.425 741.067 172.312 765.324 246.788C779.741 290.887 779.856 339.516 790.382 381.884C804.799 439.573 840.041 473.546 874.939 496.995C909.837 520.444 952.172 532.301 1004.81 540.562C1070.25 550.82 1146.8 534.699 1205.84 568.806C1270.37 606.111 1299.32 698.174 1287.54 783.574C1275.75 868.975 1218.88 943.718 1177.01 1000.61C1151.03 1035.91 1143.14 1075.22 1142.91 1110.52C1142.68 1145.96 1153.21 1183.93 1183.53 1211.91"
        stroke="#88A1F8"
        strokeMiterlimit="10"
      />
      <path
        d="M446.665 58.7988C510.855 35.6166 582.71 41.7453 643.582 75.7191C704.453 109.693 755.255 170.313 778.711 244.256C793.014 289.288 792.556 338.717 802.282 382.55C815.097 440.105 847.363 476.211 880.316 502.457C913.269 528.704 954.575 543.892 1006.52 553.618C1072.31 565.875 1149.09 548.022 1209.39 580.53C1274.95 615.97 1306.64 707.499 1296 793.3C1285.48 879.101 1228.27 954.11 1183.76 1009C1157.21 1041.78 1147.49 1078.01 1144.74 1111.46C1141.99 1144.9 1149.32 1182.33 1177.35 1210.98"
        stroke="#839EF8"
        strokeMiterlimit="10"
      />
      <path
        d="M465.888 53.8696C529.62 32.0197 600.445 39.0809 660.173 73.4545C719.9 107.828 769.558 168.448 792.099 241.725C806.287 287.823 805.371 338.051 814.182 383.216C825.395 440.772 854.686 479.009 885.694 507.92C916.702 536.831 956.978 555.617 1008.24 566.675C1074.26 581.064 1151.38 561.212 1212.82 592.255C1279.41 625.963 1313.85 716.826 1304.47 803.026C1295.09 889.36 1237.65 964.635 1190.62 1017.53C1163.73 1047.77 1151.83 1080.95 1146.69 1112.52C1141.54 1143.96 1145.54 1180.74 1171.17 1210.18"
        stroke="#7E9BF7"
        strokeMiterlimit="10"
      />
      <path
        d="M484.996 48.8069C548.156 28.2893 618.066 36.2832 676.764 71.0564C735.461 105.83 783.746 166.316 805.486 239.06C819.56 286.091 818.187 337.251 826.082 383.616C835.693 441.171 861.895 481.54 890.958 513.116C920.02 544.825 959.152 566.941 1009.84 579.465C1076.09 595.852 1153.55 574.136 1216.25 603.713C1283.88 635.555 1321.06 725.752 1312.94 812.619C1304.81 899.485 1247.15 975.16 1197.37 1025.79C1170.03 1053.5 1156.18 1083.74 1148.52 1113.19C1140.85 1142.63 1141.65 1178.87 1164.99 1208.98"
        stroke="#7898F7"
        strokeMiterlimit="10"
      />
      <path
        d="M504.104 43.7441C566.807 24.5589 635.687 33.4853 693.355 68.7915C751.023 104.098 798.049 164.451 818.873 236.396C832.833 284.492 831.116 336.319 837.867 384.149C845.991 441.571 869.104 484.072 896.221 518.445C923.339 552.819 961.441 578.532 1011.44 592.522C1078.03 611.041 1155.73 587.326 1219.57 615.437C1288.22 645.548 1328.27 735.079 1321.29 822.345C1314.31 909.611 1256.64 985.952 1204.13 1034.18C1176.55 1059.5 1160.53 1086.54 1150.35 1114.12C1140.28 1141.7 1137.76 1177.27 1158.81 1208.05"
        stroke="#7395F6"
        strokeMiterlimit="10"
      />
      <path
        d="M523.327 38.8146C585.571 20.8284 653.422 30.9539 710.06 66.5266C766.583 102.099 812.351 162.586 832.375 233.864C846.219 282.893 844.16 335.653 849.881 384.682C856.517 442.104 876.426 486.736 901.713 523.908C927 561.079 963.957 590.257 1013.27 605.578C1080.09 626.229 1158.01 600.649 1223.23 627.162C1292.91 655.54 1335.71 744.405 1329.87 832.071C1324.15 919.736 1266.48 996.877 1211.1 1042.71C1183.19 1065.76 1164.99 1089.61 1152.41 1115.19C1139.82 1140.77 1134.1 1175.67 1152.86 1207.25"
        stroke="#6E92F6"
        strokeMiterlimit="10"
      />
      <path
        d="M542.435 33.7517C604.222 17.0978 671.157 28.156 726.651 64.1283C782.145 100.234 826.539 160.587 845.762 231.2C859.378 281.294 857.204 334.853 861.781 385.214C867.044 442.637 883.749 489.401 907.091 529.237C930.433 569.073 966.246 601.848 1014.87 618.502C1081.92 641.417 1160.19 613.705 1226.55 638.753C1297.26 665.399 1342.8 753.598 1338.23 841.663C1333.65 929.729 1276.1 1007.94 1217.74 1050.97C1189.48 1071.75 1169.23 1092.27 1154.12 1115.85C1139.02 1139.43 1130.1 1173.81 1146.57 1206.05"
        stroke="#698EF5"
        strokeMiterlimit="10"
      />
      <path
        d="M561.657 28.6891C622.872 13.3675 688.892 25.3583 743.242 61.8635C797.591 98.3687 840.727 158.589 859.149 228.668C872.65 279.696 870.133 334.187 873.68 385.748C877.57 443.17 891.072 491.932 912.469 534.566C933.865 577.2 968.534 613.572 1016.59 631.425C1083.87 656.472 1162.48 626.895 1230.1 650.344C1301.84 675.258 1350.12 762.657 1346.81 851.256C1343.49 939.854 1286.05 1019.26 1224.72 1059.36C1196.12 1078.01 1173.8 1095.2 1156.18 1116.78C1138.68 1138.37 1126.43 1172.21 1140.62 1205.12"
        stroke="#638BF5"
        strokeMiterlimit="10"
      />
      <path
        d="M580.766 23.7592C641.408 9.77 706.513 22.6934 759.833 59.5983C813.152 96.5032 854.801 156.724 872.536 226.004C885.809 278.097 883.292 333.388 885.466 386.28C887.983 443.703 898.281 494.597 917.732 539.895C937.183 585.194 970.823 625.163 1018.19 644.348C1085.59 671.661 1164.65 639.952 1233.42 661.935C1306.19 685.117 1357.22 771.85 1355.04 860.848C1352.87 949.98 1295.55 1030.72 1231.24 1067.62C1202.29 1084.28 1177.81 1097.87 1157.78 1117.58C1137.76 1137.3 1122.2 1170.34 1134.21 1204.05"
        stroke="#5E88F4"
        strokeMiterlimit="10"
      />
      <path
        d="M599.988 18.6965C660.173 5.90635 724.248 19.8956 776.423 57.2002C828.599 94.5048 868.989 154.725 885.923 223.339C898.967 276.365 896.335 332.588 897.365 386.813C898.509 444.369 905.489 497.261 922.995 545.225C940.501 593.321 972.997 636.887 1019.79 657.405C1087.42 686.982 1166.71 653.275 1236.73 673.659C1310.54 695.109 1364.43 781.176 1363.4 870.707C1362.37 960.238 1305.16 1042.71 1237.99 1076.28C1208.7 1090.94 1182.16 1101.06 1159.62 1118.65C1137.07 1136.37 1118.31 1168.88 1128.04 1203.25"
        stroke="#5985F4"
        strokeMiterlimit="10"
      />
      <path
        d="M619.096 13.634C678.709 2.17613 741.869 17.098 793.014 54.9355C844.16 92.6398 883.177 152.727 899.31 220.808C912.125 274.9 909.494 331.922 909.265 387.346C909.036 444.902 912.812 499.793 928.373 550.687C943.934 601.448 975.285 648.612 1021.51 670.462C1089.25 702.437 1169 666.598 1240.28 685.384C1315.11 705.102 1371.75 790.369 1371.98 880.433C1372.21 970.497 1315.11 1054.57 1244.97 1084.54C1215.34 1097.2 1186.73 1103.73 1161.68 1119.45C1136.62 1135.17 1114.65 1167.01 1122.09 1202.32"
        stroke="#5482F3"
        strokeMiterlimit="10"
      />
      <path
        d="M638.318 8.70423C697.473 -1.42131 759.718 14.4332 809.719 52.6704C859.721 90.9076 897.365 150.861 912.812 218.276C925.398 273.301 922.766 331.389 921.279 388.012C919.791 445.701 920.134 502.591 933.865 556.15C947.595 609.708 977.688 660.469 1023.34 683.518C1091.19 717.758 1171.4 679.921 1243.83 697.108C1319.69 715.227 1379.07 799.695 1380.56 890.159C1382.05 980.623 1324.84 1066.96 1251.84 1093.2C1221.75 1103.99 1191.08 1106.93 1163.62 1120.65C1136.16 1134.37 1110.87 1165.68 1116.02 1201.65"
        stroke="#4E7FF3"
        strokeMiterlimit="10"
      />
      <path
        d="M657.427 3.64165C716.01 -5.28481 777.339 11.7687 826.31 50.2724C875.282 88.9093 911.439 148.863 926.199 215.479C938.556 271.569 935.925 330.457 933.064 388.279C930.204 446.101 927.343 504.989 939.128 561.213C950.914 617.436 979.747 671.927 1024.94 696.175C1092.91 732.814 1173.57 692.711 1247.26 708.433C1324.15 724.687 1386.28 808.622 1388.91 899.485C1391.54 990.349 1334.33 1078.95 1258.59 1101.2C1227.92 1110.26 1195.43 1109.32 1165.45 1121.05C1135.47 1132.77 1106.98 1163.55 1109.84 1200.19"
        stroke="#497CF2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default SponsorsLinesSVG;