"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M9 17v-13h10v7"}],["path",{"d":"M9 8h10"}],["path",{"d":"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M20.2 20.2l1.8 1.8"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4],"o":[18.5,18.5],"a":0.35,"dl":0.2},{"fx":"sweep","n":[0,1,2],"o":[11,12]}];

export const MusicSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MusicSearchIcon.displayName = "MusicSearchIcon";
