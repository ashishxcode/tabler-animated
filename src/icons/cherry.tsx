"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 16.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"}],["path",{"d":"M14 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}],["path",{"d":"M9 13c.366 -2 1.866 -3.873 4.5 -5.6"}],["path",{"d":"M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9"}],["path",{"d":"M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3,4],"o":[10.5,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[17,18],[11.25,10.2]]}];

export const CherryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CherryIcon.displayName = "CherryIcon";
