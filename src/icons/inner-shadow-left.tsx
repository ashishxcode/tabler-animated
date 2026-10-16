"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5.636 5.636a9 9 0 1 1 12.728 12.728a9 9 0 0 1 -12.728 -12.728"}],["path",{"d":"M7.757 16.243a6 6 0 0 1 0 -8.486"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[6.88,12],"a":0.22,"dl":0.1}];

export const InnerShadowLeftIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
InnerShadowLeftIcon.displayName = "InnerShadowLeftIcon";
