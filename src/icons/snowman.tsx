"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75"}],["path",{"d":"M17.5 11.5l2.5 -1.5"}],["path",{"d":"M6.5 11.5l-2.5 -1.5"}],["path",{"d":"M12 13h.01"}],["path",{"d":"M12 16h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[18.75,10.75],[5.25,10.75],[12.01,13],[12.01,16]]}];

export const SnowmanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SnowmanIcon.displayName = "SnowmanIcon";
