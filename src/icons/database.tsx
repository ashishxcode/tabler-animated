"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"}],["path",{"d":"M4 6v6a8 3 0 0 0 16 0v-6"}],["path",{"d":"M4 12v6a8 3 0 0 0 16 0v-6"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2],"st":0.12,"os":[[12,6],[12,10.5],[12,16.5]]}];

export const DatabaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DatabaseIcon.displayName = "DatabaseIcon";
