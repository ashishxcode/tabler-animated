"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5"}],["path",{"d":"M5.63 7.16l0 .01"}],["path",{"d":"M4.06 11l0 .01"}],["path",{"d":"M4.63 15.1l0 .01"}],["path",{"d":"M7.16 18.37l0 .01"}],["path",{"d":"M11 19.94l0 .01"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5],"o":[12.05,11.98],"a":360}];

export const RotateClockwise2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RotateClockwise2Icon.displayName = "RotateClockwise2Icon";
