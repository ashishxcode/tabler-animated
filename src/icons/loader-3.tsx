"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"}],["path",{"d":"M17 12a5 5 0 1 0 -5 5"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1],"o":[12,12],"a":360}];

export const Loader3Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Loader3Icon.displayName = "Loader3Icon";
