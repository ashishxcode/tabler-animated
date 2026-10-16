"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M15 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 9a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M6 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M12 15a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.06}];

export const OlympicsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OlympicsIcon.displayName = "OlympicsIcon";
