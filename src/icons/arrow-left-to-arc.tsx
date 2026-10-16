"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12h-12"}],["path",{"d":"M13 16l-4 -4l4 -4"}],["path",{"d":"M12 3a9 9 0 1 0 0 18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-2.4,0]}];

export const ArrowLeftToArcIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowLeftToArcIcon.displayName = "ArrowLeftToArcIcon";
