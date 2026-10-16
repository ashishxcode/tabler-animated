"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 15v4"}],["path",{"d":"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2],"o":[12,19],"d":[0,-1.5]}];

export const FolderRootIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FolderRootIcon.displayName = "FolderRootIcon";
