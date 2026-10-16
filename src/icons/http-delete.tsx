"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0"}],["path",{"d":"M14 8h-4v8h4"}],["path",{"d":"M10 12h2.5"}],["path",{"d":"M17 8v8h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.25,12]]}];

export const HttpDeleteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
HttpDeleteIcon.displayName = "HttpDeleteIcon";
