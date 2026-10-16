"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M4 21l3 -4"}],["path",{"d":"M13 21l-2 -4l-3 -3l1 -6"}],["path",{"d":"M3 12l2 -3l4 -1l6 4"}],["path",{"d":"M16.5 14l3.5 7"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[9,14.5],"a":0.06},{"fx":"pop","n":[0,1,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[10,4],[5.5,19],[18.25,17.5]]}];

export const BlindIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BlindIcon.displayName = "BlindIcon";
