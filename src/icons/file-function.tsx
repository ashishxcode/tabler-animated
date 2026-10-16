"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M10.5 17h.333c.474 0 .87 -.323 .916 -.746l.502 -4.508c.047 -.423 .443 -.746 .916 -.746h.333"}],["path",{"d":"M10.5 14h3"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2],"o":[14.75,10],"dl":0.05,"st":0.07},{"fx":"draw","n":[3],"o":[12,14],"dl":0.2},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileFunctionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileFunctionIcon.displayName = "FileFunctionIcon";
