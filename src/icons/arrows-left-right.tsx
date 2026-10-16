"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 17l-18 0"}],["path",{"d":"M6 10l-3 -3l3 -3"}],["path",{"d":"M3 7l18 0"}],["path",{"d":"M18 20l3 -3l-3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[1,2],"o":[12,7],"d":[-2.2,0]},{"fx":"nudge","n":[0,3],"o":[12,17],"d":[2.2,0]}];

export const ArrowsLeftRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsLeftRightIcon.displayName = "ArrowsLeftRightIcon";
