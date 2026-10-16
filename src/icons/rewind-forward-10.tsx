"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M17 9l3 -3l-3 -3"}],["path",{"d":"M8 17.918a5.997 5.997 0 0 1 -5 -5.918a6 6 0 0 1 6 -6h11"}],["path",{"d":"M12 14v6"}],["path",{"d":"M15 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[11.5,11.96],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.5,6],[12,17],[16.5,17]]}];

export const RewindForward10Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RewindForward10Icon.displayName = "RewindForward10Icon";
