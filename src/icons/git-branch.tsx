"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 8l0 8"}],["path",{"d":"M9 18h6a2 2 0 0 0 2 -2v-5"}],["path",{"d":"M14 14l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5],"o":[12.5,12],"st":0.1}];

export const GitBranchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitBranchIcon.displayName = "GitBranchIcon";
