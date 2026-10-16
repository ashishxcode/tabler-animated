"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159"}],["path",{"d":"M4 20l3.5 -3.5"}],["path",{"d":"M15 4l-3.5 3.5"}],["path",{"d":"M20 9l-3.5 3.5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"flash","n":[0,1,2,3],"o":[12,12]}];

export const PlugOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlugOffIcon.displayName = "PlugOffIcon";
