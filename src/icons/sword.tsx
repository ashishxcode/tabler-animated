"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 4v5l-9 7l-4 4l-3 -3l4 -4l7 -9l5 0"}],["path",{"d":"M6.5 11.5l6 6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[9.5,14.5],"a":0.22,"dl":0.1}];

export const SwordIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SwordIcon.displayName = "SwordIcon";
