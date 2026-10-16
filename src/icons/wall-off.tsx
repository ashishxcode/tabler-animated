"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4h10a2 2 0 0 1 2 2v10m-.589 3.417c-.361 .36 -.86 .583 -1.411 .583h-12a2 2 0 0 1 -2 -2v-12c0 -.55 .222 -1.047 .58 -1.409"}],["path",{"d":"M4 8h4m4 0h8"}],["path",{"d":"M20 12h-4m-4 0h-8"}],["path",{"d":"M4 16h12"}],["path",{"d":"M9 4v1"}],["path",{"d":"M14 8v2"}],["path",{"d":"M8 12v4"}],["path",{"d":"M11 16v4"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,8],[12,12],[10,16],[9,4.5],[14,9],[8,14],[11,18]]}];

export const WallOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
WallOffIcon.displayName = "WallOffIcon";
