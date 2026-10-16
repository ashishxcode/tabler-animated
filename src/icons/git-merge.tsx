"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 8l0 8"}],["path",{"d":"M7 8a4 4 0 0 0 4 4h4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.1}];

export const GitMergeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitMergeIcon.displayName = "GitMergeIcon";
