"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0"}],["path",{"d":"M17 13v-5l4 8v-8"}],["path",{"d":"M14 14a2 2 0 1 1 -4 0v-4m2 -2a2 2 0 0 1 2 2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[19,12],[12,12]]}];

export const HttpConnectOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpConnectOffIcon.displayName = "HttpConnectOffIcon";
