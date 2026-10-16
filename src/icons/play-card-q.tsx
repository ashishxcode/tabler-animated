"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"}],["path",{"d":"M8 6h.01"}],["path",{"d":"M16 18h.01"}],["path",{"d":"M12 9a2 2 0 0 1 2 2v2a2 2 0 1 1 -4 0v-2a2 2 0 0 1 2 -2"}],["path",{"d":"M13 14l1.5 1.5"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4],"o":[12,12],"d":[1.8,0]}];

export const PlayCardQIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayCardQIcon.displayName = "PlayCardQIcon";
