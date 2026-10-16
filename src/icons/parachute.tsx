"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M22 12a10 10 0 1 0 -20 0"}],["path",{"d":"M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3"}],["path",{"d":"M2 12l10 10l-3.5 -10"}],["path",{"d":"M15.5 12l-3.5 10l10 -10"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1],"o":[12,7],"a":0.06},{"fx":"pop","n":[2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[17,17]]}];

export const ParachuteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ParachuteIcon.displayName = "ParachuteIcon";
