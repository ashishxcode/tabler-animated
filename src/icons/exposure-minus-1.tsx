"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h6"}],["path",{"d":"M18 19v-14l-4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[16,12],"a":0.08},{"fx":"pop","n":[0],"o":[6,12],"a":0.22,"dl":0.1}];

export const ExposureMinus1Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExposureMinus1Icon.displayName = "ExposureMinus1Icon";
