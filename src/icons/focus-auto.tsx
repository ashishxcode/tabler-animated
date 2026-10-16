"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 8v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M4 16v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M16 20h2a2 2 0 0 0 2 -2v-2"}],["path",{"d":"M10 15v-4a2 2 0 1 1 4 0v4"}],["path",{"d":"M10 13h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4],"o":[12,12],"a":0.06},{"fx":"pop","n":[5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,13]]}];

export const FocusAutoIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FocusAutoIcon.displayName = "FocusAutoIcon";
