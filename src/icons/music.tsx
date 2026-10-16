"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M9 17v-13h10v13"}],["path",{"d":"M9 8h10"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3],"o":[11,12],"d":[0,-2]}];

export const MusicIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MusicIcon.displayName = "MusicIcon";
