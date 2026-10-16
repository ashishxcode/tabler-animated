"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19l.01 0"}],["path",{"d":"M7 19a4 4 0 0 0 -4 -4"}],["path",{"d":"M11 19a8 8 0 0 0 -8 -8"}],["path",{"d":"M15 19h3a3 3 0 0 0 3 -3v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -2.8 2"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2],"st":0.13,"os":[[3.01,19],[5,17],[7,15]]}];

export const CastIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CastIcon.displayName = "CastIcon";
