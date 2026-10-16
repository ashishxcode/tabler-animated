"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2"}],["path",{"d":"M8 6h.01"}],["path",{"d":"M16 18h.01"}],["path",{"d":"M10 9v6"}],["path",{"d":"M14 9l-3 3l3 3"}],["path",{"d":"M10 12h1"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5],"o":[12,12],"d":[1.8,0]}];

export const PlayCardKIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayCardKIcon.displayName = "PlayCardKIcon";
