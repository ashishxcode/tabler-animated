"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 5l0 .01"}],["path",{"d":"M17 7l0 .01"}],["path",{"d":"M19 12l0 .01"}],["path",{"d":"M17 17l0 .01"}],["path",{"d":"M12 19l0 .01"}],["path",{"d":"M7 17l0 .01"}],["path",{"d":"M5 12l0 .01"}],["path",{"d":"M7 7l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1},{"fx":"spin","n":[1,2,3,4,5,6,7,8],"o":[12,12.01],"a":45,"sym":true}];

export const BrightnessDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessDownIcon.displayName = "BrightnessDownIcon";
