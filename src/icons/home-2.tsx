"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12l-2 0l9 -9l9 9l-2 0"}],["path",{"d":"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"}],["path",{"d":"M10 12h4v4h-4l0 -4"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,21],"d":[0,-1.8]}];

export const Home2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Home2Icon.displayName = "Home2Icon";
