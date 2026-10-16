"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 8h4"}],["path",{"d":"M5 8v8"}],["path",{"d":"M17 8h4"}],["path",{"d":"M19 8v8"}],["path",{"d":"M10 8l4 8"}],["path",{"d":"M10 16l4 -8"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3,4,5],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,8],[19,8]]}];

export const TxtIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TxtIcon.displayName = "TxtIcon";
