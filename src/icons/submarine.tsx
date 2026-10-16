"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10l-3 1.5l-1 -1.5h-2"}],["path",{"d":"M17 11l-1 -3h-5l-1 3"}],["path",{"d":"M13 8v-2a1 1 0 0 1 1 -1h1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,14],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,9.5],[14,6.5]]}];

export const SubmarineIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SubmarineIcon.displayName = "SubmarineIcon";
