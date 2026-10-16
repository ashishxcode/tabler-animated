"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12"}],["path",{"d":"M4 8h16"}],["path",{"d":"M20 12h-16"}],["path",{"d":"M4 16h16"}],["path",{"d":"M9 4v4"}],["path",{"d":"M14 8v4"}],["path",{"d":"M8 12v4"}],["path",{"d":"M16 12v4"}],["path",{"d":"M11 16v4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[12,12],[12,16],[9,6],[14,10],[8,14],[16,14],[11,18]]}];

export const WallIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WallIcon.displayName = "WallIcon";
