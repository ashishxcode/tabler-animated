"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v18"}],["path",{"d":"M16 7l-4 -4l-4 4"}],["path",{"d":"M16 11h5v5"}],["path",{"d":"M8 11h-5v5"}],["path",{"d":"M3 11l8.293 8.293c.453 .453 .707 1.067 .707 1.707"}],["path",{"d":"M21 11l-8.293 8.293a2.4 2.4 0 0 0 -.707 1.707"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12],"d":[2.4,0]}];

export const ArrowForkTripleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArrowForkTripleIcon.displayName = "ArrowForkTripleIcon";
