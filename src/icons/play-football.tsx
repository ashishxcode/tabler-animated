"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17l5 1l.75 -1.5"}],["path",{"d":"M14 21v-4l-4 -3l1 -6"}],["path",{"d":"M6 12v-3l5 -1l3 3l3 1"}],["path",{"d":"M18.007 19.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}],["path",{"d":"M10.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[1.8,0]}];

export const PlayFootballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayFootballIcon.displayName = "PlayFootballIcon";
