"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6"}],["path",{"d":"M12 8h2a1 1 0 0 1 1 1v2m0 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-10"}],["path",{"d":"M15 11v-6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v12m-1 3h-4a1 1 0 0 1 -1 -1v-4"}],["path",{"d":"M4 20h14"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"grow","n":[0,1,2,3],"st":0.08,"os":[[6,20],[12,20],[18,20],[11,20]]}];

export const ChartBarOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartBarOffIcon.displayName = "ChartBarOffIcon";
