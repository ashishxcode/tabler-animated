"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12l4 -4v8l-4 -4"}],["path",{"d":"M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12,12],"d":[-1.92,0]}];

export const CircleCaretLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleCaretLeftIcon.displayName = "CircleCaretLeftIcon";
