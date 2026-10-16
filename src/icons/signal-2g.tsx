"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1"}],["path",{"d":"M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,12]}];

export const Signal2gIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Signal2gIcon.displayName = "Signal2gIcon";
