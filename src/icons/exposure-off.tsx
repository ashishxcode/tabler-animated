"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.6 20.4l8.371 -8.371m2.04 -2.04l6.389 -6.389"}],["path",{"d":"M6 8h2m0 0v2"}],["path",{"d":"M14 16h2"}],["path",{"d":"M7 3h12a2 2 0 0 1 2 2v12m-.5 3.5c-.362 .36 -.95 .5 -1.5 .5h-14a2 2 0 0 1 -2 -2v-14c0 -.541 .215 -1.033 .565 -1.393"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[15,16],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[1],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,9]]}];

export const ExposureOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExposureOffIcon.displayName = "ExposureOffIcon";
