"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M3 15h3v4.5a1.5 1.5 0 0 1 -3 0"}],["path",{"d":"M9 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2],"o":[11,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[3],"o":[12,12],"a":0.04}];

export const FileTypeJsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeJsIcon.displayName = "FileTypeJsIcon";
