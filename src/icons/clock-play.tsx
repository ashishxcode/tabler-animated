"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 7v5l2 2"}],["path",{"d":"M17 22l5 -3l-5 -3l0 6"}],["path",{"d":"M13.017 20.943a9 9 0 1 1 7.831 -7.292"}]];
const rig: Rig[] = [{"fx":"spin","n":[0],"o":[12,12],"a":360},{"fx":"pop","n":[1,2],"o":[12.5,12.5],"a":0.05}];

export const ClockPlayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockPlayIcon.displayName = "ClockPlayIcon";
