"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18"}],["path",{"d":"M8 12l4 4"}],["path",{"d":"M8 12h8"}],["path",{"d":"M12 8l-4 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[-2.4,0]}];

export const CircleArrowLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleArrowLeftIcon.displayName = "CircleArrowLeftIcon";
