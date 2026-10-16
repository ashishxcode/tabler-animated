"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M6 15l1 1"}],["path",{"d":"M21 8h-4v8h4"}],["path",{"d":"M17 12h2.5"}],["path",{"d":"M10 10v4a2 2 0 1 0 4 0m0 -4v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[6.5,15.5],[19,12],[18.25,12],[12,12]]}];

export const HttpQueOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpQueOffIcon.displayName = "HttpQueOffIcon";
