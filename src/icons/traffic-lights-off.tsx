"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 4c.912 -1.219 2.36 -2 4 -2a5 5 0 0 1 5 5v6m0 4a5 5 0 0 1 -10 0v-10"}],["path",{"d":"M12 8a1 1 0 1 0 -1 -1"}],["path",{"d":"M11.291 11.295a1 1 0 0 0 1.418 1.41"}],["path",{"d":"M11 17a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,7],[11.86,12.14],[12,17]]}];

export const TrafficLightsOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrafficLightsOffIcon.displayName = "TrafficLightsOffIcon";
