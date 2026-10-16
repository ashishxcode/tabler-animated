"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1"}],["path",{"d":"M15 4h-.01"}],["path",{"d":"M20 4h-.01"}],["path",{"d":"M20 9h-.01"}],["path",{"d":"M20 15h-.01"}],["path",{"d":"M4 15h-.01"}],["path",{"d":"M20 20h-.01"}],["path",{"d":"M15 20h-.01"}],["path",{"d":"M9 20h-.01"}],["path",{"d":"M4 20h-.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6,7,8,9],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const BoxAlignTopLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxAlignTopLeftIcon.displayName = "BoxAlignTopLeftIcon";
