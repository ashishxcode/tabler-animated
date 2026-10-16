"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6 8v8"}],["path",{"d":"M18 11h.01"}],["path",{"d":"M18 6h.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12,12],"st":0.1}];

export const GitPullRequestDraftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitPullRequestDraftIcon.displayName = "GitPullRequestDraftIcon";
