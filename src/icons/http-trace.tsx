"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8h4"}],["path",{"d":"M5 8v8"}],["path",{"d":"M10 12h2a2 2 0 1 0 0 -4h-2v8"}],["path",{"d":"M14 16l-3 -4"}],["path",{"d":"M17 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M17 13h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2,4],"o":[13,12],"a":0.06},{"fx":"pop","n":[0,3,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,8],[12.5,14],[19,13]]}];

export const HttpTraceIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpTraceIcon.displayName = "HttpTraceIcon";
