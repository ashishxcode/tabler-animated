"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5h1.4a1 1 0 0 1 .882 .53l1.718 3.22"}],["path",{"d":"M3.485 16.94l.136 .545a2 2 0 0 0 1.94 1.515h7.439a10 10 0 0 0 8 -4c0 -6 -5 -8 -5 -8c-1.889 2.518 -5.852 4 -9 4h-2a2 2 0 0 0 -2 2c0 1.328 .163 2.652 .485 3.94"}],["path",{"d":"M3.25 15h17.75"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,13],"a":0.06},{"fx":"pop","n":[0],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6.88]]}];

export const JetskiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
JetskiIcon.displayName = "JetskiIcon";
