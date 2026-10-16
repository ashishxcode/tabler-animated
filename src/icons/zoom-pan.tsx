"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M17 17l-2.5 -2.5"}],["path",{"d":"M10 4l2 -2l2 2"}],["path",{"d":"M20 10l2 2l-2 2"}],["path",{"d":"M4 10l-2 2l2 2"}],["path",{"d":"M10 20l2 2l2 -2"}]];
const rig: Rig[] = [{"fx":"sweep","n":[0,1,2,3,4,5],"o":[12,12]}];

export const ZoomPanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZoomPanIcon.displayName = "ZoomPanIcon";
