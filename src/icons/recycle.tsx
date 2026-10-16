"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M12 17l-2 2l2 2"}],["path",{"d":"M10 19h9a2 2 0 0 0 1.75 -2.75l-.55 -1"}],["path",{"d":"M8.536 11l-.732 -2.732l-2.732 .732"}],["path",{"d":"M7.804 8.268l-4.5 7.794a2 2 0 0 0 1.506 2.89l1.141 .024"}],["path",{"d":"M15.464 11l2.732 .732l.732 -2.732"}],["path",{"d":"M18.196 11.732l-4.5 -7.794a2 2 0 0 0 -3.256 -.14l-.591 .976"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,3,5],"o":[11.99,11.01],"a":0.06},{"fx":"pop","n":[0,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[11,19],[6.8,9.63],[17.2,10.37]]}];

export const RecycleIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
RecycleIcon.displayName = "RecycleIcon";
