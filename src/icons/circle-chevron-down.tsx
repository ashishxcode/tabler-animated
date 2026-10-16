"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 11l-3 3l-3 -3"}],["path",{"d":"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12],"d":[0,1.92]}];

export const CircleChevronDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleChevronDownIcon.displayName = "CircleChevronDownIcon";
