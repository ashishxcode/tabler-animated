"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 5l0 -2"}],["path",{"d":"M17 7l1.4 -1.4"}],["path",{"d":"M19 12l2 0"}],["path",{"d":"M17 17l1.4 1.4"}],["path",{"d":"M12 19l0 2"}],["path",{"d":"M7 17l-1.4 1.4"}],["path",{"d":"M6 12l-2 0"}],["path",{"d":"M7 7l-1.4 -1.4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.1},{"fx":"spin","n":[1,2,3,4,5,6,7,8],"o":[12.5,12],"a":45,"sym":true}];

export const BrightnessUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessUpIcon.displayName = "BrightnessUpIcon";
