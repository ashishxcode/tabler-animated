"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h12"}],["path",{"d":"M9 18h6"}],["path",{"d":"M19 16v3m0 3v.01"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[19,19.01],"dl":0.2,"st":0.08},{"fx":"pop","n":[0,1],"o":[12,9],"a":0.06},{"fx":"pop","n":[2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,18]]}];

export const Filter2ExclamationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
Filter2ExclamationIcon.displayName = "Filter2ExclamationIcon";
