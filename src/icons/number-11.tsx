"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 20v-16l-5 5"}],["path",{"d":"M18 20v-16l-5 5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[10.5,12],"a":0.12}];

export const Number11Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Number11Icon.displayName = "Number11Icon";
