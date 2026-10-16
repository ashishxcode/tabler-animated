"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"}],["path",{"d":"M18 4v17"}],["path",{"d":"M15 18l3 3l3 -3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.5,12.5],"d":[0,2.4]}];

export const ArrowAutofitDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitDownIcon.displayName = "ArrowAutofitDownIcon";
