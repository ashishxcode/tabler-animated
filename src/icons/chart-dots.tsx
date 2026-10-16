"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 3v18h18"}],["path",{"d":"M7 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 7a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10.16 10.62l2.34 2.88"}],["path",{"d":"M15.088 13.328l2.837 -4.586"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1,2,3,4,5],"st":0.06,"os":[[12,12],[9,9],[19,7],[14,15],[11.33,12.06],[16.51,11.04]]}];

export const ChartDotsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartDotsIcon.displayName = "ChartDotsIcon";
