"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18l0 -3"}],["path",{"d":"M10 18l0 .01"}],["path",{"d":"M14 18l0 .01"}],["path",{"d":"M18 18l0 .01"}]];
const rig: Rig[] = [{"fx":"wave","n":[1,2,3],"st":0.13,"os":[[10,18.01],[14,18.01],[18,18.01]]}];

export const AntennaBars2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaBars2Icon.displayName = "AntennaBars2Icon";
