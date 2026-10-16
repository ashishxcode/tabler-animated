"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 12l-10 0"}],["path",{"d":"M14 12l-4 4"}],["path",{"d":"M14 12l-4 -4"}],["path",{"d":"M20 4l0 3m0 13l0 -3m0 -3.5l0 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const ArrowBarToRightDashedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBarToRightDashedIcon.displayName = "ArrowBarToRightDashedIcon";
