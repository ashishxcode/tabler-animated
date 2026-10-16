"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M10 8v8"}],["path",{"d":"M17 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,1],"st":0.13,"os":[[8,10],[10,12]]}];

export const Signal4gIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Signal4gIcon.displayName = "Signal4gIcon";
