"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2"}],["path",{"d":"M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2"}],["path",{"d":"M5 16h.01"}],["path",{"d":"M5 13h.01"}],["path",{"d":"M5 10h.01"}],["path",{"d":"M19 13h.01"}],["path",{"d":"M19 16h.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,5.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[3,4,5,6,7],"o":[12.01,13],"dl":0.2},{"fx":"pop","n":[1,2],"o":[12,12],"a":0.04}];

export const FileBrokenIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileBrokenIcon.displayName = "FileBrokenIcon";
