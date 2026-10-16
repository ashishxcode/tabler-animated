"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 15l-3 -3l3 -3"}],["path",{"d":"M11 15l-3 -3l3 -3"}],["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-1.92,0]}];

export const SquareRoundedChevronsLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareRoundedChevronsLeftIcon.displayName = "SquareRoundedChevronsLeftIcon";
