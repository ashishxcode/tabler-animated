"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 7h.01"}],["path",{"d":"M15 7h.01"}],["path",{"d":"M9 7h.01"}],["path",{"d":"M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M9 15h6"}],["path",{"d":"M5 11h14"}]];
const rig: Rig[] = [{"fx":"pop","n":[3],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12.01,7],[15.01,7],[9,7],[12,15],[12,11]]}];

export const CookerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CookerIcon.displayName = "CookerIcon";
