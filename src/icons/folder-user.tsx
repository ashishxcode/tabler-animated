"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12.75 19h-7.75a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2.5"}],["path",{"d":"M17 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M22 22a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12.5,22],"d":[0,-1.5]}];

export const FolderUserIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FolderUserIcon.displayName = "FolderUserIcon";
