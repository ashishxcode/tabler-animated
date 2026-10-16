"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 12a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}]];
const rig: Rig[] = [{"fx":"nudge","n":[0],"o":[12,12],"d":[1.8,0]}];

export const PlayerRecordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlayerRecordIcon.displayName = "PlayerRecordIcon";
