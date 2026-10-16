"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17l4 4"}],["path",{"d":"M7 17l-4 4"}],["path",{"d":"M17 3l4 4"}],["path",{"d":"M21 3l-4 4"}],["path",{"d":"M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.1}];

export const RouteX2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteX2Icon.displayName = "RouteX2Icon";
