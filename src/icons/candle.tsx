"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 21h6v-10a1 1 0 0 0 -1 -1h-4a1 1 0 0 0 -1 1l0 10"}],["path",{"d":"M12 2l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15.5],"a":0.08},{"fx":"pop","n":[1],"o":[12,4.5],"a":0.22,"dl":0.1}];

export const CandleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CandleIcon.displayName = "CandleIcon";
