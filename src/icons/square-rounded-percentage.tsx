"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}],["path",{"d":"M9 15.075l6 -6"}],["path",{"d":"M9 9.105v.015"}],["path",{"d":"M15 15.12v.015"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3],"o":[12,12],"a":-8}];

export const SquareRoundedPercentageIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareRoundedPercentageIcon.displayName = "SquareRoundedPercentageIcon";
