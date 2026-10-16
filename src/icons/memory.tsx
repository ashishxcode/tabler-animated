"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 11v2"}],["path",{"d":"M16 11v2"}],["path",{"d":"M3 7h18a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-18a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1"}],["path",{"d":"M8 11v2"}],["path",{"d":"M4 17v2"}],["path",{"d":"M7 17v2"}],["path",{"d":"M10 17v2"}],["path",{"d":"M20 17v2"}],["path",{"d":"M17 17v2"}],["path",{"d":"M13 17v2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,3,4,5,6,7,8,9],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[16,12],[8,12],[4,18],[7,18],[10,18],[20,18],[17,18],[13,18]]}];

export const MemoryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MemoryIcon.displayName = "MemoryIcon";
