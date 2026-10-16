"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12h-2l9 -9l9 9h-2"}],["path",{"d":"M5 12v7a2 2 0 0 0 2 2h5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2"}],["path",{"d":"M19 22.5a4.75 4.75 0 0 1 3.5 -3.5a4.75 4.75 0 0 1 -3.5 -3.5a4.75 4.75 0 0 1 -3.5 3.5a4.75 4.75 0 0 1 3.5 3.5"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12.75,22.5],"d":[0,-1.8]}];

export const HomeSparkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeSparkIcon.displayName = "HomeSparkIcon";
