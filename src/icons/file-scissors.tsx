"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M14 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M8 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 17l6 -6"}],["path",{"d":"M15 17l-6 -6"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0,1,2,3,4,5],"o":[12,21],"a":-16}];

export const FileScissorsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileScissorsIcon.displayName = "FileScissorsIcon";
