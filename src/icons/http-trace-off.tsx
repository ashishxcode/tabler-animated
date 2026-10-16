"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8h4"}],["path",{"d":"M5 8v8"}],["path",{"d":"M10 12h2m2 -2a2 2 0 0 0 -2 -2m-2 2v6"}],["path",{"d":"M14 16l-3 -4"}],["path",{"d":"M17 13v-3a2 2 0 1 1 4 0v6"}],["path",{"d":"M17 13h4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3,5],"o":[16,14],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,8],[5,12],[12,12],[19,12]]}];

export const HttpTraceOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpTraceOffIcon.displayName = "HttpTraceOffIcon";
