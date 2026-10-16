"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M2 18h15.293c1.02 0 1.972 -.503 2.536 -1.34l2.171 -3.66h-18.479l-1.521 5"}],["path",{"d":"M14 8l-1 -2"}],["path",{"d":"M6.107 12.675l1.384 -4.675h8l2.675 4.598"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,15.5],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[13.5,7],[12.14,10.34]]}];

export const FerryIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
FerryIcon.displayName = "FerryIcon";
