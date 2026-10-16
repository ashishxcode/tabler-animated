"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 5h-8v10h8m-1 -5h-7"}],["path",{"d":"M6 20l0 .01"}],["path",{"d":"M10 20l0 .01"}],["path",{"d":"M14 20l0 .01"}],["path",{"d":"M18 20l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,10],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,20.01],[10,20.01],[14,20.01],[18,20.01]]}];

export const EmphasisIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
EmphasisIcon.displayName = "EmphasisIcon";
