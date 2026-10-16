"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9a3 3 0 0 0 0 6v-6"}],["path",{"d":"M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5l0 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.1},{"fx":"spin","n":[0],"o":[10.5,12],"a":45,"sym":true}];

export const BrightnessHalfIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BrightnessHalfIcon.displayName = "BrightnessHalfIcon";
