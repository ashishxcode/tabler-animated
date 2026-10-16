"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M17 17v-13h4"}],["path",{"d":"M13 5h-10"}],["path",{"d":"M3 9l10 0"}],["path",{"d":"M9 13h-6"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4],"o":[12,12],"d":[2.4,0],"st":0.07}];

export const PlaylistIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaylistIcon.displayName = "PlaylistIcon";
