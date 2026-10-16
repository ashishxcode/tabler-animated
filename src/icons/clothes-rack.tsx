"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M12 7v14"}],["path",{"d":"M9 21h6"}],["path",{"d":"M7.757 9.243a6 6 0 0 0 8.486 0"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[12,14],"a":0.06},{"fx":"pop","n":[0,2,3],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,5],[12,21],[12,10.12]]}];

export const ClothesRackIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ClothesRackIcon.displayName = "ClothesRackIcon";
