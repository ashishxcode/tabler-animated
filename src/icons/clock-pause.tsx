"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.942 13.018a9 9 0 1 0 -7.909 7.922"}],["path",{"d":"M12 7v5l2 2"}],["path",{"d":"M17 17v5"}],["path",{"d":"M21 17v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[19,19.5],"a":0.35,"dl":0.2},{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ClockPauseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockPauseIcon.displayName = "ClockPauseIcon";
