"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4a3 3 0 0 1 3 3v9"}],["path",{"d":"M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3"}],["path",{"d":"M13 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[10,12.5],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.5,10],[16,17]]}];

export const ZodiacCapricornIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacCapricornIcon.displayName = "ZodiacCapricornIcon";
