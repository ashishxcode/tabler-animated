"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 10.5v1.5"}],["path",{"d":"M12 16v1.5"}],["path",{"d":"M15.031 12.25l-1.299 .75"}],["path",{"d":"M10.268 15l-1.3 .75"}],["path",{"d":"M15 15.803l-1.285 -.773"}],["path",{"d":"M10.285 12.97l-1.285 -.773"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5,6,7,8],"o":[12,12],"a":360}];

export const FileSettingsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileSettingsIcon.displayName = "FileSettingsIcon";
