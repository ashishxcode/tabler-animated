"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3l9.5 7l-3.5 11h-12l-3.5 -11l9.5 -7"}],["path",{"d":"M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5l5.5 -4"}],["path",{"d":"M2.5 10l9.5 3l9.5 -3"}],["path",{"d":"M12 3v10l6 8"}],["path",{"d":"M6 21l6 -8"}]];
const rig: Rig[] = [{"fx":"wave","n":[4,1,3,2],"st":0.13,"os":[[9,17],[12,12.25],[15,12],[12,11.5]]}];

export const ChartRadarIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ChartRadarIcon.displayName = "ChartRadarIcon";
