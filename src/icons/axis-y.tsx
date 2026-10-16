"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 20h-.01"}],["path",{"d":"M15 20h-.01"}],["path",{"d":"M19 20h-.01"}],["path",{"d":"M4 7l3 -3l3 3"}],["path",{"d":"M7 20v-16"}]];
const rig: Rig[] = [{"fx":"pop","n":[4],"o":[7,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,20],[15,20],[18.99,20],[7,5.5]]}];

export const AxisYIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AxisYIcon.displayName = "AxisYIcon";
