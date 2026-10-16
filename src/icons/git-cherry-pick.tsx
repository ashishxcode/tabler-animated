"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M7 3v6"}],["path",{"d":"M7 15v6"}],["path",{"d":"M13 7h2.5l1.5 5l-1.5 5h-2.5"}],["path",{"d":"M17 12h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4],"o":[12,12],"st":0.1}];

export const GitCherryPickIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GitCherryPickIcon.displayName = "GitCherryPickIcon";
