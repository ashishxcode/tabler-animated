"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}],["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M7 10l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[18,18],"dl":0.2,"st":0.08},{"fx":"sweep","n":[0,2],"o":[10,10]}];

export const ZoomCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomCheckIcon.displayName = "ZoomCheckIcon";
