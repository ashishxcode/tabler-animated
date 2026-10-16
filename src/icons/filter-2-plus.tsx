"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h10"}],["path",{"d":"M9 18h3"}],["path",{"d":"M19 15v6"}],["path",{"d":"M16 18h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[3,4],"o":[19,18],"dl":0.2,"st":0.08},{"fx":"pop","n":[0],"o":[12,6],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,12],[10.5,18]]}];

export const Filter2PlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2PlusIcon.displayName = "Filter2PlusIcon";
