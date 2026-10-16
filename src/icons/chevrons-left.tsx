"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 7l-5 5l5 5"}],["path",{"d":"M17 7l-5 5l5 5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,12],"d":[-1.92,0]}];

export const ChevronsLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronsLeftIcon.displayName = "ChevronsLeftIcon";
