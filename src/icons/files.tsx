"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M15 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2"}],["path",{"d":"M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[17.5,5.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[1,2],"o":[12.5,12],"a":0.04}];

export const FilesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FilesIcon.displayName = "FilesIcon";
