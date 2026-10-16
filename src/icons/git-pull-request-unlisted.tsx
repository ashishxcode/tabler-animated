"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16.5 5.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M16.5 11.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M6 8v8"}],["path",{"d":"M16 17l3 3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[11.5,12],"st":0.1}];

export const GitPullRequestUnlistedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitPullRequestUnlistedIcon.displayName = "GitPullRequestUnlistedIcon";
