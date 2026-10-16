"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5v8h8"}],["path",{"d":"M7 9v8h8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[13,11],"d":[-1.38,1.38]}];

export const ChevronsDownLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsDownLeftIcon.displayName = "ChevronsDownLeftIcon";
