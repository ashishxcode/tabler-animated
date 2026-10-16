"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M12 3l0 18"}],["path",{"d":"M12 9l4.65 -4.65"}],["path",{"d":"M12 14.3l7.37 -7.37"}],["path",{"d":"M12 19.6l8.85 -8.85"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1},{"fx":"spin","n":[1,2,3,4],"o":[16.43,12],"a":45,"sym":true}];

export const BrightnessIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessIcon.displayName = "BrightnessIcon";
