"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M16 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 11v5"}],["path",{"d":"M4.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,11.75],"st":0.1}];

export const GitMergeQueueIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitMergeQueueIcon.displayName = "GitMergeQueueIcon";
