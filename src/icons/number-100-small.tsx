"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8h1v8"}],["path",{"d":"M9 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}],["path",{"d":"M16 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2],"o":[12,12],"a":0.12}];

export const Number100SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number100SmallIcon.displayName = "Number100SmallIcon";
