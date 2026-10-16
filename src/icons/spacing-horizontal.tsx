"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"}],["path",{"d":"M12 8v8"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"st":0.07},{"fx":"pop","n":[0,1],"o":[12,12],"a":0.04}];

export const SpacingHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SpacingHorizontalIcon.displayName = "SpacingHorizontalIcon";
