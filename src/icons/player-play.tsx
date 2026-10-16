"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 4v16l13 -8l-13 -8"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[13.5,12],"d":[1.8,0]}];

export const PlayerPlayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayerPlayIcon.displayName = "PlayerPlayIcon";
