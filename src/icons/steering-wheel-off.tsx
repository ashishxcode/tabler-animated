"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M20.04 16.048a9 9 0 0 0 -12.083 -12.09m-2.32 1.678a9 9 0 1 0 12.737 12.719"}],["path",{"d":"M10.595 10.576a2 2 0 1 0 2.827 2.83"}],["path",{"d":"M12 14v7"}],["path",{"d":"M10 12l-6.75 -2"}],["path",{"d":"M15.542 11.543l5.208 -1.543"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.72,12.28],[12,17.5],[6.63,11],[18.15,10.77]]}];

export const SteeringWheelOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SteeringWheelOffIcon.displayName = "SteeringWheelOffIcon";
