"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6"}],["path",{"d":"M10 18h-7"}],["path",{"d":"M21 18h-7"}],["path",{"d":"M6 15l-3 3l3 3"}],["path",{"d":"M18 15l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12.5],"d":[2.4,0]}];

export const ArrowAutofitWidthIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitWidthIcon.displayName = "ArrowAutofitWidthIcon";
