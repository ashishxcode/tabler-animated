"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 21v-6"}],["path",{"d":"M20 6l-3 -3l-3 3"}],["path",{"d":"M17 3v18"}],["path",{"d":"M10 18l-3 3l-3 -3"}],["path",{"d":"M7 3v2"}],["path",{"d":"M7 9v2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12],"d":[0,-2.4]}];

export const ArrowsTransferUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsTransferUpIcon.displayName = "ArrowsTransferUpIcon";
