"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M10 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M10 13h4"}],["path",{"d":"M17 8h4"}],["path",{"d":"M19 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,4],"o":[11,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13],[19,8]]}];

export const HttpPatchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpPatchIcon.displayName = "HttpPatchIcon";
