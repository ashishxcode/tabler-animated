"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 20v-16l-5 5"}],["path",{"d":"M16 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[11.5,12],"a":0.12}];

export const Number10Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number10Icon.displayName = "Number10Icon";
