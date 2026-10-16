"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 12h7m4 0h7"}],["path",{"d":"M3 6h1m4 0h13"}],["path",{"d":"M3 18h1m4 0h8m4 0h1"}],["path",{"d":"M6 3v1m0 4v8m0 4v1"}],["path",{"d":"M12 3v7m0 4v7"}],["path",{"d":"M18 3v13m0 4v1"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5,6,7,8,9],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6],[12,12],[6,18],[18,18]]}];

export const GoGameIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
GoGameIcon.displayName = "GoGameIcon";
