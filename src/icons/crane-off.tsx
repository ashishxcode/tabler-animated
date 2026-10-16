"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21h6"}],["path",{"d":"M9 21v-12"}],["path",{"d":"M9 5v-2l-1 1"}],["path",{"d":"M6 6l-3 3h6"}],["path",{"d":"M13 9h8"}],["path",{"d":"M9 3l10 6"}],["path",{"d":"M17 9v4a2 2 0 0 1 2 2m-2 2a2 2 0 0 1 -2 -2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[7],"o":[12,12],"dl":0.25},{"fx":"pop","n":[6],"o":[17,13],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,21],[9,15],[8.5,4],[6,7.5],[17,9],[14,6]]}];

export const CraneOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CraneOffIcon.displayName = "CraneOffIcon";
