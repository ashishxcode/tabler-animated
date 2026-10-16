"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1"}],["path",{"d":"M14 8h-4v8h4"}],["path",{"d":"M10 12h2.5"}],["path",{"d":"M17 8h4"}],["path",{"d":"M19 8v8"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,4],"o":[11,12],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.25,12],[19,8]]}];

export const HttpGetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpGetIcon.displayName = "HttpGetIcon";
