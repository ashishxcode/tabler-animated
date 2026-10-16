"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 6h-9a6 6 0 1 0 0 12h9"}],["path",{"d":"M13 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0"}],["path",{"d":"M13 12h7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,12],[16.5,12]]}];

export const CapRoundedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CapRoundedIcon.displayName = "CapRoundedIcon";
