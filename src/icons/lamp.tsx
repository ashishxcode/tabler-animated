"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 20h6"}],["path",{"d":"M12 20v-8"}],["path",{"d":"M5 12h14l-4 -8h-6l-4 8"}]];
const rig: Rig[] = [{"fx":"flash","n":[0,1,2],"o":[12,12]}];

export const LampIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LampIcon.displayName = "LampIcon";
