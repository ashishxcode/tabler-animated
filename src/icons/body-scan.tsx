"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 8a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M10 17v-1a2 2 0 1 1 4 0v1"}],["path",{"d":"M8 10q 1 1 2 1h4q 1 0 2 -1"}],["path",{"d":"M12 11v3"}],["path",{"d":"M3 7v-2a2 2 0 0 1 2 -2h2"}],["path",{"d":"M3 17v2a2 2 0 0 0 2 2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M17 21h2a2 2 0 0 0 2 -2v-2"}]];
const rig: Rig[] = [{"fx":"pop","n":[2],"o":[12,10.5],"a":0.06},{"fx":"pop","n":[0,1,3,4,5,6,7],"a":0.22,"dl":0.1,"st":0.07,"os":[[12,8],[12,15.5],[12,12.5],[5,5],[5,19],[19,5],[19,19]]}];

export const BodyScanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BodyScanIcon.displayName = "BodyScanIcon";
