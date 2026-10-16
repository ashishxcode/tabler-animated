"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 16h10"}],["path",{"d":"M11 16l4 4"}],["path",{"d":"M11 16l4 -4"}],["path",{"d":"M13 8h-10"}],["path",{"d":"M13 8l-4 4"}],["path",{"d":"M13 8l-4 -4"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0]}];

export const ArrowsDiffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsDiffIcon.displayName = "ArrowsDiffIcon";
