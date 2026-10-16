"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 20.415a8 8 0 1 0 3 -15.415h-3"}],["path",{"d":"M13 8l-3 -3l3 -3"}],["path",{"d":"M7 17l4 -4l-4 -4l-4 4l4 4"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[15.5,13],"a":0.06},{"fx":"pop","n":[1,2],"a":0.24,"dl":0.1,"st":0.07,"os":[[11.5,5],[7,13]]}];

export const PlaceholderIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
PlaceholderIcon.displayName = "PlaceholderIcon";
