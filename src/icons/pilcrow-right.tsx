"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 9h-2a3 3 0 1 1 0 -6h7"}],["path",{"d":"M11 3v11"}],["path",{"d":"M15 3v11"}],["path",{"d":"M21 18h-18"}],["path",{"d":"M18 15l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,4],"o":[13.5,12],"st":0.07},{"fx":"pop","n":[3],"o":[12,18],"a":0.04}];

export const PilcrowRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PilcrowRightIcon.displayName = "PilcrowRightIcon";
