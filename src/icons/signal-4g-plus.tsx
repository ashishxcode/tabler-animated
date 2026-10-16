"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 12h4"}],["path",{"d":"M3 8v3a1 1 0 0 0 1 1h3"}],["path",{"d":"M7 8v8"}],["path",{"d":"M19 10v4"}],["path",{"d":"M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}]];
const rig: Rig[] = [{"fx":"wave","n":[0,3,1,2],"st":0.13,"os":[[19,12],[19,12],[5,10],[7,12]]}];

export const Signal4gPlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Signal4gPlusIcon.displayName = "Signal4gPlusIcon";
