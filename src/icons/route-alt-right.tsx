"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 3h5v5"}],["path",{"d":"M8 3h-5v5"}],["path",{"d":"M21 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"}],["path",{"d":"M6 6.01v-.01"}],["path",{"d":"M8 8.02v-.01"}],["path",{"d":"M10 10v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.1}];

export const RouteAltRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteAltRightIcon.displayName = "RouteAltRightIcon";
