"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 17l4 -4"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M10 13h.01"}],["path",{"d":"M14 17h.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[1],"o":[16.5,5.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[0,3,4],"o":[12.01,15],"dl":0.2},{"fx":"pop","n":[2],"o":[12,12],"a":0.04}];

export const FilePercentIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FilePercentIcon.displayName = "FilePercentIcon";
