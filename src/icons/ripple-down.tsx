"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 7q 4.5 -3 9 0t 9 0"}],["path",{"d":"M3 17q 4.5 -3 9 0q .213 .142 .427 .27"}],["path",{"d":"M3 12q 4.5 -3 9 0q 2.006 1.338 4.012 1.482"}],["path",{"d":"M19 16v6"}],["path",{"d":"M22 19l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,7],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.71,16.38],[9.51,11.99],[19,19],[19,20.5]]}];

export const RippleDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RippleDownIcon.displayName = "RippleDownIcon";
