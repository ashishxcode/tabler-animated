"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 19h6a2 2 0 0 0 2 -2v-10a2 2 0 0 1 2 -2h7"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,12],"a":0.12}];

export const StrokeDynamicIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
StrokeDynamicIcon.displayName = "StrokeDynamicIcon";
