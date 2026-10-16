"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18l0 -3"}],["path",{"d":"M10 18l0 -6"}],["path",{"d":"M14 18l0 .01"}],["path",{"d":"M18 18l0 .01"}]];
const rig: Rig[] = [{"fx":"wave","n":[2,3,0],"st":0.13,"os":[[14,18.01],[18,18.01],[6,16.5]]}];

export const AntennaBars3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaBars3Icon.displayName = "AntennaBars3Icon";
