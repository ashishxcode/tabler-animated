"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 4l4 0l0 4"}],["path",{"d":"M14 10l6 -6"}],["path",{"d":"M8 20l-4 0l0 -4"}],["path",{"d":"M4 20l6 -6"}],["path",{"d":"M16 20l4 0l0 -4"}],["path",{"d":"M14 14l6 6"}],["path",{"d":"M8 4l-4 0l0 4"}],["path",{"d":"M4 4l6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7],"o":[12,12],"a":0.12}];

export const ArrowsMaximizeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowsMaximizeIcon.displayName = "ArrowsMaximizeIcon";
