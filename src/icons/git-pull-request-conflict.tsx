"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M11 6h5a2 2 0 0 1 2 2v8"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 11v5"}],["path",{"d":"M4 4l4 4"}],["path",{"d":"M8 4l-4 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.1}];

export const GitPullRequestConflictIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitPullRequestConflictIcon.displayName = "GitPullRequestConflictIcon";
