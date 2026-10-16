"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5"}],["path",{"d":"M12 18v-11h3"}],["path",{"d":"M3 17l0 -5l9 0"}],["path",{"d":"M3 9l18 -6"}],["path",{"d":"M6 12l0 -4"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,5],"o":[12,10.5],"a":0.06},{"fx":"pop","n":[0,1,3,4,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[5,17],[17,17],[13.5,12.5],[7.5,14.5],[6,10]]}];

export const FiretruckIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FiretruckIcon.displayName = "FiretruckIcon";
