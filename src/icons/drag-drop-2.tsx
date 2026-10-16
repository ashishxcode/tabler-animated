"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8"}],["path",{"d":"M4 4l0 .01"}],["path",{"d":"M8 4l0 .01"}],["path",{"d":"M12 4l0 .01"}],["path",{"d":"M16 4l0 .01"}],["path",{"d":"M4 8l0 .01"}],["path",{"d":"M4 12l0 .01"}],["path",{"d":"M4 16l0 .01"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4,5,6,7],"o":[12,20],"d":[0,-1.8]}];

export const DragDrop2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
DragDrop2Icon.displayName = "DragDrop2Icon";
