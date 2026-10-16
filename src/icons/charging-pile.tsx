"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18 7l-1 1"}],["path",{"d":"M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"}],["path",{"d":"M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"}],["path",{"d":"M9 11.5l-1.5 2.5h3l-1.5 2.5"}],["path",{"d":"M3 20l12 0"}],["path",{"d":"M4 8l10 0"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2,3,4,5],"o":[11.5,12]}];

export const ChargingPileIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChargingPileIcon.displayName = "ChargingPileIcon";
