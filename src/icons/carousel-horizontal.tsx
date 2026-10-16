"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M7 6a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1l0 -12"}],["path",{"d":"M22 17h-1a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h1"}],["path",{"d":"M2 17h1a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[21,12],[3,12]]}];

export const CarouselHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarouselHorizontalIcon.displayName = "CarouselHorizontalIcon";
