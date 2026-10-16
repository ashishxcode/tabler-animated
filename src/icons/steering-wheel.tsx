"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 14l0 7"}],["path",{"d":"M10 12l-6.75 -2"}],["path",{"d":"M14 12l6.75 -2"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,12],[12,17.5],[6.63,11],[17.38,11]]}];

export const SteeringWheelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SteeringWheelIcon.displayName = "SteeringWheelIcon";
