"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7l5 5l5 -5"}],["path",{"d":"M7 13l5 5l5 -5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12.5],"d":[0,1.92]}];

export const ChevronsDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsDownIcon.displayName = "ChevronsDownIcon";
