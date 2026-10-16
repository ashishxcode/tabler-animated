"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.536 8.464l-9.536 9.536"}],["path",{"d":"M6 14v4h4"}],["path",{"d":"M15.586 8.414a2 2 0 1 0 2.828 -2.828a2 2 0 0 0 -2.828 2.828"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2],"o":[12.51,11.51],"d":[-1.73,1.73]}];

export const ArrowDownLeftCircleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowDownLeftCircleIcon.displayName = "ArrowDownLeftCircleIcon";
