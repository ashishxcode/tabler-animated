"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h4l3 8l4 -16l3 8h4"}]];
const rig: Rig[] = [{"fx":"draw","n":[0],"o":[12,12],"st":0.08}];

export const ActivityIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ActivityIcon.displayName = "ActivityIcon";
