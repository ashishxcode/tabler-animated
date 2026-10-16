"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"}],["path",{"d":"M17 8v8"}],["path",{"d":"M21 8l-3 4l3 4"}],["path",{"d":"M17 12h1"}],["path",{"d":"M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[3],"a":0.24,"dl":0.1,"st":0.07,"os":[[17.5,12]]}];

export const SdkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SdkIcon.displayName = "SdkIcon";
