"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 20v-15l-8 11h10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12.5],"a":0.12}];

export const Number4Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number4Icon.displayName = "Number4Icon";
