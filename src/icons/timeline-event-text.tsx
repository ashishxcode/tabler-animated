"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 20h-6"}],["path",{"d":"M14 20h6"}],["path",{"d":"M12 15l-2 -2h-3a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-3l-2 2"}],["path",{"d":"M9 6h6"}],["path",{"d":"M9 9h3"}]];
const rig: Rig[] = [{"fx":"slide","n":[0,1,2,3,4,5],"o":[12,12.5],"d":[2.4,0],"st":0.06}];

export const TimelineEventTextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimelineEventTextIcon.displayName = "TimelineEventTextIcon";
