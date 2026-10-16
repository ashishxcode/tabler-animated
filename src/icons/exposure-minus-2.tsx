"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8"}],["path",{"d":"M3 12h6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[16,12],"a":0.08},{"fx":"pop","n":[1],"o":[6,12],"a":0.22,"dl":0.1}];

export const ExposureMinus2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ExposureMinus2Icon.displayName = "ExposureMinus2Icon";
