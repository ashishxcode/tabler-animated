"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5"}],["path",{"d":"M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5"}],["path",{"d":"M3 21l2.5 -2.5"}],["path",{"d":"M18.5 5.5l2.5 -2.5"}],["path",{"d":"M10 11l-2 2"}],["path",{"d":"M13 14l-2 2"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4,5],"o":[12,12]}];

export const PlugConnectedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlugConnectedIcon.displayName = "PlugConnectedIcon";
