"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4"}],["path",{"d":"M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M6 10h4m4 0h4"}],["path",{"d":"M6 16h10"}],["path",{"d":"M9 20v1"}],["path",{"d":"M15 20v1"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[5],"o":[15,20.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1,2,3,4],"o":[12,21],"d":[0,-1.5]}];

export const LuggageOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
LuggageOffIcon.displayName = "LuggageOffIcon";
