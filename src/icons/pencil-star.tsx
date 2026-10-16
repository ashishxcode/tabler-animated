"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17.5 10.5l1 -1a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l2 -2"}],["path",{"d":"M13.5 6.5l4 4"}],["path",{"d":"M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138"}]];
const rig: Rig[] = [{"fx":"twinkle","n":[0,1,2],"o":[13,13.34]}];

export const PencilStarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PencilStarIcon.displayName = "PencilStarIcon";
