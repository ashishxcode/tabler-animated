"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h5v8h4v-16h4v8h5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12]}];

export const WaveSquareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WaveSquareIcon.displayName = "WaveSquareIcon";
