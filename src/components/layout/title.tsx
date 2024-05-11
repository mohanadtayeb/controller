import React from "react";
import { useRouterContext, useLink, useRouterType } from "@refinedev/core";
import MuiLink from "@mui/material/Link";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import type { RefineLayoutThemedTitleProps } from "@refinedev/mui";

const defaultText = "blog admin panel";

const defaultIcon = (
<svg xmlns="http://www.w3.org/2000/svg" width="3304.86" height="2982.48" viewBox="0 0 3304.86 2982.48">
<defs>
<clipPath id="clip-0">
<path clip-rule="nonzero" d="M 0 0 L 3304.859375 0 L 3304.859375 2982.480469 L 0 2982.480469 Z M 0 0 "/>
</clipPath>
<clipPath id="clip-1">
<path clip-rule="nonzero" d="M 442.898438 1161.351562 L 900.285156 1161.351562 L 900.285156 1618.789062 L 442.898438 1618.789062 Z M 442.898438 1161.351562 "/>
</clipPath>
<linearGradient id="linear-pattern-0" gradientUnits="userSpaceOnUse" x1="-0.00000000595642" y1="0" x2="1.000004" y2="0" gradientTransform="matrix(0.00000545, 457.438, -457.438, 0.00000545, 671.592, 1161.35)">
<stop offset="0" stop-color="rgb(92.939758%, 10.980225%, 14.117432%)" stop-opacity="1"/>
<stop offset="0.0078125" stop-color="rgb(92.7948%, 10.974121%, 14.102173%)" stop-opacity="1"/>
<stop offset="0.015625" stop-color="rgb(92.503357%, 10.961914%, 14.070129%)" stop-opacity="1"/>
<stop offset="0.0234375" stop-color="rgb(92.211914%, 10.949707%, 14.039612%)" stop-opacity="1"/>
<stop offset="0.03125" stop-color="rgb(91.920471%, 10.935974%, 14.009094%)" stop-opacity="1"/>
<stop offset="0.0390625" stop-color="rgb(91.630554%, 10.923767%, 13.978577%)" stop-opacity="1"/>
<stop offset="0.046875" stop-color="rgb(91.339111%, 10.91156%, 13.948059%)" stop-opacity="1"/>
<stop offset="0.0546875" stop-color="rgb(91.047668%, 10.899353%, 13.917542%)" stop-opacity="1"/>
<stop offset="0.0625" stop-color="rgb(90.756226%, 10.887146%, 13.887024%)" stop-opacity="1"/>
<stop offset="0.0703125" stop-color="rgb(90.466309%, 10.874939%, 13.856506%)" stop-opacity="1"/>
<stop offset="0.078125" stop-color="rgb(90.174866%, 10.862732%, 13.825989%)" stop-opacity="1"/>
<stop offset="0.0859375" stop-color="rgb(89.883423%, 10.850525%, 13.795471%)" stop-opacity="1"/>
<stop offset="0.09375" stop-color="rgb(89.59198%, 10.838318%, 13.764954%)" stop-opacity="1"/>
<stop offset="0.101562" stop-color="rgb(89.302063%, 10.826111%, 13.734436%)" stop-opacity="1"/>
<stop offset="0.109375" stop-color="rgb(89.01062%, 10.813904%, 13.703918%)" stop-opacity="1"/>
<stop offset="0.117188" stop-color="rgb(88.719177%, 10.801697%, 13.671875%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(88.42926%, 10.78949%, 13.641357%)" stop-opacity="1"/>
<stop offset="0.132812" stop-color="rgb(88.137817%, 10.777283%, 13.61084%)" stop-opacity="1"/>
<stop offset="0.140625" stop-color="rgb(87.846375%, 10.765076%, 13.580322%)" stop-opacity="1"/>
<stop offset="0.148438" stop-color="rgb(87.554932%, 10.752869%, 13.549805%)" stop-opacity="1"/>
<stop offset="0.15625" stop-color="rgb(87.265015%, 10.740662%, 13.519287%)" stop-opacity="1"/>
<stop offset="0.164062" stop-color="rgb(86.973572%, 10.728455%, 13.48877%)" stop-opacity="1"/>
<stop offset="0.171875" stop-color="rgb(86.682129%, 10.716248%, 13.458252%)" stop-opacity="1"/>
<stop offset="0.179688" stop-color="rgb(86.390686%, 10.704041%, 13.427734%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(86.100769%, 10.691833%, 13.397217%)" stop-opacity="1"/>
<stop offset="0.195312" stop-color="rgb(85.809326%, 10.679626%, 13.366699%)" stop-opacity="1"/>
<stop offset="0.203125" stop-color="rgb(85.517883%, 10.667419%, 13.336182%)" stop-opacity="1"/>
<stop offset="0.210938" stop-color="rgb(85.22644%, 10.655212%, 13.304138%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(84.936523%, 10.643005%, 13.273621%)" stop-opacity="1"/>
<stop offset="0.226562" stop-color="rgb(84.645081%, 10.630798%, 13.243103%)" stop-opacity="1"/>
<stop offset="0.234375" stop-color="rgb(84.353638%, 10.618591%, 13.212585%)" stop-opacity="1"/>
<stop offset="0.242188" stop-color="rgb(84.062195%, 10.606384%, 13.182068%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(83.772278%, 10.594177%, 13.15155%)" stop-opacity="1"/>
<stop offset="0.257812" stop-color="rgb(83.480835%, 10.58197%, 13.121033%)" stop-opacity="1"/>
<stop offset="0.265625" stop-color="rgb(83.189392%, 10.569763%, 13.090515%)" stop-opacity="1"/>
<stop offset="0.273438" stop-color="rgb(82.897949%, 10.557556%, 13.059998%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(82.608032%, 10.543823%, 13.02948%)" stop-opacity="1"/>
<stop offset="0.289062" stop-color="rgb(82.316589%, 10.531616%, 12.998962%)" stop-opacity="1"/>
<stop offset="0.296875" stop-color="rgb(82.025146%, 10.519409%, 12.968445%)" stop-opacity="1"/>
<stop offset="0.304688" stop-color="rgb(81.733704%, 10.507202%, 12.937927%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(81.443787%, 10.494995%, 12.905884%)" stop-opacity="1"/>
<stop offset="0.320312" stop-color="rgb(81.152344%, 10.482788%, 12.875366%)" stop-opacity="1"/>
<stop offset="0.328125" stop-color="rgb(80.860901%, 10.470581%, 12.844849%)" stop-opacity="1"/>
<stop offset="0.335938" stop-color="rgb(80.569458%, 10.458374%, 12.814331%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(80.279541%, 10.446167%, 12.783813%)" stop-opacity="1"/>
<stop offset="0.351562" stop-color="rgb(79.988098%, 10.43396%, 12.753296%)" stop-opacity="1"/>
<stop offset="0.359375" stop-color="rgb(79.696655%, 10.421753%, 12.722778%)" stop-opacity="1"/>
<stop offset="0.367188" stop-color="rgb(79.405212%, 10.409546%, 12.692261%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(79.115295%, 10.397339%, 12.661743%)" stop-opacity="1"/>
<stop offset="0.382812" stop-color="rgb(78.823853%, 10.385132%, 12.631226%)" stop-opacity="1"/>
<stop offset="0.390625" stop-color="rgb(78.53241%, 10.372925%, 12.600708%)" stop-opacity="1"/>
<stop offset="0.398438" stop-color="rgb(78.240967%, 10.360718%, 12.57019%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(77.95105%, 10.348511%, 12.539673%)" stop-opacity="1"/>
<stop offset="0.414062" stop-color="rgb(77.659607%, 10.336304%, 12.507629%)" stop-opacity="1"/>
<stop offset="0.421875" stop-color="rgb(77.368164%, 10.324097%, 12.477112%)" stop-opacity="1"/>
<stop offset="0.429688" stop-color="rgb(77.076721%, 10.31189%, 12.446594%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(76.786804%, 10.299683%, 12.416077%)" stop-opacity="1"/>
<stop offset="0.445312" stop-color="rgb(76.495361%, 10.287476%, 12.385559%)" stop-opacity="1"/>
<stop offset="0.453125" stop-color="rgb(76.203918%, 10.275269%, 12.355042%)" stop-opacity="1"/>
<stop offset="0.460938" stop-color="rgb(75.912476%, 10.263062%, 12.324524%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(75.622559%, 10.250854%, 12.294006%)" stop-opacity="1"/>
<stop offset="0.476562" stop-color="rgb(75.331116%, 10.238647%, 12.263489%)" stop-opacity="1"/>
<stop offset="0.484375" stop-color="rgb(75.039673%, 10.22644%, 12.232971%)" stop-opacity="1"/>
<stop offset="0.492188" stop-color="rgb(74.74823%, 10.214233%, 12.202454%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(74.458313%, 10.202026%, 12.171936%)" stop-opacity="1"/>
<stop offset="0.507812" stop-color="rgb(74.16687%, 10.189819%, 12.141418%)" stop-opacity="1"/>
<stop offset="0.515625" stop-color="rgb(73.875427%, 10.177612%, 12.109375%)" stop-opacity="1"/>
<stop offset="0.523438" stop-color="rgb(73.583984%, 10.165405%, 12.078857%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(73.294067%, 10.151672%, 12.04834%)" stop-opacity="1"/>
<stop offset="0.539062" stop-color="rgb(73.002625%, 10.139465%, 12.017822%)" stop-opacity="1"/>
<stop offset="0.546875" stop-color="rgb(72.711182%, 10.127258%, 11.987305%)" stop-opacity="1"/>
<stop offset="0.554688" stop-color="rgb(72.419739%, 10.115051%, 11.956787%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(72.129822%, 10.102844%, 11.92627%)" stop-opacity="1"/>
<stop offset="0.570312" stop-color="rgb(71.838379%, 10.090637%, 11.895752%)" stop-opacity="1"/>
<stop offset="0.578125" stop-color="rgb(71.546936%, 10.07843%, 11.865234%)" stop-opacity="1"/>
<stop offset="0.585938" stop-color="rgb(71.257019%, 10.066223%, 11.834717%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(70.965576%, 10.054016%, 11.804199%)" stop-opacity="1"/>
<stop offset="0.601562" stop-color="rgb(70.674133%, 10.041809%, 11.773682%)" stop-opacity="1"/>
<stop offset="0.609375" stop-color="rgb(70.38269%, 10.029602%, 11.743164%)" stop-opacity="1"/>
<stop offset="0.617188" stop-color="rgb(70.092773%, 10.017395%, 11.711121%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(69.801331%, 10.005188%, 11.680603%)" stop-opacity="1"/>
<stop offset="0.632812" stop-color="rgb(69.509888%, 9.992981%, 11.650085%)" stop-opacity="1"/>
<stop offset="0.640625" stop-color="rgb(69.218445%, 9.980774%, 11.619568%)" stop-opacity="1"/>
<stop offset="0.648438" stop-color="rgb(68.928528%, 9.968567%, 11.58905%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(68.637085%, 9.95636%, 11.558533%)" stop-opacity="1"/>
<stop offset="0.664062" stop-color="rgb(68.345642%, 9.944153%, 11.528015%)" stop-opacity="1"/>
<stop offset="0.671875" stop-color="rgb(68.054199%, 9.931946%, 11.497498%)" stop-opacity="1"/>
<stop offset="0.679688" stop-color="rgb(67.764282%, 9.919739%, 11.46698%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(67.472839%, 9.907532%, 11.436462%)" stop-opacity="1"/>
<stop offset="0.695312" stop-color="rgb(67.181396%, 9.895325%, 11.405945%)" stop-opacity="1"/>
<stop offset="0.703125" stop-color="rgb(66.889954%, 9.883118%, 11.375427%)" stop-opacity="1"/>
<stop offset="0.710938" stop-color="rgb(66.600037%, 9.870911%, 11.343384%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(66.308594%, 9.858704%, 11.312866%)" stop-opacity="1"/>
<stop offset="0.726562" stop-color="rgb(66.017151%, 9.846497%, 11.282349%)" stop-opacity="1"/>
<stop offset="0.734375" stop-color="rgb(65.725708%, 9.83429%, 11.251831%)" stop-opacity="1"/>
<stop offset="0.742188" stop-color="rgb(65.435791%, 9.822083%, 11.221313%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(65.144348%, 9.809875%, 11.190796%)" stop-opacity="1"/>
<stop offset="0.757812" stop-color="rgb(64.852905%, 9.797668%, 11.160278%)" stop-opacity="1"/>
<stop offset="0.765625" stop-color="rgb(64.561462%, 9.785461%, 11.129761%)" stop-opacity="1"/>
<stop offset="0.773438" stop-color="rgb(64.271545%, 9.771729%, 11.099243%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(63.980103%, 9.759521%, 11.068726%)" stop-opacity="1"/>
<stop offset="0.789062" stop-color="rgb(63.68866%, 9.747314%, 11.038208%)" stop-opacity="1"/>
<stop offset="0.796875" stop-color="rgb(63.397217%, 9.735107%, 11.00769%)" stop-opacity="1"/>
<stop offset="0.804688" stop-color="rgb(63.1073%, 9.7229%, 10.977173%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(62.815857%, 9.710693%, 10.945129%)" stop-opacity="1"/>
<stop offset="0.820312" stop-color="rgb(62.524414%, 9.698486%, 10.914612%)" stop-opacity="1"/>
<stop offset="0.828125" stop-color="rgb(62.232971%, 9.686279%, 10.884094%)" stop-opacity="1"/>
<stop offset="0.835938" stop-color="rgb(61.943054%, 9.674072%, 10.853577%)" stop-opacity="1"/>
<stop offset="0.84375" stop-color="rgb(61.651611%, 9.661865%, 10.823059%)" stop-opacity="1"/>
<stop offset="0.851562" stop-color="rgb(61.360168%, 9.649658%, 10.792542%)" stop-opacity="1"/>
<stop offset="0.859375" stop-color="rgb(61.068726%, 9.637451%, 10.762024%)" stop-opacity="1"/>
<stop offset="0.867188" stop-color="rgb(60.778809%, 9.625244%, 10.731506%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(60.487366%, 9.613037%, 10.700989%)" stop-opacity="1"/>
<stop offset="0.882812" stop-color="rgb(60.195923%, 9.60083%, 10.670471%)" stop-opacity="1"/>
<stop offset="0.890625" stop-color="rgb(59.90448%, 9.588623%, 10.639954%)" stop-opacity="1"/>
<stop offset="0.898438" stop-color="rgb(59.614563%, 9.576416%, 10.609436%)" stop-opacity="1"/>
<stop offset="0.90625" stop-color="rgb(59.32312%, 9.564209%, 10.578918%)" stop-opacity="1"/>
<stop offset="0.914062" stop-color="rgb(59.031677%, 9.552002%, 10.546875%)" stop-opacity="1"/>
<stop offset="0.921875" stop-color="rgb(58.740234%, 9.539795%, 10.516357%)" stop-opacity="1"/>
<stop offset="0.929688" stop-color="rgb(58.450317%, 9.527588%, 10.48584%)" stop-opacity="1"/>
<stop offset="0.9375" stop-color="rgb(58.158875%, 9.515381%, 10.455322%)" stop-opacity="1"/>
<stop offset="0.945312" stop-color="rgb(57.867432%, 9.503174%, 10.424805%)" stop-opacity="1"/>
<stop offset="0.953125" stop-color="rgb(57.575989%, 9.490967%, 10.394287%)" stop-opacity="1"/>
<stop offset="0.960938" stop-color="rgb(57.286072%, 9.47876%, 10.36377%)" stop-opacity="1"/>
<stop offset="0.96875" stop-color="rgb(56.994629%, 9.466553%, 10.333252%)" stop-opacity="1"/>
<stop offset="0.976562" stop-color="rgb(56.703186%, 9.454346%, 10.302734%)" stop-opacity="1"/>
<stop offset="0.984375" stop-color="rgb(56.411743%, 9.442139%, 10.272217%)" stop-opacity="1"/>
<stop offset="0.992188" stop-color="rgb(56.121826%, 9.429932%, 10.241699%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(55.830383%, 9.417725%, 10.211182%)" stop-opacity="1"/>
</linearGradient>
<clipPath id="clip-2">
<path clip-rule="nonzero" d="M 1354.558594 1161.351562 L 1811.941406 1161.351562 L 1811.941406 1618.789062 L 1354.558594 1618.789062 Z M 1354.558594 1161.351562 "/>
</clipPath>
<linearGradient id="linear-pattern-1" gradientUnits="userSpaceOnUse" x1="-0.0000000218582" y1="0" x2="1.000007" y2="0" gradientTransform="matrix(-0.00002, -457.437, 457.437, -0.00002, 1583.25, 1618.79)">
<stop offset="0" stop-color="rgb(96.861267%, 92.547607%, 0%)" stop-opacity="1"/>
<stop offset="0.03125" stop-color="rgb(96.910095%, 92.356873%, 0.0183105%)" stop-opacity="1"/>
<stop offset="0.0625" stop-color="rgb(97.009277%, 91.976929%, 0.0549316%)" stop-opacity="1"/>
<stop offset="0.09375" stop-color="rgb(97.106934%, 91.596985%, 0.0915527%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(97.20459%, 91.218567%, 0.128174%)" stop-opacity="1"/>
<stop offset="0.15625" stop-color="rgb(97.302246%, 90.838623%, 0.164795%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(97.401428%, 90.458679%, 0.201416%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(97.499084%, 90.078735%, 0.238037%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(97.596741%, 89.698792%, 0.274658%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(97.694397%, 89.318848%, 0.311279%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(97.793579%, 88.938904%, 0.3479%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(97.891235%, 88.55896%, 0.384521%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(97.988892%, 88.179016%, 0.422668%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(98.086548%, 87.799072%, 0.45929%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(98.18573%, 87.419128%, 0.495911%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(98.283386%, 87.039185%, 0.532532%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(98.381042%, 86.659241%, 0.569153%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(98.478699%, 86.279297%, 0.605774%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(98.577881%, 85.899353%, 0.642395%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(98.675537%, 85.519409%, 0.679016%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(98.773193%, 85.139465%, 0.715637%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(98.87085%, 84.759521%, 0.752258%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(98.970032%, 84.379578%, 0.788879%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(99.067688%, 83.999634%, 0.827026%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(99.165344%, 83.61969%, 0.863647%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(99.263%, 83.239746%, 0.900269%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(99.362183%, 82.859802%, 0.93689%)" stop-opacity="1"/>
<stop offset="0.84375" stop-color="rgb(99.459839%, 82.479858%, 0.973511%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(99.557495%, 82.099915%, 1.010132%)" stop-opacity="1"/>
<stop offset="0.90625" stop-color="rgb(99.656677%, 81.719971%, 1.046753%)" stop-opacity="1"/>
<stop offset="0.9375" stop-color="rgb(99.754333%, 81.340027%, 1.083374%)" stop-opacity="1"/>
<stop offset="0.96875" stop-color="rgb(99.85199%, 80.960083%, 1.119995%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(99.949646%, 80.580139%, 1.156616%)" stop-opacity="1"/>
</linearGradient>
<clipPath id="clip-3">
<path clip-rule="nonzero" d="M 87 799 L 3217 799 L 3217 2895 L 87 2895 Z M 87 799 "/>
</clipPath>
<clipPath id="clip-4">
<path clip-rule="evenodd" d="M 398.90625 1985.058594 L 944.265625 1985.058594 C 968.5625 1985.058594 988.246094 2004.75 988.246094 2029.050781 L 988.246094 2574.398438 C 988.246094 2598.691406 968.546875 2618.390625 944.265625 2618.390625 L 398.90625 2618.390625 C 374.621094 2618.390625 354.921875 2598.691406 354.921875 2574.398438 L 354.921875 2029.050781 C 354.921875 2004.75 374.621094 1985.058594 398.90625 1985.058594 Z M 988.246094 1117.371094 L 988.246094 1662.75 C 988.246094 1687.050781 968.546875 1706.699219 944.265625 1706.699219 L 398.90625 1706.699219 C 374.621094 1706.699219 354.921875 1687.019531 354.921875 1662.730469 L 354.921875 1117.371094 C 354.921875 1093.070312 374.621094 1073.390625 398.90625 1073.390625 L 944.265625 1073.390625 C 968.5625 1073.390625 988.246094 1093.070312 988.246094 1117.371094 Z M 2295.460938 2530.398438 L 2905.96875 2530.398438 C 2963.859375 2530.398438 2963.859375 2618.371094 2905.96875 2618.371094 L 2295.460938 2618.371094 C 2237.570312 2618.371094 2237.539062 2530.398438 2295.460938 2530.398438 Z M 2295.460938 2166.160156 L 2905.96875 2166.160156 C 2963.859375 2166.160156 2963.859375 2254.121094 2905.96875 2254.121094 L 2295.460938 2254.121094 C 2237.570312 2254.121094 2237.570312 2166.160156 2295.460938 2166.160156 Z M 2295.460938 1801.910156 L 2905.96875 1801.910156 C 2963.859375 1801.910156 2963.859375 1889.871094 2905.96875 1889.871094 L 2295.460938 1889.871094 C 2237.539062 1889.871094 2237.570312 1801.910156 2295.460938 1801.910156 Z M 2295.460938 1437.671875 L 2905.96875 1437.671875 C 2963.859375 1437.671875 2963.859375 1525.621094 2905.96875 1525.621094 L 2295.460938 1525.621094 C 2237.570312 1525.621094 2237.539062 1437.671875 2295.460938 1437.671875 Z M 3216.878906 1475.171875 L 3216.878906 799.578125 L 87.988281 799.578125 L 87.960938 2711.871094 C 87.960938 2810.871094 150.210938 2894.550781 223.910156 2894.550781 L 3080.851562 2894.550781 C 3154.570312 2894.550781 3216.820312 2810.921875 3216.820312 2711.871094 L 3216.820312 1476.679688 Z M 2295.460938 1161.371094 C 2237.570312 1161.371094 2237.539062 1073.410156 2295.460938 1073.410156 L 2905.96875 1073.410156 C 2963.859375 1073.410156 2963.859375 1161.371094 2905.96875 1161.371094 Z M 1310.578125 1985.058594 L 1855.941406 1985.058594 C 1880.230469 1985.058594 1899.898438 2004.75 1899.898438 2029.050781 L 1899.898438 2574.398438 C 1899.878906 2598.691406 1880.179688 2618.390625 1855.910156 2618.390625 L 1310.578125 2618.390625 C 1286.28125 2618.390625 1266.589844 2598.691406 1266.589844 2574.398438 L 1266.589844 2029.050781 C 1266.589844 2004.75 1286.28125 1985.058594 1310.578125 1985.058594 Z M 1266.589844 1662.730469 L 1266.589844 1117.371094 C 1266.589844 1093.070312 1286.28125 1073.390625 1310.578125 1073.390625 L 1855.941406 1073.390625 C 1880.230469 1073.390625 1899.898438 1093.070312 1899.898438 1117.371094 L 1899.898438 1662.75 C 1899.878906 1687.050781 1880.179688 1706.699219 1855.910156 1706.699219 L 1310.578125 1706.699219 C 1286.28125 1706.699219 1266.589844 1687.019531 1266.589844 1662.730469 "/>
</clipPath>
<linearGradient id="linear-pattern-2" gradientUnits="userSpaceOnUse" x1="-0.246715" y1="0" x2="1.246716" y2="0" gradientTransform="matrix(-0.00006132, -1402.79, 1402.79, -0.00006132, 1652.42, 2548.46)">
<stop offset="0" stop-color="rgb(89.802551%, 90.194702%, 89.802551%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(89.802551%, 90.194702%, 89.802551%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(89.633179%, 90.011597%, 89.625549%)" stop-opacity="1"/>
<stop offset="0.203125" stop-color="rgb(89.344788%, 89.701843%, 89.326477%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(89.10675%, 89.445496%, 89.079285%)" stop-opacity="1"/>
<stop offset="0.234375" stop-color="rgb(88.868713%, 89.189148%, 88.832092%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(88.630676%, 88.9328%, 88.586426%)" stop-opacity="1"/>
<stop offset="0.265625" stop-color="rgb(88.392639%, 88.676453%, 88.339233%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(88.154602%, 88.420105%, 88.092041%)" stop-opacity="1"/>
<stop offset="0.296875" stop-color="rgb(87.916565%, 88.163757%, 87.844849%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(87.678528%, 87.90741%, 87.597656%)" stop-opacity="1"/>
<stop offset="0.328125" stop-color="rgb(87.440491%, 87.651062%, 87.350464%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(87.203979%, 87.394714%, 87.103271%)" stop-opacity="1"/>
<stop offset="0.359375" stop-color="rgb(86.965942%, 87.139893%, 86.856079%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(86.727905%, 86.883545%, 86.608887%)" stop-opacity="1"/>
<stop offset="0.390625" stop-color="rgb(86.489868%, 86.627197%, 86.361694%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(86.251831%, 86.37085%, 86.114502%)" stop-opacity="1"/>
<stop offset="0.421875" stop-color="rgb(86.013794%, 86.114502%, 85.86731%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(85.775757%, 85.858154%, 85.620117%)" stop-opacity="1"/>
<stop offset="0.453125" stop-color="rgb(85.53772%, 85.601807%, 85.374451%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(85.299683%, 85.345459%, 85.127258%)" stop-opacity="1"/>
<stop offset="0.484375" stop-color="rgb(85.061646%, 85.089111%, 84.880066%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(84.823608%, 84.832764%, 84.632874%)" stop-opacity="1"/>
<stop offset="0.515625" stop-color="rgb(84.585571%, 84.576416%, 84.385681%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(84.347534%, 84.320068%, 84.138489%)" stop-opacity="1"/>
<stop offset="0.546875" stop-color="rgb(84.109497%, 84.065247%, 83.891296%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(83.872986%, 83.808899%, 83.644104%)" stop-opacity="1"/>
<stop offset="0.578125" stop-color="rgb(83.634949%, 83.552551%, 83.396912%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(83.396912%, 83.296204%, 83.149719%)" stop-opacity="1"/>
<stop offset="0.609375" stop-color="rgb(83.158875%, 83.039856%, 82.902527%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(82.920837%, 82.783508%, 82.655334%)" stop-opacity="1"/>
<stop offset="0.640625" stop-color="rgb(82.6828%, 82.527161%, 82.408142%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(82.444763%, 82.270813%, 82.162476%)" stop-opacity="1"/>
<stop offset="0.671875" stop-color="rgb(82.206726%, 82.014465%, 81.915283%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(81.968689%, 81.758118%, 81.668091%)" stop-opacity="1"/>
<stop offset="0.703125" stop-color="rgb(81.730652%, 81.50177%, 81.420898%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(81.492615%, 81.245422%, 81.173706%)" stop-opacity="1"/>
<stop offset="0.734375" stop-color="rgb(81.254578%, 80.989075%, 80.926514%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(81.016541%, 80.734253%, 80.679321%)" stop-opacity="1"/>
<stop offset="0.765625" stop-color="rgb(80.780029%, 80.477905%, 80.432129%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(80.541992%, 80.221558%, 80.184937%)" stop-opacity="1"/>
<stop offset="0.796875" stop-color="rgb(80.303955%, 79.96521%, 79.937744%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(80.065918%, 79.708862%, 79.690552%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(79.776001%, 79.397583%, 79.389954%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(79.606628%, 79.214478%, 79.214478%)" stop-opacity="1"/>
</linearGradient>
<clipPath id="clip-5">
<path clip-rule="nonzero" d="M 87 87 L 3217 87 L 3217 712 L 87 712 Z M 87 87 "/>
</clipPath>
<clipPath id="clip-6">
<path clip-rule="evenodd" d="M 585.285156 355.828125 C 643.1875 355.828125 643.1875 443.78125 585.285156 443.78125 L 368.753906 443.78125 C 310.851562 443.78125 310.851562 355.828125 368.753906 355.828125 Z M 1045.03125 355.828125 C 1102.949219 355.828125 1102.949219 443.78125 1045.03125 443.78125 L 828.515625 443.78125 C 770.597656 443.78125 770.597656 355.828125 828.515625 355.828125 Z M 1504.820312 355.828125 C 1562.738281 355.828125 1562.71875 443.78125 1504.820312 443.78125 L 1288.289062 443.78125 C 1230.390625 443.78125 1230.390625 355.828125 1288.289062 355.828125 Z M 2413.050781 443.78125 C 2355.128906 443.78125 2355.128906 355.828125 2413.050781 355.828125 L 2936.070312 355.828125 C 2993.988281 355.828125 2993.960938 443.78125 2936.070312 443.78125 Z M 87.988281 711.609375 L 3216.878906 711.609375 L 3216.878906 266.109375 C 3216.878906 169.558594 3154.601562 87.960938 3080.871094 87.960938 L 223.9375 87.960938 C 150.238281 87.960938 87.988281 169.53125 87.988281 266.109375 L 87.988281 711.609375 "/>
</clipPath>
<linearGradient id="linear-pattern-3" gradientUnits="userSpaceOnUse" x1="-0.0000000299266" y1="0" x2="1.000008" y2="0" gradientTransform="matrix(0.00000744, 623.645, -623.645, 0.00000744, 1652.43, 87.96)">
<stop offset="0" stop-color="rgb(9.411621%, 37.254333%, 58.822632%)" stop-opacity="1"/>
<stop offset="0.0078125" stop-color="rgb(9.423828%, 37.408447%, 58.966064%)" stop-opacity="1"/>
<stop offset="0.015625" stop-color="rgb(9.448242%, 37.718201%, 59.254456%)" stop-opacity="1"/>
<stop offset="0.0234375" stop-color="rgb(9.472656%, 38.026428%, 59.542847%)" stop-opacity="1"/>
<stop offset="0.03125" stop-color="rgb(9.49707%, 38.336182%, 59.829712%)" stop-opacity="1"/>
<stop offset="0.0390625" stop-color="rgb(9.521484%, 38.645935%, 60.118103%)" stop-opacity="1"/>
<stop offset="0.046875" stop-color="rgb(9.545898%, 38.955688%, 60.406494%)" stop-opacity="1"/>
<stop offset="0.0546875" stop-color="rgb(9.570312%, 39.265442%, 60.694885%)" stop-opacity="1"/>
<stop offset="0.0625" stop-color="rgb(9.594727%, 39.573669%, 60.98175%)" stop-opacity="1"/>
<stop offset="0.0703125" stop-color="rgb(9.619141%, 39.883423%, 61.270142%)" stop-opacity="1"/>
<stop offset="0.078125" stop-color="rgb(9.643555%, 40.193176%, 61.558533%)" stop-opacity="1"/>
<stop offset="0.0859375" stop-color="rgb(9.667969%, 40.50293%, 61.845398%)" stop-opacity="1"/>
<stop offset="0.09375" stop-color="rgb(9.692383%, 40.812683%, 62.133789%)" stop-opacity="1"/>
<stop offset="0.101562" stop-color="rgb(9.716797%, 41.120911%, 62.42218%)" stop-opacity="1"/>
<stop offset="0.109375" stop-color="rgb(9.741211%, 41.430664%, 62.710571%)" stop-opacity="1"/>
<stop offset="0.117188" stop-color="rgb(9.765625%, 41.740417%, 62.997437%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(9.791565%, 42.050171%, 63.285828%)" stop-opacity="1"/>
<stop offset="0.132812" stop-color="rgb(9.815979%, 42.359924%, 63.574219%)" stop-opacity="1"/>
<stop offset="0.140625" stop-color="rgb(9.840393%, 42.668152%, 63.86261%)" stop-opacity="1"/>
<stop offset="0.148438" stop-color="rgb(9.864807%, 42.977905%, 64.149475%)" stop-opacity="1"/>
<stop offset="0.15625" stop-color="rgb(9.889221%, 43.287659%, 64.437866%)" stop-opacity="1"/>
<stop offset="0.164062" stop-color="rgb(9.913635%, 43.597412%, 64.726257%)" stop-opacity="1"/>
<stop offset="0.171875" stop-color="rgb(9.938049%, 43.907166%, 65.014648%)" stop-opacity="1"/>
<stop offset="0.179688" stop-color="rgb(9.962463%, 44.215393%, 65.301514%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(9.986877%, 44.525146%, 65.589905%)" stop-opacity="1"/>
<stop offset="0.195312" stop-color="rgb(10.011292%, 44.8349%, 65.878296%)" stop-opacity="1"/>
<stop offset="0.203125" stop-color="rgb(10.035706%, 45.144653%, 66.166687%)" stop-opacity="1"/>
<stop offset="0.210938" stop-color="rgb(10.06012%, 45.454407%, 66.453552%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(10.084534%, 45.762634%, 66.741943%)" stop-opacity="1"/>
<stop offset="0.226563" stop-color="rgb(10.108948%, 46.072388%, 67.030334%)" stop-opacity="1"/>
<stop offset="0.234375" stop-color="rgb(10.133362%, 46.382141%, 67.318726%)" stop-opacity="1"/>
<stop offset="0.242188" stop-color="rgb(10.157776%, 46.691895%, 67.605591%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(10.183716%, 47.000122%, 67.893982%)" stop-opacity="1"/>
<stop offset="0.257812" stop-color="rgb(10.20813%, 47.309875%, 68.182373%)" stop-opacity="1"/>
<stop offset="0.265625" stop-color="rgb(10.232544%, 47.619629%, 68.469238%)" stop-opacity="1"/>
<stop offset="0.273438" stop-color="rgb(10.256958%, 47.929382%, 68.757629%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(10.281372%, 48.239136%, 69.046021%)" stop-opacity="1"/>
<stop offset="0.289062" stop-color="rgb(10.305786%, 48.547363%, 69.334412%)" stop-opacity="1"/>
<stop offset="0.296875" stop-color="rgb(10.3302%, 48.857117%, 69.621277%)" stop-opacity="1"/>
<stop offset="0.304688" stop-color="rgb(10.354614%, 49.16687%, 69.909668%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(10.379028%, 49.476624%, 70.198059%)" stop-opacity="1"/>
<stop offset="0.320312" stop-color="rgb(10.403442%, 49.786377%, 70.48645%)" stop-opacity="1"/>
<stop offset="0.328125" stop-color="rgb(10.427856%, 50.094604%, 70.773315%)" stop-opacity="1"/>
<stop offset="0.335938" stop-color="rgb(10.452271%, 50.404358%, 71.061707%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(10.476685%, 50.714111%, 71.350098%)" stop-opacity="1"/>
<stop offset="0.351562" stop-color="rgb(10.501099%, 51.023865%, 71.638489%)" stop-opacity="1"/>
<stop offset="0.359375" stop-color="rgb(10.525513%, 51.333618%, 71.925354%)" stop-opacity="1"/>
<stop offset="0.367188" stop-color="rgb(10.549927%, 51.641846%, 72.213745%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(10.575867%, 51.951599%, 72.502136%)" stop-opacity="1"/>
<stop offset="0.382812" stop-color="rgb(10.600281%, 52.261353%, 72.790527%)" stop-opacity="1"/>
<stop offset="0.390625" stop-color="rgb(10.624695%, 52.571106%, 73.077393%)" stop-opacity="1"/>
<stop offset="0.398438" stop-color="rgb(10.649109%, 52.880859%, 73.365784%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(10.673523%, 53.189087%, 73.654175%)" stop-opacity="1"/>
<stop offset="0.414063" stop-color="rgb(10.697937%, 53.49884%, 73.94104%)" stop-opacity="1"/>
<stop offset="0.421875" stop-color="rgb(10.722351%, 53.808594%, 74.229431%)" stop-opacity="1"/>
<stop offset="0.429687" stop-color="rgb(10.746765%, 54.118347%, 74.517822%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(10.771179%, 54.428101%, 74.806213%)" stop-opacity="1"/>
<stop offset="0.445312" stop-color="rgb(10.795593%, 54.736328%, 75.093079%)" stop-opacity="1"/>
<stop offset="0.453125" stop-color="rgb(10.820007%, 55.046082%, 75.38147%)" stop-opacity="1"/>
<stop offset="0.460938" stop-color="rgb(10.844421%, 55.355835%, 75.669861%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(10.868835%, 55.665588%, 75.958252%)" stop-opacity="1"/>
<stop offset="0.476562" stop-color="rgb(10.89325%, 55.973816%, 76.245117%)" stop-opacity="1"/>
<stop offset="0.484375" stop-color="rgb(10.917664%, 56.283569%, 76.533508%)" stop-opacity="1"/>
<stop offset="0.492188" stop-color="rgb(10.942078%, 56.593323%, 76.821899%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(10.968018%, 56.903076%, 77.110291%)" stop-opacity="1"/>
<stop offset="0.507813" stop-color="rgb(10.992432%, 57.21283%, 77.397156%)" stop-opacity="1"/>
<stop offset="0.515625" stop-color="rgb(11.016846%, 57.521057%, 77.685547%)" stop-opacity="1"/>
<stop offset="0.523438" stop-color="rgb(11.04126%, 57.830811%, 77.973938%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(11.065674%, 58.140564%, 78.262329%)" stop-opacity="1"/>
<stop offset="0.539062" stop-color="rgb(11.090088%, 58.450317%, 78.549194%)" stop-opacity="1"/>
<stop offset="0.546875" stop-color="rgb(11.114502%, 58.760071%, 78.837585%)" stop-opacity="1"/>
<stop offset="0.554688" stop-color="rgb(11.138916%, 59.068298%, 79.125977%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(11.16333%, 59.378052%, 79.414368%)" stop-opacity="1"/>
<stop offset="0.570312" stop-color="rgb(11.187744%, 59.687805%, 79.701233%)" stop-opacity="1"/>
<stop offset="0.578125" stop-color="rgb(11.212158%, 59.997559%, 79.989624%)" stop-opacity="1"/>
<stop offset="0.585938" stop-color="rgb(11.236572%, 60.307312%, 80.278015%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(11.260986%, 60.61554%, 80.56488%)" stop-opacity="1"/>
<stop offset="0.601563" stop-color="rgb(11.2854%, 60.925293%, 80.853271%)" stop-opacity="1"/>
<stop offset="0.609375" stop-color="rgb(11.309814%, 61.235046%, 81.141663%)" stop-opacity="1"/>
<stop offset="0.617188" stop-color="rgb(11.334229%, 61.5448%, 81.430054%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(11.360168%, 61.854553%, 81.716919%)" stop-opacity="1"/>
<stop offset="0.632812" stop-color="rgb(11.384583%, 62.162781%, 82.00531%)" stop-opacity="1"/>
<stop offset="0.640625" stop-color="rgb(11.408997%, 62.472534%, 82.293701%)" stop-opacity="1"/>
<stop offset="0.648437" stop-color="rgb(11.433411%, 62.782288%, 82.582092%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(11.457825%, 63.092041%, 82.868958%)" stop-opacity="1"/>
<stop offset="0.664063" stop-color="rgb(11.482239%, 63.401794%, 83.157349%)" stop-opacity="1"/>
<stop offset="0.671875" stop-color="rgb(11.506653%, 63.710022%, 83.44574%)" stop-opacity="1"/>
<stop offset="0.679688" stop-color="rgb(11.531067%, 64.019775%, 83.734131%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(11.555481%, 64.329529%, 84.020996%)" stop-opacity="1"/>
<stop offset="0.695312" stop-color="rgb(11.579895%, 64.639282%, 84.309387%)" stop-opacity="1"/>
<stop offset="0.703125" stop-color="rgb(11.604309%, 64.94751%, 84.597778%)" stop-opacity="1"/>
<stop offset="0.710937" stop-color="rgb(11.628723%, 65.257263%, 84.886169%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(11.653137%, 65.567017%, 85.173035%)" stop-opacity="1"/>
<stop offset="0.726562" stop-color="rgb(11.677551%, 65.87677%, 85.461426%)" stop-opacity="1"/>
<stop offset="0.734375" stop-color="rgb(11.701965%, 66.186523%, 85.749817%)" stop-opacity="1"/>
<stop offset="0.742188" stop-color="rgb(11.726379%, 66.494751%, 86.038208%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(11.752319%, 66.804504%, 86.325073%)" stop-opacity="1"/>
<stop offset="0.757812" stop-color="rgb(11.776733%, 67.114258%, 86.613464%)" stop-opacity="1"/>
<stop offset="0.765625" stop-color="rgb(11.801147%, 67.424011%, 86.901855%)" stop-opacity="1"/>
<stop offset="0.773437" stop-color="rgb(11.825562%, 67.733765%, 87.188721%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(11.849976%, 68.041992%, 87.477112%)" stop-opacity="1"/>
<stop offset="0.789062" stop-color="rgb(11.87439%, 68.351746%, 87.765503%)" stop-opacity="1"/>
<stop offset="0.796875" stop-color="rgb(11.898804%, 68.661499%, 88.053894%)" stop-opacity="1"/>
<stop offset="0.804687" stop-color="rgb(11.923218%, 68.971252%, 88.340759%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(11.947632%, 69.281006%, 88.62915%)" stop-opacity="1"/>
<stop offset="0.820312" stop-color="rgb(11.972046%, 69.589233%, 88.917542%)" stop-opacity="1"/>
<stop offset="0.828125" stop-color="rgb(11.99646%, 69.898987%, 89.205933%)" stop-opacity="1"/>
<stop offset="0.835938" stop-color="rgb(12.020874%, 70.20874%, 89.492798%)" stop-opacity="1"/>
<stop offset="0.84375" stop-color="rgb(12.045288%, 70.518494%, 89.781189%)" stop-opacity="1"/>
<stop offset="0.851562" stop-color="rgb(12.069702%, 70.828247%, 90.06958%)" stop-opacity="1"/>
<stop offset="0.859375" stop-color="rgb(12.094116%, 71.136475%, 90.357971%)" stop-opacity="1"/>
<stop offset="0.867187" stop-color="rgb(12.11853%, 71.446228%, 90.644836%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(12.14447%, 71.755981%, 90.933228%)" stop-opacity="1"/>
<stop offset="0.882812" stop-color="rgb(12.168884%, 72.065735%, 91.221619%)" stop-opacity="1"/>
<stop offset="0.890625" stop-color="rgb(12.193298%, 72.375488%, 91.51001%)" stop-opacity="1"/>
<stop offset="0.898438" stop-color="rgb(12.217712%, 72.683716%, 91.796875%)" stop-opacity="1"/>
<stop offset="0.90625" stop-color="rgb(12.242126%, 72.993469%, 92.085266%)" stop-opacity="1"/>
<stop offset="0.914062" stop-color="rgb(12.266541%, 73.303223%, 92.373657%)" stop-opacity="1"/>
<stop offset="0.921875" stop-color="rgb(12.290955%, 73.612976%, 92.662048%)" stop-opacity="1"/>
<stop offset="0.929688" stop-color="rgb(12.315369%, 73.922729%, 92.948914%)" stop-opacity="1"/>
<stop offset="0.9375" stop-color="rgb(12.339783%, 74.230957%, 93.237305%)" stop-opacity="1"/>
<stop offset="0.945312" stop-color="rgb(12.364197%, 74.54071%, 93.525696%)" stop-opacity="1"/>
<stop offset="0.953125" stop-color="rgb(12.388611%, 74.850464%, 93.812561%)" stop-opacity="1"/>
<stop offset="0.960937" stop-color="rgb(12.413025%, 75.160217%, 94.100952%)" stop-opacity="1"/>
<stop offset="0.96875" stop-color="rgb(12.437439%, 75.468445%, 94.389343%)" stop-opacity="1"/>
<stop offset="0.976563" stop-color="rgb(12.461853%, 75.778198%, 94.677734%)" stop-opacity="1"/>
<stop offset="0.984375" stop-color="rgb(12.486267%, 76.087952%, 94.9646%)" stop-opacity="1"/>
<stop offset="0.992188" stop-color="rgb(12.512207%, 76.397705%, 95.252991%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(12.536621%, 76.707458%, 95.541382%)" stop-opacity="1"/>
</linearGradient>
<clipPath id="clip-7">
<path clip-rule="nonzero" d="M 442.898438 2072.988281 L 900.285156 2072.988281 L 900.285156 2530.429688 L 442.898438 2530.429688 Z M 442.898438 2072.988281 "/>
</clipPath>
<linearGradient id="linear-pattern-4" gradientUnits="userSpaceOnUse" x1="-0.0000000218583" y1="0" x2="1.000004" y2="0" gradientTransform="matrix(-0.00002, -457.438, 457.438, -0.00002, 671.592, 2530.43)">
<stop offset="0" stop-color="rgb(14.901733%, 53.33252%, 25.881958%)" stop-opacity="1"/>
<stop offset="0.0078125" stop-color="rgb(15.071106%, 53.431702%, 25.874329%)" stop-opacity="1"/>
<stop offset="0.015625" stop-color="rgb(15.411377%, 53.631592%, 25.85907%)" stop-opacity="1"/>
<stop offset="0.0234375" stop-color="rgb(15.750122%, 53.829956%, 25.843811%)" stop-opacity="1"/>
<stop offset="0.03125" stop-color="rgb(16.090393%, 54.029846%, 25.828552%)" stop-opacity="1"/>
<stop offset="0.0390625" stop-color="rgb(16.430664%, 54.22821%, 25.813293%)" stop-opacity="1"/>
<stop offset="0.046875" stop-color="rgb(16.770935%, 54.428101%, 25.798035%)" stop-opacity="1"/>
<stop offset="0.0546875" stop-color="rgb(17.111206%, 54.626465%, 25.782776%)" stop-opacity="1"/>
<stop offset="0.0625" stop-color="rgb(17.451477%, 54.826355%, 25.765991%)" stop-opacity="1"/>
<stop offset="0.0703125" stop-color="rgb(17.791748%, 55.024719%, 25.750732%)" stop-opacity="1"/>
<stop offset="0.078125" stop-color="rgb(18.132019%, 55.224609%, 25.735474%)" stop-opacity="1"/>
<stop offset="0.0859375" stop-color="rgb(18.470764%, 55.422974%, 25.720215%)" stop-opacity="1"/>
<stop offset="0.09375" stop-color="rgb(18.811035%, 55.622864%, 25.704956%)" stop-opacity="1"/>
<stop offset="0.101562" stop-color="rgb(19.151306%, 55.821228%, 25.689697%)" stop-opacity="1"/>
<stop offset="0.109375" stop-color="rgb(19.491577%, 56.021118%, 25.674438%)" stop-opacity="1"/>
<stop offset="0.117188" stop-color="rgb(19.831848%, 56.219482%, 25.65918%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(20.172119%, 56.419373%, 25.643921%)" stop-opacity="1"/>
<stop offset="0.132812" stop-color="rgb(20.51239%, 56.617737%, 25.628662%)" stop-opacity="1"/>
<stop offset="0.140625" stop-color="rgb(20.851135%, 56.817627%, 25.613403%)" stop-opacity="1"/>
<stop offset="0.148438" stop-color="rgb(21.191406%, 57.015991%, 25.598145%)" stop-opacity="1"/>
<stop offset="0.15625" stop-color="rgb(21.531677%, 57.215881%, 25.582886%)" stop-opacity="1"/>
<stop offset="0.164062" stop-color="rgb(21.871948%, 57.414246%, 25.567627%)" stop-opacity="1"/>
<stop offset="0.171875" stop-color="rgb(22.212219%, 57.614136%, 25.552368%)" stop-opacity="1"/>
<stop offset="0.179688" stop-color="rgb(22.55249%, 57.8125%, 25.537109%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(22.892761%, 58.01239%, 25.521851%)" stop-opacity="1"/>
<stop offset="0.195312" stop-color="rgb(23.233032%, 58.210754%, 25.506592%)" stop-opacity="1"/>
<stop offset="0.203125" stop-color="rgb(23.571777%, 58.410645%, 25.491333%)" stop-opacity="1"/>
<stop offset="0.210938" stop-color="rgb(23.912048%, 58.609009%, 25.476074%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(24.252319%, 58.808899%, 25.460815%)" stop-opacity="1"/>
<stop offset="0.226562" stop-color="rgb(24.59259%, 59.007263%, 25.445557%)" stop-opacity="1"/>
<stop offset="0.234375" stop-color="rgb(24.932861%, 59.207153%, 25.430298%)" stop-opacity="1"/>
<stop offset="0.242188" stop-color="rgb(25.273132%, 59.405518%, 25.415039%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(25.613403%, 59.605408%, 25.39978%)" stop-opacity="1"/>
<stop offset="0.257812" stop-color="rgb(25.953674%, 59.803772%, 25.382996%)" stop-opacity="1"/>
<stop offset="0.265625" stop-color="rgb(26.292419%, 60.003662%, 25.367737%)" stop-opacity="1"/>
<stop offset="0.273438" stop-color="rgb(26.63269%, 60.202026%, 25.352478%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(26.972961%, 60.401917%, 25.337219%)" stop-opacity="1"/>
<stop offset="0.289062" stop-color="rgb(27.313232%, 60.600281%, 25.32196%)" stop-opacity="1"/>
<stop offset="0.296875" stop-color="rgb(27.653503%, 60.800171%, 25.306702%)" stop-opacity="1"/>
<stop offset="0.304688" stop-color="rgb(27.993774%, 60.998535%, 25.291443%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(28.334045%, 61.198425%, 25.276184%)" stop-opacity="1"/>
<stop offset="0.320312" stop-color="rgb(28.674316%, 61.39679%, 25.260925%)" stop-opacity="1"/>
<stop offset="0.328125" stop-color="rgb(29.013062%, 61.59668%, 25.245667%)" stop-opacity="1"/>
<stop offset="0.335938" stop-color="rgb(29.353333%, 61.795044%, 25.230408%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(29.693604%, 61.994934%, 25.215149%)" stop-opacity="1"/>
<stop offset="0.351562" stop-color="rgb(30.033875%, 62.193298%, 25.19989%)" stop-opacity="1"/>
<stop offset="0.359375" stop-color="rgb(30.374146%, 62.393188%, 25.184631%)" stop-opacity="1"/>
<stop offset="0.367188" stop-color="rgb(30.714417%, 62.591553%, 25.169373%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(31.054688%, 62.791443%, 25.154114%)" stop-opacity="1"/>
<stop offset="0.382812" stop-color="rgb(31.394958%, 62.991333%, 25.138855%)" stop-opacity="1"/>
<stop offset="0.390625" stop-color="rgb(31.733704%, 63.189697%, 25.123596%)" stop-opacity="1"/>
<stop offset="0.398438" stop-color="rgb(32.073975%, 63.389587%, 25.108337%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(32.414246%, 63.587952%, 25.093079%)" stop-opacity="1"/>
<stop offset="0.414062" stop-color="rgb(32.754517%, 63.787842%, 25.07782%)" stop-opacity="1"/>
<stop offset="0.421875" stop-color="rgb(33.094788%, 63.986206%, 25.062561%)" stop-opacity="1"/>
<stop offset="0.429688" stop-color="rgb(33.435059%, 64.186096%, 25.047302%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(33.77533%, 64.38446%, 25.032043%)" stop-opacity="1"/>
<stop offset="0.445312" stop-color="rgb(34.114075%, 64.584351%, 25.016785%)" stop-opacity="1"/>
<stop offset="0.453125" stop-color="rgb(34.454346%, 64.782715%, 25.001526%)" stop-opacity="1"/>
<stop offset="0.460938" stop-color="rgb(34.794617%, 64.982605%, 24.984741%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(35.134888%, 65.180969%, 24.969482%)" stop-opacity="1"/>
<stop offset="0.476562" stop-color="rgb(35.475159%, 65.380859%, 24.954224%)" stop-opacity="1"/>
<stop offset="0.484375" stop-color="rgb(35.81543%, 65.579224%, 24.938965%)" stop-opacity="1"/>
<stop offset="0.492188" stop-color="rgb(36.155701%, 65.779114%, 24.923706%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(36.495972%, 65.977478%, 24.908447%)" stop-opacity="1"/>
<stop offset="0.507813" stop-color="rgb(36.834717%, 66.177368%, 24.893188%)" stop-opacity="1"/>
<stop offset="0.515625" stop-color="rgb(37.174988%, 66.375732%, 24.87793%)" stop-opacity="1"/>
<stop offset="0.523438" stop-color="rgb(37.515259%, 66.575623%, 24.862671%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(37.85553%, 66.773987%, 24.847412%)" stop-opacity="1"/>
<stop offset="0.539062" stop-color="rgb(38.195801%, 66.973877%, 24.832153%)" stop-opacity="1"/>
<stop offset="0.546875" stop-color="rgb(38.536072%, 67.172241%, 24.816895%)" stop-opacity="1"/>
<stop offset="0.554688" stop-color="rgb(38.876343%, 67.372131%, 24.801636%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(39.216614%, 67.570496%, 24.786377%)" stop-opacity="1"/>
<stop offset="0.570312" stop-color="rgb(39.555359%, 67.770386%, 24.771118%)" stop-opacity="1"/>
<stop offset="0.578125" stop-color="rgb(39.89563%, 67.96875%, 24.755859%)" stop-opacity="1"/>
<stop offset="0.585938" stop-color="rgb(40.235901%, 68.16864%, 24.740601%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(40.576172%, 68.367004%, 24.725342%)" stop-opacity="1"/>
<stop offset="0.601562" stop-color="rgb(40.916443%, 68.566895%, 24.710083%)" stop-opacity="1"/>
<stop offset="0.609375" stop-color="rgb(41.256714%, 68.765259%, 24.694824%)" stop-opacity="1"/>
<stop offset="0.617187" stop-color="rgb(41.596985%, 68.965149%, 24.679565%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(41.937256%, 69.163513%, 24.664307%)" stop-opacity="1"/>
<stop offset="0.632813" stop-color="rgb(42.276001%, 69.363403%, 24.649048%)" stop-opacity="1"/>
<stop offset="0.640625" stop-color="rgb(42.616272%, 69.561768%, 24.633789%)" stop-opacity="1"/>
<stop offset="0.648438" stop-color="rgb(42.956543%, 69.761658%, 24.61853%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(43.296814%, 69.960022%, 24.601746%)" stop-opacity="1"/>
<stop offset="0.664062" stop-color="rgb(43.637085%, 70.159912%, 24.586487%)" stop-opacity="1"/>
<stop offset="0.671875" stop-color="rgb(43.977356%, 70.358276%, 24.571228%)" stop-opacity="1"/>
<stop offset="0.679688" stop-color="rgb(44.317627%, 70.558167%, 24.555969%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(44.656372%, 70.756531%, 24.54071%)" stop-opacity="1"/>
<stop offset="0.695312" stop-color="rgb(44.996643%, 70.956421%, 24.525452%)" stop-opacity="1"/>
<stop offset="0.703125" stop-color="rgb(45.336914%, 71.154785%, 24.510193%)" stop-opacity="1"/>
<stop offset="0.710938" stop-color="rgb(45.677185%, 71.354675%, 24.494934%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(46.017456%, 71.55304%, 24.479675%)" stop-opacity="1"/>
<stop offset="0.726562" stop-color="rgb(46.357727%, 71.75293%, 24.464417%)" stop-opacity="1"/>
<stop offset="0.734375" stop-color="rgb(46.697998%, 71.951294%, 24.449158%)" stop-opacity="1"/>
<stop offset="0.742187" stop-color="rgb(47.038269%, 72.151184%, 24.433899%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(47.377014%, 72.349548%, 24.41864%)" stop-opacity="1"/>
<stop offset="0.757813" stop-color="rgb(47.717285%, 72.549438%, 24.403381%)" stop-opacity="1"/>
<stop offset="0.765625" stop-color="rgb(48.057556%, 72.749329%, 24.388123%)" stop-opacity="1"/>
<stop offset="0.773438" stop-color="rgb(48.397827%, 72.947693%, 24.372864%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(48.738098%, 73.147583%, 24.357605%)" stop-opacity="1"/>
<stop offset="0.789062" stop-color="rgb(49.078369%, 73.345947%, 24.342346%)" stop-opacity="1"/>
<stop offset="0.796875" stop-color="rgb(49.41864%, 73.545837%, 24.327087%)" stop-opacity="1"/>
<stop offset="0.804688" stop-color="rgb(49.758911%, 73.744202%, 24.311829%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(50.097656%, 73.944092%, 24.29657%)" stop-opacity="1"/>
<stop offset="0.820312" stop-color="rgb(50.437927%, 74.142456%, 24.281311%)" stop-opacity="1"/>
<stop offset="0.828125" stop-color="rgb(50.778198%, 74.342346%, 24.266052%)" stop-opacity="1"/>
<stop offset="0.835938" stop-color="rgb(51.118469%, 74.54071%, 24.250793%)" stop-opacity="1"/>
<stop offset="0.84375" stop-color="rgb(51.45874%, 74.740601%, 24.235535%)" stop-opacity="1"/>
<stop offset="0.851562" stop-color="rgb(51.799011%, 74.938965%, 24.220276%)" stop-opacity="1"/>
<stop offset="0.859375" stop-color="rgb(52.139282%, 75.138855%, 24.203491%)" stop-opacity="1"/>
<stop offset="0.867187" stop-color="rgb(52.479553%, 75.337219%, 24.188232%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(52.818298%, 75.537109%, 24.172974%)" stop-opacity="1"/>
<stop offset="0.882813" stop-color="rgb(53.158569%, 75.735474%, 24.157715%)" stop-opacity="1"/>
<stop offset="0.890625" stop-color="rgb(53.49884%, 75.935364%, 24.142456%)" stop-opacity="1"/>
<stop offset="0.898438" stop-color="rgb(53.839111%, 76.133728%, 24.127197%)" stop-opacity="1"/>
<stop offset="0.90625" stop-color="rgb(54.179382%, 76.333618%, 24.111938%)" stop-opacity="1"/>
<stop offset="0.914062" stop-color="rgb(54.519653%, 76.531982%, 24.09668%)" stop-opacity="1"/>
<stop offset="0.921875" stop-color="rgb(54.859924%, 76.731873%, 24.081421%)" stop-opacity="1"/>
<stop offset="0.929688" stop-color="rgb(55.200195%, 76.930237%, 24.066162%)" stop-opacity="1"/>
<stop offset="0.9375" stop-color="rgb(55.53894%, 77.130127%, 24.050903%)" stop-opacity="1"/>
<stop offset="0.945312" stop-color="rgb(55.879211%, 77.328491%, 24.035645%)" stop-opacity="1"/>
<stop offset="0.953125" stop-color="rgb(56.219482%, 77.528381%, 24.020386%)" stop-opacity="1"/>
<stop offset="0.960938" stop-color="rgb(56.559753%, 77.726746%, 24.005127%)" stop-opacity="1"/>
<stop offset="0.96875" stop-color="rgb(56.900024%, 77.926636%, 23.989868%)" stop-opacity="1"/>
<stop offset="0.976562" stop-color="rgb(57.240295%, 78.125%, 23.974609%)" stop-opacity="1"/>
<stop offset="0.984375" stop-color="rgb(57.580566%, 78.32489%, 23.959351%)" stop-opacity="1"/>
<stop offset="0.992187" stop-color="rgb(57.919312%, 78.523254%, 23.944092%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(58.259583%, 78.723145%, 23.928833%)" stop-opacity="1"/>
</linearGradient>
<clipPath id="clip-8">
<path clip-rule="nonzero" d="M 1354.558594 2072.988281 L 1811.941406 2072.988281 L 1811.941406 2530.429688 L 1354.558594 2530.429688 Z M 1354.558594 2072.988281 "/>
</clipPath>
<linearGradient id="linear-pattern-5" gradientUnits="userSpaceOnUse" x1="-0.00000000595634" y1="0" x2="1.000004" y2="0" gradientTransform="matrix(0.00000545, 457.438, -457.438, 0.00000545, 1583.25, 2072.99)">
<stop offset="0" stop-color="rgb(97.253418%, 58.430481%, 11.372375%)" stop-opacity="1"/>
<stop offset="0.015625" stop-color="rgb(97.235107%, 58.270264%, 11.387634%)" stop-opacity="1"/>
<stop offset="0.03125" stop-color="rgb(97.198486%, 57.951355%, 11.418152%)" stop-opacity="1"/>
<stop offset="0.046875" stop-color="rgb(97.161865%, 57.633972%, 11.448669%)" stop-opacity="1"/>
<stop offset="0.0625" stop-color="rgb(97.125244%, 57.315063%, 11.479187%)" stop-opacity="1"/>
<stop offset="0.078125" stop-color="rgb(97.088623%, 56.996155%, 11.509705%)" stop-opacity="1"/>
<stop offset="0.09375" stop-color="rgb(97.052002%, 56.677246%, 11.540222%)" stop-opacity="1"/>
<stop offset="0.109375" stop-color="rgb(97.015381%, 56.358337%, 11.57074%)" stop-opacity="1"/>
<stop offset="0.125" stop-color="rgb(96.97876%, 56.040955%, 11.601257%)" stop-opacity="1"/>
<stop offset="0.140625" stop-color="rgb(96.942139%, 55.722046%, 11.631775%)" stop-opacity="1"/>
<stop offset="0.15625" stop-color="rgb(96.905518%, 55.403137%, 11.662292%)" stop-opacity="1"/>
<stop offset="0.171875" stop-color="rgb(96.867371%, 55.084229%, 11.69281%)" stop-opacity="1"/>
<stop offset="0.1875" stop-color="rgb(96.83075%, 54.76532%, 11.723328%)" stop-opacity="1"/>
<stop offset="0.203125" stop-color="rgb(96.794128%, 54.446411%, 11.755371%)" stop-opacity="1"/>
<stop offset="0.21875" stop-color="rgb(96.757507%, 54.129028%, 11.785889%)" stop-opacity="1"/>
<stop offset="0.234375" stop-color="rgb(96.720886%, 53.81012%, 11.816406%)" stop-opacity="1"/>
<stop offset="0.25" stop-color="rgb(96.684265%, 53.491211%, 11.846924%)" stop-opacity="1"/>
<stop offset="0.265625" stop-color="rgb(96.647644%, 53.172302%, 11.877441%)" stop-opacity="1"/>
<stop offset="0.28125" stop-color="rgb(96.611023%, 52.853394%, 11.907959%)" stop-opacity="1"/>
<stop offset="0.296875" stop-color="rgb(96.574402%, 52.536011%, 11.938477%)" stop-opacity="1"/>
<stop offset="0.3125" stop-color="rgb(96.537781%, 52.217102%, 11.968994%)" stop-opacity="1"/>
<stop offset="0.328125" stop-color="rgb(96.50116%, 51.898193%, 11.999512%)" stop-opacity="1"/>
<stop offset="0.34375" stop-color="rgb(96.463013%, 51.579285%, 12.030029%)" stop-opacity="1"/>
<stop offset="0.359375" stop-color="rgb(96.426392%, 51.260376%, 12.060547%)" stop-opacity="1"/>
<stop offset="0.375" stop-color="rgb(96.389771%, 50.941467%, 12.091064%)" stop-opacity="1"/>
<stop offset="0.390625" stop-color="rgb(96.353149%, 50.624084%, 12.121582%)" stop-opacity="1"/>
<stop offset="0.40625" stop-color="rgb(96.316528%, 50.305176%, 12.153625%)" stop-opacity="1"/>
<stop offset="0.421875" stop-color="rgb(96.279907%, 49.986267%, 12.184143%)" stop-opacity="1"/>
<stop offset="0.4375" stop-color="rgb(96.243286%, 49.667358%, 12.214661%)" stop-opacity="1"/>
<stop offset="0.453125" stop-color="rgb(96.206665%, 49.34845%, 12.245178%)" stop-opacity="1"/>
<stop offset="0.46875" stop-color="rgb(96.170044%, 49.031067%, 12.275696%)" stop-opacity="1"/>
<stop offset="0.484375" stop-color="rgb(96.133423%, 48.712158%, 12.306213%)" stop-opacity="1"/>
<stop offset="0.5" stop-color="rgb(96.095276%, 48.39325%, 12.336731%)" stop-opacity="1"/>
<stop offset="0.515625" stop-color="rgb(96.058655%, 48.074341%, 12.367249%)" stop-opacity="1"/>
<stop offset="0.53125" stop-color="rgb(96.022034%, 47.755432%, 12.397766%)" stop-opacity="1"/>
<stop offset="0.546875" stop-color="rgb(95.985413%, 47.438049%, 12.428284%)" stop-opacity="1"/>
<stop offset="0.5625" stop-color="rgb(95.948792%, 47.119141%, 12.458801%)" stop-opacity="1"/>
<stop offset="0.578125" stop-color="rgb(95.91217%, 46.800232%, 12.489319%)" stop-opacity="1"/>
<stop offset="0.59375" stop-color="rgb(95.875549%, 46.481323%, 12.519836%)" stop-opacity="1"/>
<stop offset="0.609375" stop-color="rgb(95.838928%, 46.162415%, 12.55188%)" stop-opacity="1"/>
<stop offset="0.625" stop-color="rgb(95.802307%, 45.843506%, 12.582397%)" stop-opacity="1"/>
<stop offset="0.640625" stop-color="rgb(95.765686%, 45.526123%, 12.612915%)" stop-opacity="1"/>
<stop offset="0.65625" stop-color="rgb(95.729065%, 45.207214%, 12.643433%)" stop-opacity="1"/>
<stop offset="0.671875" stop-color="rgb(95.690918%, 44.888306%, 12.67395%)" stop-opacity="1"/>
<stop offset="0.6875" stop-color="rgb(95.654297%, 44.569397%, 12.704468%)" stop-opacity="1"/>
<stop offset="0.703125" stop-color="rgb(95.617676%, 44.250488%, 12.734985%)" stop-opacity="1"/>
<stop offset="0.71875" stop-color="rgb(95.581055%, 43.933105%, 12.765503%)" stop-opacity="1"/>
<stop offset="0.734375" stop-color="rgb(95.544434%, 43.614197%, 12.796021%)" stop-opacity="1"/>
<stop offset="0.75" stop-color="rgb(95.507812%, 43.295288%, 12.826538%)" stop-opacity="1"/>
<stop offset="0.765625" stop-color="rgb(95.471191%, 42.976379%, 12.857056%)" stop-opacity="1"/>
<stop offset="0.78125" stop-color="rgb(95.43457%, 42.657471%, 12.887573%)" stop-opacity="1"/>
<stop offset="0.796875" stop-color="rgb(95.397949%, 42.338562%, 12.919617%)" stop-opacity="1"/>
<stop offset="0.8125" stop-color="rgb(95.361328%, 42.021179%, 12.950134%)" stop-opacity="1"/>
<stop offset="0.828125" stop-color="rgb(95.323181%, 41.702271%, 12.980652%)" stop-opacity="1"/>
<stop offset="0.84375" stop-color="rgb(95.28656%, 41.383362%, 13.011169%)" stop-opacity="1"/>
<stop offset="0.859375" stop-color="rgb(95.249939%, 41.064453%, 13.041687%)" stop-opacity="1"/>
<stop offset="0.875" stop-color="rgb(95.213318%, 40.745544%, 13.072205%)" stop-opacity="1"/>
<stop offset="0.890625" stop-color="rgb(95.176697%, 40.428162%, 13.102722%)" stop-opacity="1"/>
<stop offset="0.90625" stop-color="rgb(95.140076%, 40.109253%, 13.13324%)" stop-opacity="1"/>
<stop offset="0.921875" stop-color="rgb(95.103455%, 39.790344%, 13.163757%)" stop-opacity="1"/>
<stop offset="0.9375" stop-color="rgb(95.066833%, 39.471436%, 13.194275%)" stop-opacity="1"/>
<stop offset="0.953125" stop-color="rgb(95.030212%, 39.152527%, 13.224792%)" stop-opacity="1"/>
<stop offset="0.96875" stop-color="rgb(94.993591%, 38.833618%, 13.25531%)" stop-opacity="1"/>
<stop offset="0.984375" stop-color="rgb(94.95697%, 38.516235%, 13.285828%)" stop-opacity="1"/>
<stop offset="1" stop-color="rgb(94.918823%, 38.197327%, 13.317871%)" stop-opacity="1"/>
</linearGradient>
</defs>
<g clip-path="url(#clip-0)">
<path fill-rule="evenodd" fill="rgb(0%, 0%, 0.784302%)" fill-opacity="1" d="M 1354.558594 2530.429688 L 1811.941406 2530.429688 L 1811.941406 2072.988281 L 1354.558594 2072.988281 Z M 1354.558594 1618.789062 L 1354.558594 1161.351562 L 1811.941406 1161.351562 L 1811.941406 1618.789062 Z M 1855.910156 1706.699219 L 1310.578125 1706.699219 C 1286.28125 1706.699219 1266.589844 1687.019531 1266.589844 1662.730469 L 1266.589844 1117.371094 C 1266.589844 1093.070312 1286.28125 1073.390625 1310.578125 1073.390625 L 1855.941406 1073.390625 C 1880.230469 1073.390625 1899.898438 1093.070312 1899.898438 1117.371094 L 1899.898438 1662.75 C 1899.878906 1687.050781 1880.179688 1706.699219 1855.910156 1706.699219 Z M 442.898438 2530.429688 L 442.898438 2072.988281 L 900.285156 2072.988281 L 900.285156 2530.429688 Z M 944.265625 2618.390625 L 398.90625 2618.390625 C 374.621094 2618.390625 354.921875 2598.691406 354.921875 2574.398438 L 354.921875 2029.050781 C 354.921875 2004.75 374.621094 1985.058594 398.90625 1985.058594 L 944.265625 1985.058594 C 968.5625 1985.058594 988.246094 2004.75 988.246094 2029.050781 L 988.246094 2574.398438 C 988.246094 2598.691406 968.546875 2618.390625 944.265625 2618.390625 Z M 442.898438 1618.789062 L 442.898438 1161.351562 L 900.285156 1161.351562 L 900.285156 1618.789062 Z M 944.265625 1706.699219 L 398.90625 1706.699219 C 374.621094 1706.699219 354.921875 1687.019531 354.921875 1662.730469 L 354.921875 1117.371094 C 354.921875 1093.070312 374.621094 1073.390625 398.90625 1073.390625 L 944.265625 1073.390625 C 968.5625 1073.390625 988.246094 1093.070312 988.246094 1117.371094 L 988.246094 1662.75 C 988.246094 1687.050781 968.546875 1706.699219 944.265625 1706.699219 Z M 2905.96875 2618.371094 L 2295.460938 2618.371094 C 2237.570312 2618.371094 2237.539062 2530.398438 2295.460938 2530.398438 L 2905.96875 2530.398438 C 2963.859375 2530.398438 2963.859375 2618.371094 2905.96875 2618.371094 Z M 2905.96875 2254.121094 L 2295.460938 2254.121094 C 2237.570312 2254.121094 2237.570312 2166.160156 2295.460938 2166.160156 L 2905.96875 2166.160156 C 2963.859375 2166.160156 2963.859375 2254.121094 2905.96875 2254.121094 Z M 2905.96875 1889.871094 L 2295.460938 1889.871094 C 2237.539062 1889.871094 2237.570312 1801.910156 2295.460938 1801.910156 L 2905.96875 1801.910156 C 2963.859375 1801.910156 2963.859375 1889.871094 2905.96875 1889.871094 Z M 2905.96875 1525.621094 L 2295.460938 1525.621094 C 2237.570312 1525.621094 2237.539062 1437.671875 2295.460938 1437.671875 L 2905.96875 1437.671875 C 2963.859375 1437.671875 2963.859375 1525.621094 2905.96875 1525.621094 Z M 2905.96875 1161.371094 L 2295.460938 1161.371094 C 2237.570312 1161.371094 2237.539062 1073.410156 2295.460938 1073.410156 L 2905.96875 1073.410156 C 2963.859375 1073.410156 2963.859375 1161.371094 2905.96875 1161.371094 Z M 1504.820312 443.78125 L 1288.289062 443.78125 C 1230.390625 443.78125 1230.390625 355.828125 1288.289062 355.828125 L 1504.820312 355.828125 C 1562.738281 355.828125 1562.71875 443.78125 1504.820312 443.78125 Z M 1045.03125 443.78125 L 828.515625 443.78125 C 770.597656 443.78125 770.597656 355.828125 828.515625 355.828125 L 1045.03125 355.828125 C 1102.949219 355.828125 1102.949219 443.78125 1045.03125 443.78125 Z M 585.285156 443.78125 L 368.753906 443.78125 C 310.851562 443.78125 310.851562 355.828125 368.753906 355.828125 L 585.285156 355.828125 C 643.1875 355.828125 643.1875 443.78125 585.285156 443.78125 Z M 2936.070312 443.78125 L 2413.050781 443.78125 C 2355.128906 443.78125 2355.128906 355.828125 2413.050781 355.828125 L 2936.070312 355.828125 C 2993.988281 355.828125 2993.960938 443.78125 2936.070312 443.78125 Z M 0.0117188 1475.53125 L 0 1476.679688 L 0 2711.871094 C 0 2861.078125 100.464844 2982.480469 223.9375 2982.480469 L 3080.871094 2982.480469 C 3204.351562 2982.480469 3304.808594 2861.078125 3304.789062 2711.871094 L 3304.859375 755.601562 L 3304.859375 266.109375 C 3304.859375 119.378906 3204.371094 0 3080.898438 0 L 223.964844 0 C 100.476562 0 0.0273438 119.378906 0.0273438 266.109375 Z M 3216.878906 711.609375 L 3216.878906 266.109375 C 3216.878906 169.558594 3154.601562 87.960938 3080.871094 87.960938 L 223.9375 87.960938 C 150.238281 87.960938 87.988281 169.53125 87.988281 266.109375 L 87.988281 711.609375 Z M 3216.878906 1475.171875 L 3216.878906 799.578125 L 87.988281 799.578125 L 87.960938 2711.871094 C 87.960938 2810.871094 150.210938 2894.550781 223.910156 2894.550781 L 3080.851562 2894.550781 C 3154.570312 2894.550781 3216.820312 2810.921875 3216.820312 2711.871094 L 3216.820312 1476.679688 Z M 1855.910156 2618.390625 L 1310.578125 2618.390625 C 1286.28125 2618.390625 1266.589844 2598.691406 1266.589844 2574.398438 L 1266.589844 2029.050781 C 1266.589844 2004.75 1286.28125 1985.058594 1310.578125 1985.058594 L 1855.941406 1985.058594 C 1880.230469 1985.058594 1899.898438 2004.75 1899.898438 2029.050781 L 1899.898438 2574.398438 C 1899.878906 2598.691406 1880.179688 2618.390625 1855.910156 2618.390625 "/>
</g>
<g clip-path="url(#clip-1)">
<path fill-rule="nonzero" fill="url(#linear-pattern-0)" d="M 900.285156 1161.351562 L 442.898438 1161.351562 L 442.898438 1618.789062 L 900.285156 1618.789062 Z M 900.285156 1161.351562 "/>
</g>
<g clip-path="url(#clip-2)">
<path fill-rule="nonzero" fill="url(#linear-pattern-1)" d="M 1354.558594 1618.789062 L 1811.941406 1618.789062 L 1811.941406 1161.351562 L 1354.558594 1161.351562 Z M 1354.558594 1618.789062 "/>
</g>
<g clip-path="url(#clip-3)">
<g clip-path="url(#clip-4)">
<path fill-rule="nonzero" fill="url(#linear-pattern-2)" d="M 87.960938 2894.550781 L 3216.878906 2894.550781 L 3216.878906 799.578125 L 87.960938 799.578125 Z M 87.960938 2894.550781 "/>
</g>
</g>
<g clip-path="url(#clip-5)">
<g clip-path="url(#clip-6)">
<path fill-rule="nonzero" fill="url(#linear-pattern-3)" d="M 3216.878906 87.960938 L 87.988281 87.960938 L 87.988281 711.609375 L 3216.878906 711.609375 Z M 3216.878906 87.960938 "/>
</g>
</g>
<g clip-path="url(#clip-7)">
<path fill-rule="nonzero" fill="url(#linear-pattern-4)" d="M 442.898438 2530.429688 L 900.285156 2530.429688 L 900.285156 2072.988281 L 442.898438 2072.988281 Z M 442.898438 2530.429688 "/>
</g>
<g clip-path="url(#clip-8)">
<path fill-rule="nonzero" fill="url(#linear-pattern-5)" d="M 1811.941406 2072.988281 L 1354.558594 2072.988281 L 1354.558594 2530.429688 L 1811.941406 2530.429688 Z M 1811.941406 2072.988281 "/>
</g>
</svg>

  
);

export const ThemedTitleV2: React.FC<RefineLayoutThemedTitleProps> = ({
  collapsed,
  wrapperStyles,
  icon = defaultIcon,
  text = defaultText,
}) => {
  const routerType = useRouterType();
  const Link = useLink();
  const { Link: LegacyLink } = useRouterContext();

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link;

  return (
    <MuiLink
      to="/"
      component={ActiveLink}
      underline="none"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        ...wrapperStyles,
      }}
    >
      <SvgIcon height="24px" width="24px" color="primary">
        {icon}
      </SvgIcon>
      {!collapsed && (
        <Typography
          variant="h6"
          fontWeight={700}
          color="text.primary"
          fontSize="inherit"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          {text}
        </Typography>
      )}
    </MuiLink>
  );
};
