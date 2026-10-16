"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}],["path",{"d":"M8 11l-1 1l1 1"}],["path",{"d":"M11 8l1 -1l1 1"}],["path",{"d":"M16 11l1 1l-1 1"}],["path",{"d":"M11 16l1 1l1 -1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const DirectionArrowsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DirectionArrowsIcon.displayName = "DirectionArrowsIcon";
