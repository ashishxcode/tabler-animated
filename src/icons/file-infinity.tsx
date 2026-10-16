"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15.536 17.586a2.123 2.123 0 0 0 -2.929 0a1.951 1.951 0 0 0 0 2.828c.809 .781 2.12 .781 2.929 0c.809 -.781 -.805 .778 0 0l1.46 -1.41l1.46 -1.419"}],["path",{"d":"M15.54 17.582l1.46 1.42l1.46 1.41c.809 .78 -.805 -.779 0 0s2.12 .781 2.929 0a1.951 1.951 0 0 0 0 -2.828a2.123 2.123 0 0 0 -2.929 0"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M9.5 21h-2.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[17,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[3],"o":[12,12],"a":0.04}];

export const FileInfinityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileInfinityIcon.displayName = "FileInfinityIcon";
