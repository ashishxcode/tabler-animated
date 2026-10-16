"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 12h-6"}],["path",{"d":"M5 15l-3 -3l3 -3"}],["path",{"d":"M22 12h-6"}],["path",{"d":"M19 15l3 -3l-3 -3"}],["path",{"d":"M12 4v16"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0]}];

export const ArrowBarBothIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBarBothIcon.displayName = "ArrowBarBothIcon";
