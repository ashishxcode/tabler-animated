"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 17a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M17 13v4h4"}],["path",{"d":"M12 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2],"o":[16.5,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[1],"o":[19,15],"dl":0.2},{"fx":"pop","n":[3],"o":[10,12],"a":0.04}];

export const FileReportIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileReportIcon.displayName = "FileReportIcon";
