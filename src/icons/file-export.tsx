"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,5.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[1],"o":[13,12.5],"a":0.04}];

export const FileExportIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileExportIcon.displayName = "FileExportIcon";
