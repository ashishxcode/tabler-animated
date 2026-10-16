"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8"}],["path",{"d":"M20 18h-17"}],["path",{"d":"M6 15l-3 3l3 3"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.5,12.5],"d":[-2.4,0]}];

export const ArrowAutofitLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowAutofitLeftIcon.displayName = "ArrowAutofitLeftIcon";
