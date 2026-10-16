"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5"}],["path",{"d":"M4 15.005v-.01"}],["path",{"d":"M4 20.005v-.01"}],["path",{"d":"M9 20.005v-.01"}],["path",{"d":"M15 20.005v-.01"}],["path",{"d":"M20 20.005v-.01"}],["path",{"d":"M20 15.005v-.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12.01],"d":[2.4,0],"st":0.06}];

export const BoxAlignTopIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxAlignTopIcon.displayName = "BoxAlignTopIcon";
