"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18"}],["path",{"d":"M16 12l-4 -4"}],["path",{"d":"M16 12h-8"}],["path",{"d":"M12 16l4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[2.4,0]}];

export const CircleArrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleArrowRightIcon.displayName = "CircleArrowRightIcon";
