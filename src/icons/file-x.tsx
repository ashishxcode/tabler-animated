"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M10 12l4 4m0 -4l-4 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,5.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[2],"o":[12,14],"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileXIcon.displayName = "FileXIcon";
