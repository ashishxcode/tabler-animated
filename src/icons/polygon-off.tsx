"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M13 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M6.5 9.5l1.546 -1.311"}],["path",{"d":"M14 5.5l3 1.5"}],["path",{"d":"M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71"}],["path",{"d":"M13.5 17.5l-7 -5"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[8],"o":[12,12],"dl":0.25},{"fx":"pop","n":[3,6],"o":[15.75,15.5],"a":0.35,"dl":0.2},{"fx":"pop","n":[0,1,2,4,5,7],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[19,8],[5,11],[7.27,8.84],[15.5,6.25],[10,15]]}];

export const PolygonOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PolygonOffIcon.displayName = "PolygonOffIcon";
