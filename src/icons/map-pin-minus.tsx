"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M12.758 21.337a2 2 0 0 1 -2.171 -.437l-4.244 -4.243a8 8 0 1 1 12.585 -1.652"}],["path",{"d":"M16 19h6"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"hop","n":[0,1],"o":[12,21.49],"d":[0,-2.2]}];

export const MapPinMinusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinMinusIcon.displayName = "MapPinMinusIcon";
