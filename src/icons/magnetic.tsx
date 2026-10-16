"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3v18"}],["path",{"d":"M18 7c-.633 -1.255 -1.538 -2 -2.5 -2c-1.933 0 -3.5 3.134 -3.5 7s1.567 7 3.5 7s3.5 -3.134 3.5 -7v-1"}],["path",{"d":"M6 7c.633 -1.255 1.538 -2 2.5 -2c1.933 0 3.5 3.134 3.5 7s-1.567 7 -3.5 7s-3.5 -3.134 -3.5 -7v-1"}],["path",{"d":"M3 13l2 -2l2 2"}],["path",{"d":"M17 13l2 -2l2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[19,12]]}];

export const MagneticIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MagneticIcon.displayName = "MagneticIcon";
