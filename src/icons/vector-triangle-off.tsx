"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 6v-1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1"}],["path",{"d":"M3 18a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -2"}],["path",{"d":"M20.705 20.709a1 1 0 0 1 -.705 .291h-2a1 1 0 0 1 -1 -1v-2c0 -.28 .115 -.532 .3 -.714"}],["path",{"d":"M6.5 17.1l3.749 -6.823"}],["path",{"d":"M13.158 9.197l-.658 -1.197"}],["path",{"d":"M7 19h10"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[2],"o":[18.85,19.14],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,6],[5,19],[8.37,13.69],[12.83,8.6],[12,19]]}];

export const VectorTriangleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VectorTriangleOffIcon.displayName = "VectorTriangleOffIcon";
