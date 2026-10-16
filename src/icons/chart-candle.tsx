"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 7a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M6 4l0 2"}],["path",{"d":"M6 11l0 9"}],["path",{"d":"M10 15a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -3"}],["path",{"d":"M12 4l0 10"}],["path",{"d":"M12 19l0 1"}],["path",{"d":"M16 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -4"}],["path",{"d":"M18 4l0 1"}],["path",{"d":"M18 11l0 9"}]];
const rig: Rig[] = [{"fx":"grow","n":[0,1,2,3,4,5,6,7,8],"st":0.08,"os":[[6,11],[6,6],[6,20],[12,19],[12,14],[12,20],[18,11],[18,5],[18,20]]}];

export const ChartCandleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartCandleIcon.displayName = "ChartCandleIcon";
