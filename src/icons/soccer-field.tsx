"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M3 9h3v6h-3l0 -6"}],["path",{"d":"M18 9h3v6h-3l0 -6"}],["path",{"d":"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"}],["path",{"d":"M12 5l0 14"}]];
const rig: Rig[] = [{"fx":"hop","n":[0,1,2,3,4],"o":[12,19],"d":[0,-2.4]}];

export const SoccerFieldIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SoccerFieldIcon.displayName = "SoccerFieldIcon";
