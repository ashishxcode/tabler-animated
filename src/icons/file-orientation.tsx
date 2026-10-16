"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M10 21h-3a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2"}],["path",{"d":"M13 20h5a2 2 0 0 0 2 -2v-5"}],["path",{"d":"M15 22l-2 -2l2 -2"}],["path",{"d":"M18 15l2 -2l2 2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2],"o":[16.5,11.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[3,4],"o":[17.5,17.5],"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileOrientationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileOrientationIcon.displayName = "FileOrientationIcon";
