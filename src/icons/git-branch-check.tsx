"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 18a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M15 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M7 8v8"}],["path",{"d":"M7 12h8a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M15 19l2 2l4 -4"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[18,19],"dl":0.2,"st":0.08},{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.1}];

export const GitBranchCheckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitBranchCheckIcon.displayName = "GitBranchCheckIcon";
