"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 21.5v-4.5"}],["path",{"d":"M8 17h8v-10a4 4 0 1 0 -8 0v10"}],["path",{"d":"M8 10.5l8 -3.5"}],["path",{"d":"M8 14.5l8 -3.5"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,10],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,19.25],[12,8.75],[12,12.75]]}];

export const IceCreamIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
IceCreamIcon.displayName = "IceCreamIcon";
