"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8"}],["path",{"d":"M4 18h17"}],["path",{"d":"M18 15l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.5,12.5],"d":[2.4,0]}];

export const ArrowAutofitRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitRightIcon.displayName = "ArrowAutofitRightIcon";
