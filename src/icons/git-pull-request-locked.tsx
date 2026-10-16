"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 8v8"}],["path",{"d":"M11 6h5a2 2 0 0 1 2 2v1"}],["path",{"d":"M14 9l-3 -3l3 -3"}],["path",{"d":"M14 17a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-3"}],["path",{"d":"M16 16v-1.5a1.5 1.5 0 1 1 3 0v1.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6],"o":[12.5,12],"st":0.1}];

export const GitPullRequestLockedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitPullRequestLockedIcon.displayName = "GitPullRequestLockedIcon";
