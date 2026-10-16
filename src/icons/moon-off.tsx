"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.962 3.949a8.97 8.97 0 0 1 4.038 -.957v.008h.393a7.478 7.478 0 0 0 -2.07 3.308m-.141 3.84c.186 .823 .514 1.626 .989 2.373a7.49 7.49 0 0 0 4.586 3.268m3.893 -.11c.223 -.067 .444 -.144 .663 -.233a9.088 9.088 0 0 1 -.274 .597m-1.695 2.337a9 9 0 0 1 -12.71 -12.749"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[12,12],"dl":0.25},{"fx":"tilt","n":[0],"o":[11.65,12],"a":-14}];

export const MoonOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MoonOffIcon.displayName = "MoonOffIcon";
