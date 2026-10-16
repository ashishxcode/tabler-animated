"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6a3 3 0 1 0 -6 0v7h6v-7"}],["path",{"d":"M14 13h6v-7a3 3 0 0 0 -6 0v7"}],["path",{"d":"M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5"}],["path",{"d":"M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5"}],["path",{"d":"M10 8h4"}],["path",{"d":"M10 11h4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,8],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,18.5],[17,18.5],[12,8],[12,11]]}];

export const JetpackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
JetpackIcon.displayName = "JetpackIcon";
