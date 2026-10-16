"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M9 10h6"}],["path",{"d":"M9 16h6"}],["path",{"d":"M12 7v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const CirclePlusMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CirclePlusMinusIcon.displayName = "CirclePlusMinusIcon";
