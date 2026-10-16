"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3"}],["path",{"d":"M3 9v6"}],["path",{"d":"M6 9v6"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[11.79,12],"d":[2.4,0]}];

export const ArrowBigRightLinesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBigRightLinesIcon.displayName = "ArrowBigRightLinesIcon";
