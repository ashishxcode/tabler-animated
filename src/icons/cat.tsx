"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20 3v10a8 8 0 1 1 -16 0v-10l3.432 3.432a7.963 7.963 0 0 1 4.568 -1.432c1.769 0 3.403 .574 4.728 1.546l3.272 -3.546"}],["path",{"d":"M2 16h5l-4 4"}],["path",{"d":"M22 16h-5l4 4"}],["path",{"d":"M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M9 11v.01"}],["path",{"d":"M15 11v.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.5,18],[19.5,18],[12,16],[9,11.01],[15,11.01]]}];

export const CatIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CatIcon.displayName = "CatIcon";
