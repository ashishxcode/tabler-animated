"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.5 18a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0"}],["path",{"d":"M2 17.5h1.5"}],["path",{"d":"M8.5 17.5h1.5"}],["path",{"d":"M9.5 14.5l-1.5 1.5"}],["path",{"d":"M2.5 14.5l1.5 1.5"}],["path",{"d":"M2.5 21.5l1.5 -1.5"}],["path",{"d":"M8 20l1.5 1.5"}],["path",{"d":"M15.5 16l6.5 -5l-11 -8"}],["path",{"d":"M13 12.5l2 -1.5l-11 -8v8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1,2,3,4,5,6,7,8],"o":[12,12.25],"d":[1.8,0]}];

export const PlayBugsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayBugsIcon.displayName = "PlayBugsIcon";
