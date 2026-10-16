"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"}],["path",{"d":"M13 13l9 3l-4 2l-2 4l-3 -9"}],["path",{"d":"M3 3l0 .01"}],["path",{"d":"M7 3l0 .01"}],["path",{"d":"M11 3l0 .01"}],["path",{"d":"M15 3l0 .01"}],["path",{"d":"M3 7l0 .01"}],["path",{"d":"M3 11l0 .01"}],["path",{"d":"M3 15l0 .01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7,8],"o":[12.5,22],"d":[0,-1.8]}];

export const DragDropIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DragDropIcon.displayName = "DragDropIcon";
