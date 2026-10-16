"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h3v6h-3"}],["path",{"d":"M21 15v-6"}],["path",{"d":"M18 15v-6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.21,12],"d":[-2.4,0]}];

export const ArrowBigLeftLinesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBigLeftLinesIcon.displayName = "ArrowBigLeftLinesIcon";
