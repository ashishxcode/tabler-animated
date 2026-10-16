"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 14h16v5a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1v-5"}],["path",{"d":"M4 9v.01"}],["path",{"d":"M4 4v.01"}],["path",{"d":"M9 4v.01"}],["path",{"d":"M15 4v.01"}],["path",{"d":"M20 4v.01"}],["path",{"d":"M20 9v.01"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5,6],"o":[12,12],"d":[2.4,0],"st":0.06}];

export const BoxAlignBottomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BoxAlignBottomIcon.displayName = "BoxAlignBottomIcon";
