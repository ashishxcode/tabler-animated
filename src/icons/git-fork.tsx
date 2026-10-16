"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M5 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M12 12l0 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.1}];

export const GitForkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitForkIcon.displayName = "GitForkIcon";
