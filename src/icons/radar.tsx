"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9"}],["path",{"d":"M16 9a5 5 0 1 0 -7 7"}],["path",{"d":"M20.486 9a9 9 0 1 0 -11.482 11.495"}]];
const rig: Rig[] = [{"fx":"wave","n":[1,0],"st":0.13,"os":[[11.5,11.5],[16,16]]}];

export const RadarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RadarIcon.displayName = "RadarIcon";
