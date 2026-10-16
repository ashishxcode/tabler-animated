"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 8l4 8"}],["path",{"d":"M10 16l4 -8"}],["path",{"d":"M17 8l4 8"}],["path",{"d":"M17 16l4 -8"}],["path",{"d":"M3 8l4 8"}],["path",{"d":"M3 16l4 -8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12],"a":0.06}];

export const XxxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
XxxIcon.displayName = "XxxIcon";
