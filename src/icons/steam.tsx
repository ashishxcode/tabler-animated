"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M19 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11 20a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M5.5 5.5l3 3"}],["path",{"d":"M15.5 15.5l3 3"}],["path",{"d":"M18.5 5.5l-3 3"}],["path",{"d":"M8.5 15.5l-3 3"}]];
const rig: Rig[] = [{"fx":"pop","n":[4,5,6,7],"o":[12,12],"a":0.06},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,4],[4,12],[20,12],[12,20]]}];

export const SteamIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SteamIcon.displayName = "SteamIcon";
