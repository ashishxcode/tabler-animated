"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M7 10l6 0"}],["path",{"d":"M10 7l0 6"}],["path",{"d":"M21 21l-6 -6"}]];
const rig: Rig[] = [{"fx":"sweep","n":[0,1,2,3],"o":[12,12]}];

export const ZoomInIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomInIcon.displayName = "ZoomInIcon";
