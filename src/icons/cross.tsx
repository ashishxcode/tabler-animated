"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5l0 9"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.12}];

export const CrossIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CrossIcon.displayName = "CrossIcon";
