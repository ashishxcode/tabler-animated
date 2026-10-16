"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10.25 19h-5.25a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3"}],["path",{"d":"M13 22l3 -3l2 2l4 -4"}],["path",{"d":"M19 17h3v3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[12.5,13],"st":0.08}];

export const FolderStatsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FolderStatsIcon.displayName = "FolderStatsIcon";
