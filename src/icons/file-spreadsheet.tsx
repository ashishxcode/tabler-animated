"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2"}],["path",{"d":"M8 11h8v7h-8l0 -7"}],["path",{"d":"M8 15h8"}],["path",{"d":"M11 11v7"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,2,3,4],"o":[13.5,10.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const FileSpreadsheetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileSpreadsheetIcon.displayName = "FileSpreadsheetIcon";
