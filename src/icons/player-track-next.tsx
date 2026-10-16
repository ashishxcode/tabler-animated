"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 5v14l8 -7l-8 -7"}],["path",{"d":"M14 5v14l8 -7l-8 -7"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[12.5,12],"d":[2.4,0]}];

export const PlayerTrackNextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayerTrackNextIcon.displayName = "PlayerTrackNextIcon";
