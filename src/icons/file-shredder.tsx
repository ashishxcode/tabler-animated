"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"}],["path",{"d":"M3 12l18 0"}],["path",{"d":"M6 16l0 2"}],["path",{"d":"M10 16l0 6"}],["path",{"d":"M14 16l0 2"}],["path",{"d":"M18 16l0 4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,5.5],"dl":0.05,"st":0.07},{"fx":"draw","n":[3,4,5,6],"o":[12,19],"dl":0.2},{"fx":"pop","n":[1,2],"o":[12,7.5],"a":0.04}];

export const FileShredderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileShredderIcon.displayName = "FileShredderIcon";
