"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}],["path",{"d":"M6 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M10 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const Number40SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number40SmallIcon.displayName = "Number40SmallIcon";
