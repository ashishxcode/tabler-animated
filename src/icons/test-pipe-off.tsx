"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 8.04a803.533 803.533 0 0 0 -4 3.96m-2 2c-1.085 1.085 -3.125 3.14 -6.122 6.164a2.857 2.857 0 0 1 -4.041 -4.04c3.018 -3 5.073 -5.037 6.163 -6.124m2 -2c.872 -.872 2.191 -2.205 3.959 -4"}],["path",{"d":"M7 13h6"}],["path",{"d":"M19 15l1.5 1.6m-.74 3.173a2 2 0 0 1 -2.612 -2.608"}],["path",{"d":"M15 3l6 6"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.75,17.46],"a":0.35,"dl":0.2},{"fx":"pop","n":[0],"o":[11.5,12.5],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,13],[18,6]]}];

export const TestPipeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TestPipeOffIcon.displayName = "TestPipeOffIcon";
