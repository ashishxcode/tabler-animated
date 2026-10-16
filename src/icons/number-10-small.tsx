"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 8h1v8"}],["path",{"d":"M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[13,12],"a":0.12}];

export const Number10SmallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number10SmallIcon.displayName = "Number10SmallIcon";
