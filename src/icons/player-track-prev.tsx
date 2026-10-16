"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 5v14l-8 -7l8 -7"}],["path",{"d":"M10 5v14l-8 -7l8 -7"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0,1],"o":[11.5,12],"d":[-2.4,0]}];

export const PlayerTrackPrevIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayerTrackPrevIcon.displayName = "PlayerTrackPrevIcon";
