"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19.007 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"}],["path",{"d":"M2 16l5 1l.5 -2.5"}],["path",{"d":"M11.5 21l2.5 -5.5l-5.5 -3.5l3.5 -4l3 4l4 2"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3],"o":[12,12],"d":[1.8,0]}];

export const PlayVolleyballIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayVolleyballIcon.displayName = "PlayVolleyballIcon";
