"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19.007 16.466a6 6 0 0 0 -4.007 -10.466h-11"}],["path",{"d":"M7 9l-3 -3l3 -3"}],["path",{"d":"M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}],["path",{"d":"M6 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12.5,11.23],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[5.5,6],[13.5,17],[7.5,17]]}];

export const RewindBackward20Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindBackward20Icon.displayName = "RewindBackward20Icon";
