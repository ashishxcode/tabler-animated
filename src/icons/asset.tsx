"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M14.218 17.975l6.619 -12.174"}],["path",{"d":"M6.079 9.756l12.217 -6.631"}],["path",{"d":"M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3,4],"o":[11.92,12.06],"a":0.06},{"fx":"pop","n":[1,2,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[9,15],[19,5],[9,15]]}];

export const AssetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AssetIcon.displayName = "AssetIcon";
