"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 7v3h3l3 -3h-3v-3l-3 3"}],["path",{"d":"M14 10l-9 9"}],["path",{"d":"M5 15v4h4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.5,11.5],"d":[2.4,0]}];

export const ArcheryArrowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArcheryArrowIcon.displayName = "ArcheryArrowIcon";
