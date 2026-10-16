"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.477 15.022a9 9 0 1 0 -7.998 5.965"}],["path",{"d":"M12 7v5l3 3"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"spin","n":[1],"o":[12,12],"a":360},{"fx":"pop","n":[0],"o":[12,12],"a":0.05}];

export const ClockMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClockMinusIcon.displayName = "ClockMinusIcon";
