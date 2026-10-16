"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2c.645 0 1.218 .305 1.584 .78"}],["path",{"d":"M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4"}],["path",{"d":"M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39"}]];
const rig: Rig[] = [{"fx":"write","n":[0,2],"o":[15.5,17.5]}];

export const HomeEditIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HomeEditIcon.displayName = "HomeEditIcon";
