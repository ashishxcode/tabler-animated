"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4"}],["path",{"d":"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.1}];

export const RouteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteIcon.displayName = "RouteIcon";
