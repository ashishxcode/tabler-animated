"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 13v.01"}],["path",{"d":"M4 9v.01"}],["path",{"d":"M4 5v.01"}],["path",{"d":"M17 20l3 -3l-3 -3"}],["path",{"d":"M4 17h16"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[18.5,17],"dl":0.2,"st":0.08},{"fx":"pop","n":[4],"o":[12,17],"a":0.06},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,13.01],[4,9],[4,5.01]]}];

export const AxisXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AxisXIcon.displayName = "AxisXIcon";
