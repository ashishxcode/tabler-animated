"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M8 12l0 .01"}],["path",{"d":"M12 12l0 .01"}],["path",{"d":"M16 12l0 .01"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3],"st":0.06,"os":[[12,12],[8,12.01],[12,12.01],[16,12.01]]}];

export const DotsCircleHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DotsCircleHorizontalIcon.displayName = "DotsCircleHorizontalIcon";
