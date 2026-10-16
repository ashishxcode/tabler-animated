"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.479 2.729"}],["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0,1,2,3],"o":[12,5],"a":-8}];

export const BasketCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BasketCheckIcon.displayName = "BasketCheckIcon";
