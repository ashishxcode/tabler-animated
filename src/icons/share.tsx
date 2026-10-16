"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M8.7 10.7l6.6 -3.4"}],["path",{"d":"M8.7 13.3l6.6 3.4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.06}];

export const ShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShareIcon.displayName = "ShareIcon";
