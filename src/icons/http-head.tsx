"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 16v-8"}],["path",{"d":"M7 8v8"}],["path",{"d":"M3 12h4"}],["path",{"d":"M14 8h-4v8h4"}],["path",{"d":"M10 12h2.5"}],["path",{"d":"M17 16v-6a2 2 0 1 1 4 0v6"}],["path",{"d":"M17 13h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[2,4,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,12],[11.25,12],[19,13]]}];

export const HttpHeadIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpHeadIcon.displayName = "HttpHeadIcon";
