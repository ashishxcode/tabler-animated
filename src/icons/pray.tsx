"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 20h8l-4 -4v-7l4 3l2 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,14.5],"a":0.08},{"fx":"pop","n":[0],"o":[12,5],"a":0.22,"dl":0.1}];

export const PrayIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PrayIcon.displayName = "PrayIcon";
