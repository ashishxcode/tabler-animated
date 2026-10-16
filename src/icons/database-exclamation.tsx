"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3"}],["path",{"d":"M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.182 -.086 3.148 -.241m4.852 -2.759v-6"}],["path",{"d":"M4 12v6c0 1.657 3.582 3 8 3c1.064 0 2.079 -.078 3.007 -.22"}],["path",{"d":"M19 16v3"}],["path",{"d":"M19 22v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"wave","n":[0,1,2],"st":0.12,"os":[[12,6],[12,10.5],[9.5,16.5]]}];

export const DatabaseExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseExclamationIcon.displayName = "DatabaseExclamationIcon";
