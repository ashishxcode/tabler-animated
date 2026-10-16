"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M9 11a5 5 0 1 0 3.95 7.95"}],["path",{"d":"M19 20l-4 -5h-4l3 -5l-4 -3l-4 1"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12.5,13.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,6],[8.43,16]]}];

export const Disabled2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Disabled2Icon.displayName = "Disabled2Icon";
