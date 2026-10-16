"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M11 3h2"}],["path",{"d":"M12 3v3"}],["path",{"d":"M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6a2 2 0 0 1 -1.916 1.425h-8.404a2 2 0 0 1 -1.916 -1.425l-1.8 -6a2 2 0 0 1 1.916 -2.575"}],["path",{"d":"M8.5 6l1.5 10v5"}],["path",{"d":"M15.5 6l-1.5 10v5"}]];
const rig: Rig[] = [{"fx":"pop","n":[2,3,4],"o":[12,13.5],"a":0.06},{"fx":"pop","n":[0,1],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,3],[12,4.5]]}];

export const AirTrafficControlIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AirTrafficControlIcon.displayName = "AirTrafficControlIcon";
