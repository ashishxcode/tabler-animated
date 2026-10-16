"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 12h-14"}],["path",{"d":"M6 9l-3 3l3 3"}],["path",{"d":"M21 14h-4v-4h4l0 4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12,12],"d":[-2.4,0]}];

export const ArrowLeftSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowLeftSquareIcon.displayName = "ArrowLeftSquareIcon";
