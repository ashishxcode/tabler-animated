"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 7l5 5l-5 5"}],["path",{"d":"M13 7l5 5l-5 5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12],"d":[1.92,0]}];

export const ChevronsRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsRightIcon.displayName = "ChevronsRightIcon";
