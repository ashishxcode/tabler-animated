"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.884 10.554a9 9 0 1 0 -10.337 10.328"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h6.9"}],["path",{"d":"M11.5 3a17 17 0 0 0 -1.502 14.954"}],["path",{"d":"M12.5 3a17 17 0 0 1 2.52 7.603"}],["path",{"d":"M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}],["path",{"d":"M18 16.5v1.5l.5 .5"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[11.94,11.94],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,9],[7.05,15],[10.21,10.48],[13.76,6.8],[18,18],[18.25,17.5]]}];

export const TimezoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TimezoneIcon.displayName = "TimezoneIcon";
