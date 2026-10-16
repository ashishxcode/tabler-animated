"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8h-14"}],["path",{"d":"M5 12h9"}],["path",{"d":"M11 16h-6"}],["path",{"d":"M15 16h6"}],["path",{"d":"M18 13v6"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[13,13.5],"d":[2.4,0],"st":0.07}];

export const PlaylistAddIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaylistAddIcon.displayName = "PlaylistAddIcon";
