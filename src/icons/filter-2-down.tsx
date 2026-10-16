"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3"}],["path",{"d":"M19 16v6"}],["path",{"d":"M19 22l3 -3"}],["path",{"d":"M19 22l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,9],"a":0.06},{"fx":"pop","n":[2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.5,18],[19,19],[20.5,20.5],[17.5,20.5]]}];

export const Filter2DownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2DownIcon.displayName = "Filter2DownIcon";
