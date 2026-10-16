"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.833 4.75"}],["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0,1,2,3],"o":[12,5],"a":-8}];

export const BasketMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BasketMinusIcon.displayName = "BasketMinusIcon";
