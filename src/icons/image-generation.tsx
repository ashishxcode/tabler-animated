"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 21v-4a4 4 0 1 1 4 4h-4"}],["path",{"d":"M21 3a16 16 0 0 0 -12.8 10.2"}],["path",{"d":"M21 3a16 16 0 0 1 -10.2 12.8"}],["path",{"d":"M10.6 9a9 9 0 0 1 4.4 4.4"}],["path",{"d":"M17 19a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2"}],["path",{"d":"M3 5a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2"}]];
const rig: Rig[] = [{"fx":"pop","n":[1,2],"o":[14.6,9.4],"a":0.06},{"fx":"pop","n":[0,3,4,5],"a":0.24,"dl":0.1,"st":0.07,"os":[[7,17],[12.8,11.2],[19,19],[5,5]]}];

export const ImageGenerationIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ImageGenerationIcon.displayName = "ImageGenerationIcon";
