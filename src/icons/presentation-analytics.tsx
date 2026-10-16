"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 12v-4"}],["path",{"d":"M15 12v-2"}],["path",{"d":"M12 12v-1"}],["path",{"d":"M3 4h18"}],["path",{"d":"M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10"}],["path",{"d":"M12 16v4"}],["path",{"d":"M9 20h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[0,1,2,3,4,5,6],"o":[12,12],"st":0.08}];

export const PresentationAnalyticsIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PresentationAnalyticsIcon.displayName = "PresentationAnalyticsIcon";
