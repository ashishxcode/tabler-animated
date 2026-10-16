"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M14 3v4a1 1 0 0 0 1 1h4"}],["path",{"d":"M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5"}],["path",{"d":"M14 17.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"}],["path",{"d":"M18.5 19.5l2.5 2.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[17.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1],"o":[12,12]}];

export const FileSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FileSearchIcon.displayName = "FileSearchIcon";
