"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M19 8v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1"}],["path",{"d":"M7 22v-1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v1"}],["path",{"d":"M17 2v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[12,21],[12,3]]}];

export const CarouselVerticalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarouselVerticalIcon.displayName = "CarouselVerticalIcon";
