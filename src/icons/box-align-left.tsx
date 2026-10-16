"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.002 20.003v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5"}],["path",{"d":"M15.002 20.003h-.01"}],["path",{"d":"M20.003 20.003h-.011"}],["path",{"d":"M20.003 15.002h-.011"}],["path",{"d":"M20.003 9.002h-.011"}],["path",{"d":"M20.003 4.002h-.011"}],["path",{"d":"M15.002 4.002h-.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const BoxAlignLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxAlignLeftIcon.displayName = "BoxAlignLeftIcon";
