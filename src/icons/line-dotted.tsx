"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12v.01"}],["path",{"d":"M8 12v.01"}],["path",{"d":"M12 12v.01"}],["path",{"d":"M16 12v.01"}],["path",{"d":"M20 12v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12.01],"a":0.06}];

export const LineDottedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LineDottedIcon.displayName = "LineDottedIcon";
