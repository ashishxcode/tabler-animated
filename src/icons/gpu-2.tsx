"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 6a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1l0 -12"}],["path",{"d":"M14 9h-2a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2v-3h-1"}],["path",{"d":"M3 10h2"}],["path",{"d":"M3 14h2"}],["path",{"d":"M10 3v2"}],["path",{"d":"M14 3v2"}],["path",{"d":"M21 10h-2"}],["path",{"d":"M21 14h-2"}],["path",{"d":"M14 21v-2"}],["path",{"d":"M10 21v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[4,10],[4,14],[10,4],[14,4],[20,10],[20,14],[14,20],[10,20]]}];

export const Gpu2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Gpu2Icon.displayName = "Gpu2Icon";
