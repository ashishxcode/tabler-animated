"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 6l6 6l-6 6"}],["path",{"d":"M17 5v13"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,11.5],"d":[1.92,0]}];

export const ChevronRightPipeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChevronRightPipeIcon.displayName = "ChevronRightPipeIcon";
