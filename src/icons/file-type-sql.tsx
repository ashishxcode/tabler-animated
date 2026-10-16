"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M18 15v6h2"}],["path",{"d":"M13 15a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2"}],["path",{"d":"M14 20l1.5 1.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,4,5],"o":[12.5,12],"dl":0.05,"st":0.07},{"fx":"draw","n":[6],"o":[14.75,20.75],"dl":0.2},{"fx":"pop","n":[3],"o":[12,7.5],"a":0.04}];

export const FileTypeSqlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeSqlIcon.displayName = "FileTypeSqlIcon";
