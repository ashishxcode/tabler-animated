"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M2 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1"}],["path",{"d":"M17 16.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"}],["path",{"d":"M9.5 15a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1 -3 0v-3a1.5 1.5 0 0 1 1.5 -1.5"}],["path",{"d":"M19.5 15l3 6"}],["path",{"d":"M19.5 21l3 -6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2,3,4,5,6],"o":[12.25,12],"dl":0.05,"st":0.07},{"fx":"pop","n":[1],"o":[12,7.5],"a":0.04}];

export const FileTypeDocxIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileTypeDocxIcon.displayName = "FileTypeDocxIcon";
