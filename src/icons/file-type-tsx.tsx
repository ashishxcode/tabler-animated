"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M16 15l4 6"}],["path",{"d":"M16 21l4 -6"}],["path",{"d":"M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"}],["path",{"d":"M4.5 15h3"}],["path",{"d":"M6 15v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2,3,4],"o":[15,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[5,6],"o":[6,18],"dl":0.2},{"fx":"pop","n":[0],"o":[12,7.5],"a":0.04}];

export const FileTypeTsxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeTsxIcon.displayName = "FileTypeTsxIcon";
