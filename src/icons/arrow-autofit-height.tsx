"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6"}],["path",{"d":"M18 14v7"}],["path",{"d":"M18 3v7"}],["path",{"d":"M15 18l3 3l3 -3"}],["path",{"d":"M15 6l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12.5,12],"d":[2.4,0]}];

export const ArrowAutofitHeightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitHeightIcon.displayName = "ArrowAutofitHeightIcon";
