"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 13s1 -9 4 -9c2.48 0 5.643 9.565 8.36 12.883"}],["path",{"d":"M18.748 17.038c.702 -.88 1.452 -3.56 2.252 -8.038"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[9.18,10.44],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,18],[19.87,13.02]]}];

export const MathMinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MathMinIcon.displayName = "MathMinIcon";
