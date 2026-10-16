"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7h5l3.5 5h9.5"}],["path",{"d":"M3 17h5l3.495 -5"}],["path",{"d":"M18 15l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[2.4,0]}];

export const ArrowsJoinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsJoinIcon.displayName = "ArrowsJoinIcon";
