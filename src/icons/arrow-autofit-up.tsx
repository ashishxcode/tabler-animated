"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8"}],["path",{"d":"M18 20v-17"}],["path",{"d":"M15 6l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.5,11.5],"d":[0,-2.4]}];

export const ArrowAutofitUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitUpIcon.displayName = "ArrowAutofitUpIcon";
