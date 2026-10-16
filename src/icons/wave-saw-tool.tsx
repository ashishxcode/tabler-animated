"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h5l4 8v-16l4 8h5"}]];
const rig: Rig[] = [{"fx":"tilt","n":[0],"o":[12,20],"a":-16}];

export const WaveSawToolIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WaveSawToolIcon.displayName = "WaveSawToolIcon";
