"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.364 18.364a9 9 0 1 0 -12.728 -12.728a9 9 0 0 0 12.728 12.728"}],["path",{"d":"M7.757 16.243a6 6 0 0 0 8.486 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.08},{"fx":"pop","n":[1],"o":[12,17.12],"a":0.22,"dl":0.1}];

export const InnerShadowBottomIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
InnerShadowBottomIcon.displayName = "InnerShadowBottomIcon";
