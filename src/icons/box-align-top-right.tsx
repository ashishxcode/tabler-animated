"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1"}],["path",{"d":"M20 15.01v-.01"}],["path",{"d":"M20 20.01v-.01"}],["path",{"d":"M15 20.01v-.01"}],["path",{"d":"M9 20.01v-.01"}],["path",{"d":"M9 4.01v-.01"}],["path",{"d":"M4 20.01v-.01"}],["path",{"d":"M4 15.01v-.01"}],["path",{"d":"M4 9.01v-.01"}],["path",{"d":"M4 4.01v-.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7,8,9],"o":[12,12.01],"d":[2.4,0],"st":0.06}];

export const BoxAlignTopRightIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxAlignTopRightIcon.displayName = "BoxAlignTopRightIcon";
