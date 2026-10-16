"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 21l3.5 -2l-4.5 -4l2 -4.5"}],["path",{"d":"M5 7l4 3l5 .5l4 2.5l2.5 3"}],["path",{"d":"M4 20l5 -1l1.5 -2"}],["path",{"d":"M13.007 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.007 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12.25,11.5],"d":[1.8,0]}];

export const PlayHandballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayHandballIcon.displayName = "PlayHandballIcon";
