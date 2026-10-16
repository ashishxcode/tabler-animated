"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2"}],["path",{"d":"M3 17h4v4h-4l0 -4"}],["path",{"d":"M17 3h4v4h-4l0 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.1}];

export const RouteSquare2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RouteSquare2Icon.displayName = "RouteSquare2Icon";
