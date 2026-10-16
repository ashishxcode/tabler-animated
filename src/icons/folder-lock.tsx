"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 19a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-2"}],["path",{"d":"M18 18v-1.5a1.5 1.5 0 1 1 3 0v1.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[19.5,18.5],"a":0.35,"dl":0.2}];

export const FolderLockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FolderLockIcon.displayName = "FolderLockIcon";
