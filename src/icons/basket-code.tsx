"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 10l-2 -6"}],["path",{"d":"M7 10l2 -6"}],["path",{"d":"M11 20h-3.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304c-.21 1.202 -.37 2.104 -.475 2.705"}],["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M20 21l2 -2l-2 -2"}],["path",{"d":"M17 17l-2 2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5],"o":[18.5,19],"a":0.35,"dl":0.2},{"fx":"tilt","n":[0,1,2,3],"o":[12,5],"a":-8}];

export const BasketCodeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BasketCodeIcon.displayName = "BasketCodeIcon";
