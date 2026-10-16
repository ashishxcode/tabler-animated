"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h3.5"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 17v4.5"}],["path",{"d":"M21 17h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4,5],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1],"o":[12,9],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[10.75,18]]}];

export const Filter2ShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2ShareIcon.displayName = "Filter2ShareIcon";
