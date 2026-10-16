"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 21v-4a3 3 0 0 1 3 -3h5"}],["path",{"d":"M9 17l3 -3l-3 -3"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[11.5,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[3],"o":[12,12],"a":0.04}];

export const FileSymlinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileSymlinkIcon.displayName = "FileSymlinkIcon";
