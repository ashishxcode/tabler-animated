"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2"}],["path",{"d":"M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"}],["path",{"d":"M10 12l4 0"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,20],"d":[0,-1.5]}];

export const ArchiveIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ArchiveIcon.displayName = "ArchiveIcon";
