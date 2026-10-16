"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19h5v-1a7.35 7.35 0 1 1 6 0v1h5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,11.47],"a":0.12}];

export const OmegaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
OmegaIcon.displayName = "OmegaIcon";
