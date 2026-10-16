"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7.5 4.21l0 .01"}],["path",{"d":"M4.21 7.5l0 .01"}],["path",{"d":"M3 12l0 .01"}],["path",{"d":"M4.21 16.5l0 .01"}],["path",{"d":"M7.5 19.79l0 .01"}],["path",{"d":"M12 21l0 .01"}],["path",{"d":"M16.5 19.79l0 .01"}],["path",{"d":"M19.79 16.5l0 .01"}],["path",{"d":"M21 12l0 .01"}],["path",{"d":"M19.79 7.5l0 .01"}],["path",{"d":"M16.5 4.21l0 .01"}],["path",{"d":"M12 3l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12.01],"a":0.12}];

export const CircleDottedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CircleDottedIcon.displayName = "CircleDottedIcon";
