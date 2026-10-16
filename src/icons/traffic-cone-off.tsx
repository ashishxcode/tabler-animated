"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 20h16"}],["path",{"d":"M9.4 10h.6m4 0h.6"}],["path",{"d":"M7.8 15h7.2"}],["path",{"d":"M6 20l3.5 -10.5"}],["path",{"d":"M10.5 6.5l.5 -1.5h2l2 6m2 6l1 3"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,20],[12,10],[11.4,15],[7.75,14.75],[14.25,12.5]]}];

export const TrafficConeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrafficConeOffIcon.displayName = "TrafficConeOffIcon";
