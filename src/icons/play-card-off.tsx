"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14"}],["path",{"d":"M16 18h.01"}],["path",{"d":"M13.716 13.712l-1.716 2.288l-3 -4l1.29 -1.72"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[16.01,18],"a":0.35,"dl":0.2},{"fx":"nudge","n":[0,2],"o":[12,12],"d":[1.8,0]}];

export const PlayCardOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayCardOffIcon.displayName = "PlayCardOffIcon";
