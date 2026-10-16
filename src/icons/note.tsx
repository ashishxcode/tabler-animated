"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 20l7 -7"}],["path",{"d":"M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[16.5,16.5],"dl":0.05,"st":0.07},{"fx":"pop","n":[1],"o":[12,12],"a":0.04}];

export const NoteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
NoteIcon.displayName = "NoteIcon";
