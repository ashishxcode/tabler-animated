"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 19h-5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"}],["path",{"d":"M14 21v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M14 19h4"}],["path",{"d":"M21 15v6"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[12,21],"d":[0,-1.5]}];

export const FolderAiIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FolderAiIcon.displayName = "FolderAiIcon";
