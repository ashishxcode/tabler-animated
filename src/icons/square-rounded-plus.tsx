"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9"}],["path",{"d":"M15 12h-6"}],["path",{"d":"M12 9v6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const SquareRoundedPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SquareRoundedPlusIcon.displayName = "SquareRoundedPlusIcon";
