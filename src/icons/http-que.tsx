"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2"}],["path",{"d":"M6 15l1 1"}],["path",{"d":"M21 8h-4v8h4"}],["path",{"d":"M17 12h2.5"}],["path",{"d":"M10 8v6a2 2 0 1 0 4 0v-6"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,2,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6.5,15.5],[18.25,12]]}];

export const HttpQueIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpQueIcon.displayName = "HttpQueIcon";
