"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 3a21 21 0 0 1 0 18"}],["path",{"d":"M19 3a21 21 0 0 0 0 18"}],["path",{"d":"M5 12l14 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.06}];

export const ZodiacPiscesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacPiscesIcon.displayName = "ZodiacPiscesIcon";
