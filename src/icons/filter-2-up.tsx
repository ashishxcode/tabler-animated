"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3"}],["path",{"d":"M19 22v-6m0 0l3 3m-3 -3l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,9],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,18],[19,19]]}];

export const Filter2UpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2UpIcon.displayName = "Filter2UpIcon";
