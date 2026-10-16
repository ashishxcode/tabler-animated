"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 12h18"}],["path",{"d":"M12 3v18"}],["path",{"d":"M4 16l4 4"}],["path",{"d":"M4 20l4 -4"}],["path",{"d":"M16 4l4 4"}],["path",{"d":"M16 8l4 -4"}],["path",{"d":"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,3,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,6],[6,18],[6,18],[18,6],[18,6],[18,18]]}];

export const TicTacIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TicTacIcon.displayName = "TicTacIcon";
