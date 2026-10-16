"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651"}],["path",{"d":"M16 22l5 -5"}],["path",{"d":"M21 21.5v-4.5h-4.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3],"o":[18.5,19.5],"a":0.35,"dl":0.2},{"fx":"hop","n":[0,1],"o":[12,21.49],"d":[0,-2.2]}];

export const MapPinShareIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapPinShareIcon.displayName = "MapPinShareIcon";
