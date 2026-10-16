"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 14s.605 -5.44 2.284 -7.862m3.395 .026c2.137 2.652 4.547 9.113 6.68 11.719"}],["path",{"d":"M18.748 18.038c.702 -.88 1.452 -3.56 2.252 -8.038"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[9.18,12.01],"a":0.06},{"fx":"pop","n":[0,1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,19],[7,5],[19.87,14.02]]}];

export const MathMaxMinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathMaxMinIcon.displayName = "MathMaxMinIcon";
