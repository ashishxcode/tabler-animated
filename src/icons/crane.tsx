"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M6 21h6"}],["path",{"d":"M9 21v-18l-6 6h18"}],["path",{"d":"M9 3l10 6"}],["path",{"d":"M17 9v4a2 2 0 1 1 -2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,21],[14,6],[17,13]]}];

export const CraneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CraneIcon.displayName = "CraneIcon";
