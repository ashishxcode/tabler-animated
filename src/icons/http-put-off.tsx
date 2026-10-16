"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M17 8h4"}],["path",{"d":"M19 8v8"}],["path",{"d":"M10 10v4a2 2 0 1 0 4 0m0 -4v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[19,8],[19,12],[12,12]]}];

export const HttpPutOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpPutOffIcon.displayName = "HttpPutOffIcon";
