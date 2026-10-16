"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 15v6"}],["path",{"d":"M16 5h4"}],["path",{"d":"M8 5h-4"}],["path",{"d":"M15 11h-6a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1"}],["path",{"d":"M14 11h-4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-3"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4],"o":[12,21],"a":-16}];

export const HammerDrillIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HammerDrillIcon.displayName = "HammerDrillIcon";
