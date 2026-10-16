"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 9l3 3l-3 3"}],["path",{"d":"M13 15l3 0"}],["path",{"d":"M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12,12],"st":0.1}];

export const Terminal2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Terminal2Icon.displayName = "Terminal2Icon";
