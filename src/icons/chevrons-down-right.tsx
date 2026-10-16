"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 5v8h-8"}],["path",{"d":"M17 9v8h-8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11,11],"d":[1.38,1.38]}];

export const ChevronsDownRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsDownRightIcon.displayName = "ChevronsDownRightIcon";
