"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M15 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M6 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7"}],["path",{"d":"M3 15l3 -3l3 3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,3],"o":[11.5,9],"dl":0.05,"st":0.07},{"fx":"pop","n":[2],"o":[13,12],"a":0.04}];

export const FileIsrIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileIsrIcon.displayName = "FileIsrIcon";
