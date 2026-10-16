"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5l0 5"}],["path",{"d":"M7 15v-5h5v5h5v-5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12.5],"a":0.08},{"fx":"pop","n":[1],"o":[12,12.5],"a":0.22,"dl":0.1}];

export const CubeUnfoldedIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CubeUnfoldedIcon.displayName = "CubeUnfoldedIcon";
