"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3a21 21 0 0 0 18 0"}],["path",{"d":"M3 21a21 21 0 0 1 18 0"}],["path",{"d":"M7 4.5l0 15"}],["path",{"d":"M17 4.5l0 15"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,12],"a":0.06}];

export const ZodiacGeminiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ZodiacGeminiIcon.displayName = "ZodiacGeminiIcon";
