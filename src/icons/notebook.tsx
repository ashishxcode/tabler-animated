"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"}],["path",{"d":"M13 8l2 0"}],["path",{"d":"M13 12l2 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[14,10],"dl":0.2},{"fx":"pop","n":[0],"o":[12,13],"a":0.04}];

export const NotebookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NotebookIcon.displayName = "NotebookIcon";
