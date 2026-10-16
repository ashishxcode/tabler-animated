"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5"}],["path",{"d":"M18.37 7.16l0 .01"}],["path",{"d":"M13 19.94l0 .01"}],["path",{"d":"M16.84 18.37l0 .01"}],["path",{"d":"M19.37 15.1l0 .01"}],["path",{"d":"M19.94 11l0 .01"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5],"o":[11.95,11.98],"a":360}];

export const Rotate2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Rotate2Icon.displayName = "Rotate2Icon";
