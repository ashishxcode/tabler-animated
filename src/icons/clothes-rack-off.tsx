"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 7v1m0 4v9"}],["path",{"d":"M9 21h6"}],["path",{"d":"M7.757 9.243a6 6 0 0 0 3.129 1.653m3.578 -.424a6 6 0 0 0 1.779 -1.229"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[4],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,14],[12,21],[12,10.07]]}];

export const ClothesRackOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClothesRackOffIcon.displayName = "ClothesRackOffIcon";
