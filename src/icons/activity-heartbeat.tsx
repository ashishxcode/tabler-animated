"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"st":0.08}];

export const ActivityHeartbeatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ActivityHeartbeatIcon.displayName = "ActivityHeartbeatIcon";
