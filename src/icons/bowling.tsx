"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 11v.01"}],["path",{"d":"M11 10v.01"}],["path",{"d":"M10 14v.01"}],["path",{"d":"M11.059 6.07a8 8 0 1 0 .32 15.81"}],["path",{"d":"M15.969 9h4"}],["path",{"d":"M14.969 5c0 1.5 1 2 1 4c0 2.5 -2 4.5 -2 7c0 2.6 1.9 6 1.9 6h4.1s2 -3.4 2 -6c0 -2.5 -2 -4.5 -2 -7c0 -2 1 -2.5 1 -4a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5],"o":[11.98,22],"d":[0,-2.4]}];

export const BowlingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BowlingIcon.displayName = "BowlingIcon";
