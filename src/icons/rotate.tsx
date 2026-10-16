"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5"}]];
const rig: Rig[] = [{"fx":"spin","n":[0],"o":[11.98,12.04],"a":360}];

export const RotateIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RotateIcon.displayName = "RotateIcon";
