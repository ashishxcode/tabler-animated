"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v8"}],["path",{"d":"M9 4v13"}],["path",{"d":"M15 7v6.5"}],["path",{"d":"M17.001 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19.001 15.5v1.5"}],["path",{"d":"M19.001 21v1.5"}],["path",{"d":"M22.032 17.25l-1.299 .75"}],["path",{"d":"M17.27 20l-1.3 .75"}],["path",{"d":"M15.97 17.25l1.3 .75"}],["path",{"d":"M20.733 20l1.3 .75"}]];
const rig: Rig[] = [{"fx":"pop","n":[3,4,5,6,7,8,9],"o":[19,19],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1,2],"o":[12,12],"a":360}];

export const MapCogIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
MapCogIcon.displayName = "MapCogIcon";
