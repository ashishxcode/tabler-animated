"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 18l0 .01"}],["path",{"d":"M10 18l0 .01"}],["path",{"d":"M14 18l0 .01"}],["path",{"d":"M18 18l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3],"o":[12,18.01]}];

export const AntennaBars1Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AntennaBars1Icon.displayName = "AntennaBars1Icon";
