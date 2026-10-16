"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"}],["path",{"d":"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"}],["path",{"d":"M12 9l0 3"}],["path",{"d":"M12 15l.01 0"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3],"o":[12,12],"a":180,"sym":true}];

export const RefreshAlertIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RefreshAlertIcon.displayName = "RefreshAlertIcon";
