"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v5m0 4v9"}],["path",{"d":"M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098"}],["path",{"d":"M12.5 8.5l4.15 -4.15"}],["path",{"d":"M12 14l1.025 -.983m2.065 -1.981l4.28 -4.106"}],["path",{"d":"M12 19.6l3.79 -3.79m2 -2l3.054 -3.054"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[12,12],"a":0.1},{"fx":"spin","n":[0,2,3,4],"o":[16.42,12],"a":45,"sym":true}];

export const BrightnessOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessOffIcon.displayName = "BrightnessOffIcon";
