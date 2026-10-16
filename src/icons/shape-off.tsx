"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3.575 3.597a2 2 0 0 0 2.849 2.808"}],["path",{"d":"M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17.574 17.598a2 2 0 0 0 2.826 2.83"}],["path",{"d":"M5 7v10"}],["path",{"d":"M9 5h8"}],["path",{"d":"M7 19h10"}],["path",{"d":"M19 7v8"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3],"o":[18.71,19.29],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,6,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[4.71,5.3],[19,5],[5,19],[5,12],[13,5],[12,19],[19,11]]}];

export const ShapeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ShapeOffIcon.displayName = "ShapeOffIcon";
