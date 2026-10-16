"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 8l0 8"}],["path",{"d":"M11 6h5a2 2 0 0 1 2 2v8"}],["path",{"d":"M14 9l-3 -3l3 -3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,11.5],"st":0.1}];

export const GitPullRequestIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitPullRequestIcon.displayName = "GitPullRequestIcon";
