"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 4l0 10"}],["path",{"d":"M12 4l4 4"}],["path",{"d":"M12 4l-4 4"}],["path",{"d":"M4 20l16 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[0,-2.4]}];

export const ArrowBarUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowBarUpIcon.displayName = "ArrowBarUpIcon";
