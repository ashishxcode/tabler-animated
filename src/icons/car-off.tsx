"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15.584 15.588a2 2 0 0 0 2.828 2.83"}],["path",{"d":"M5 17h-2v-6l2 -5h1m4 0h4l4 5h1a2 2 0 0 1 2 2v4m-6 0h-6m-6 -6h8m4 0h3m-6 -3v-2"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[3],"o":[12,12],"dl":0.25},{"fx":"pop","n":[1],"o":[16.7,17.3],"a":0.35,"dl":0.2},{"fx":"slide","n":[0,2],"o":[12,12.5],"d":[2.4,0]}];

export const CarOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
CarOffIcon.displayName = "CarOffIcon";
