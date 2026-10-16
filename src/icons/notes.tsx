"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -14"}],["path",{"d":"M9 7l6 0"}],["path",{"d":"M9 11l6 0"}],["path",{"d":"M9 15l4 0"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2,3],"o":[12,11],"dl":0.2},{"fx":"pop","n":[0],"o":[12,12],"a":0.04}];

export const NotesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NotesIcon.displayName = "NotesIcon";
