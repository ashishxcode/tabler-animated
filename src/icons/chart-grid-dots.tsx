"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M8 18h8"}],["path",{"d":"M18 20v1"}],["path",{"d":"M18 3v1"}],["path",{"d":"M6 20v1"}],["path",{"d":"M6 10v-7"}],["path",{"d":"M12 3v18"}],["path",{"d":"M18 8v8"}],["path",{"d":"M8 12h13"}],["path",{"d":"M21 6h-1"}],["path",{"d":"M16 6h-13"}],["path",{"d":"M3 12h1"}],["path",{"d":"M20 18h1"}],["path",{"d":"M3 18h1"}],["path",{"d":"M6 14v2"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"st":0.06,"os":[[18,6],[6,12],[6,18],[18,18],[12,18],[18,20.5],[18,3.5],[6,20.5],[6,6.5],[12,12],[18,12],[14.5,12],[20.5,6],[9.5,6],[3.5,12],[20.5,18],[3.5,18],[6,15]]}];

export const ChartGridDotsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartGridDotsIcon.displayName = "ChartGridDotsIcon";
