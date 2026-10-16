"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M10 16v-8"}],["path",{"d":"M14 16v-8"}],["path",{"d":"M10 12h4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.8]}];

export const HospitalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HospitalIcon.displayName = "HospitalIcon";
