"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M19 13v4a2 2 0 0 0 2 2h1"}],["path",{"d":"M14 19h-10"}],["path",{"d":"M4 15h10"}],["path",{"d":"M9 11v-5h2a3 3 0 0 1 3 3v6"}],["path",{"d":"M5 15v-3a1 1 0 0 1 1 -1h8"}],["path",{"d":"M19 17h-3"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4,5,6],"o":[9,12.5],"a":0.06},{"fx":"pop","n":[0,1,2,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,17],[14,17],[20.5,16],[17.5,17]]}];

export const BulldozerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BulldozerIcon.displayName = "BulldozerIcon";
